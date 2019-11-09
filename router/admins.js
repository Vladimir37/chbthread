const Router = require('koa-router');
const Admins = require('../controllers/admins');

let router = new Router();

router.get('/getAll', Admins.getAllAdmins);
router.post('/create', Admins.createAdmin);
router.post('/remove', Admins.removeAdmin);

module.exports = router;