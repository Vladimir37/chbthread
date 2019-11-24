const Router = require('koa-router');
const Admins = require('../controllers/admins');
const Middlewares = require('../assets/middleware');

let router = new Router();

router.get('/getAll', Middlewares.forAdmin, Admins.getAllAdmins);
router.post('/create', Middlewares.forAdmin, Admins.createAdmin);
router.post('/remove', Middlewares.forAdmin, Admins.removeAdmin);

module.exports = router;