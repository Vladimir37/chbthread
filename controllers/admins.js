const md5 = require('md5');
const models = require('../assets/models');

const adminControllers = {
    async getAllAdmins(ctx) {
        let adminsList = await models.UserModel.find();
        adminsList = adminsList.map(elem => {
            elem.pass = '';
            return elem;
        });
        ctx.body = {
            success: true,
            body: adminsList,
        };
    },
    async createAdmin(ctx) {
        const adminIsCreated = await models.UserModel.findOne({
            login: ctx.request.body.login,
        });
        if (adminIsCreated) {
            ctx.throw(400, 'Login already exist');
        }
        await models.UserModel.create({
            status: 1,
            login: ctx.request.body.login,
            pass: md5(ctx.request.body.pass),
        });
        ctx.body = {
            success: true,
        };
    },
    async removeAdmin(ctx) {
        const targetAdmin = await models.UserModel.findById(ctx.request.body.id);
        if (!targetAdmin) {
            ctx.throw(400, 'Incorrect id');
        }

        await targetAdmin.remove();

        ctx.body = {
            success: true,
        };
    }
};

module.exports = adminControllers;