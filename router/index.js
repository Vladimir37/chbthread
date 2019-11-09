const Router = require('koa-router');
const auth = require('./auth');
const captcha = require('./captcha');
const admins = require('./admins');

let router = new Router();

router.use('/auth', auth.routes());
router.use('/captcha', captcha.routes());
router.use('/admins', admins.routes());

module.exports = router;