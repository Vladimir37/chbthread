const randomToken = require('random-token');
const models = require('../assets/models');
const config = require('../config');

const tokenGenerator = randomToken.create('0123456789');

const ProfileControllers = {
    async getAllProfiles(ctx) {
        let profiles = await models.ProfileModel.find();

        profiles = profiles.map(elem => {
            elem.deleteCode = '';
            return elem;
        })

        ctx.body = {
            success: true,
            body: profiles,
        };
    },
    async getArchive(ctx) {
        //
    },
    async createProfile(ctx) {
        const captcha = ctx.request.body.captcha;
        const captchaResult = ctx.captcha.verify(config.captcha_key, captcha);
        
        ctx.captcha.refresh(config.captcha_key, 5 * 60 * 1000);
        if (!captchaResult) {
            ctx.body = { 
                success: false,
            }
            ctx.throw(401, 'captcha');
            return;
        }

        let deleteCode;
        do {
            deleteCode = tokenGenerator(12);
            const deleteCodeExist = await models.ProfileModel.findOne({
                deleteCode,
            });
            if (!deleteCodeExist) {
                break;
            }
        } while (true);

        const profileObj = {
            city: ctx.request.body.city,
            gender: ctx.request.body.gender,
            age: ctx.request.body.age,
            targetGender: ctx.request.body.targetGender,
            aboutMe: ctx.request.body.aboutMe,
            aboutTarget: ctx.request.body.aboutTarget,
            contacts: ctx.request.body.contacts,
            date: new Date(),
            deleteCode: deleteCode,
        };

        await models.ProfileModel.create(profileObj);

        ctx.body = {
            success: true,
            body: deleteCode,
        };
    },
    async removeByCode(ctx) {
        //
    },
    async removeByAdmin(ctx) {
        //
    }
};

module.exports = ProfileControllers;