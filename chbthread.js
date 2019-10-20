const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const json = require('koa-json');
const config = require('./config');
const Router = require('./router/index');
const passport = require('./assets/passport');

const app = new Koa();

app.keys = ['secret'];
app.use(session({}, app));
app.use(bodyParser());

app.use(json());

app.use(passport.initialize());
app.use(passport.session());

app.use(Router.routes());

app.listen(config.port);