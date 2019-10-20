const passport = require('../assets/passport');

const authControllers = {
    getStatus(ctx) {
        ctx.body = {
            success: true,
            logged: ctx.isAuthenticated(),
            user: ctx.state.user,
        };
    },
    login(ctx) {
        return passport.authenticate('local', function(err, user) {
            if (user === false) {
                ctx.body = { 
                    success: false,
                }
                ctx.throw(401);
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