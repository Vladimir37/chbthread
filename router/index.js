const Router = require('koa-router');
const auth = require('./auth');
const captcha = require('./captcha');

let router = new Router();

router.use('/auth', auth.routes());
router.use('/captcha', captcha.routes());

module.exports = router;