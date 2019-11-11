const Router = require('koa-router');
const auth = require('./auth');
const captcha = require('./captcha');
const admins = require('./admins');
const profiles = require('./profiles');

let router = new Router();

router.use('/auth', auth.routes());
router.use('/captcha', captcha.routes());
router.use('/admins', admins.routes());
router.use('/profiles', profiles.routes());

module.exports = router;