const Router = require('koa-router');
const Auth = require('../controllers/auth');

let router = new Router();

router.get('/status', Auth.getStatus);
router.post('/login', Auth.login);
router.post('/logout', Auth.logout);

module.exports = router;