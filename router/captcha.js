const Router = require('koa-router');
const Captcha = require('../controllers/captcha');

let router = new Router();

router.get('/get', Captcha.getCaptcha);

module.exports = router;