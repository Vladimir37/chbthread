const config = require('../config');

const captchaControllers = {
    getCaptcha(ctx) {
        ctx.type = ctx.captcha.type;
        ctx.body = ctx.captcha.refresh(config.captcha_key, 5 * 60 * 1000);
        return;
    }
};

module.exports = captchaControllers;