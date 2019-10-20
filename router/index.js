const Router = require('koa-router');
const auth = require('./auth');

let router = new Router();

router.use('/auth', auth.routes());

module.exports = router;