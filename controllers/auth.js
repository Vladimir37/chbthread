const passport = require('../assets/passport');
const config = require('../config');

const authControllers = {
    getStatus(ctx) {
        ctx.body = {
            success: true,
            logged: ctx.isAuthenticated(),
            user: ctx.state.user,
        };
    },
    login(ctx) {
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

        return passport.authenticate('local', function(err, user) {
            if (user === false) {
                ctx.body = { 
                    success: false,
                }
                ctx.throw(401, 'login');
            } else {
                ctx.body = {
                    success: true,
                };
                return ctx.login(user);
            }
        })(ctx);
    },
    logout(ctx) {
        ctx.logout();
        ctx.body = {
            success: true,
        };
    },
}

module.exports = authControllers;