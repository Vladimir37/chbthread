const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const json = require('koa-json');
const cors = require('@koa/cors');
const captcha = require('koa-captcha-v2');
const config = require('./config');
const Router = require('./router/index');
const passport = require('./assets/passport');
const errorHandling = require('./assets/errors');

const app = new Koa();

app.keys = [config.session_key];
app.use(session(app));
app.use(bodyParser());

app.use(json());

app.use(cors({
    credentials: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(errorHandling);

app.use(captcha({
    background: '#593196',
    background_image: null,
    case_sensitivity: false,
    char_pool: '0123456789',
    char_length: 6,
    color: '#FFF',
    font_family: 'SpicyRice',
    font_size: '30px',
    font_style: 'normal',
    font_weight: 'normal',
    fonts: {},
    height: 60,
    prefix: 'captcha_',
    rotate: 30,
    timeout_in: 60 * 1000,
    type: 'character',
    width: 160,
}));

app.use(Router.routes());

app.listen(config.port);