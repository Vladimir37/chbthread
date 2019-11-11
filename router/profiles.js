const Router = require('koa-router');
const Profiles = require('../controllers/profiles');

let router = new Router();

router.get('/getAll', Profiles.getAllProfiles);
router.get('/getArchive', Profiles.getArchive);
router.post('/create', Profiles.createProfile);
router.post('/removeCode', Profiles.removeByCode);
router.post('/removeAdmin', Profiles.removeByAdmin);

module.exports = router;