var middlewares = {
    forAdmin(ctx, next) {
        if (ctx.isAuthenticated() && ctx.state.user.status == 0) {
            return next();
        } else {
            return ctx.throw(403, 'Forbidden');
        }
    },
    forAll(ctx, next) {
        if (ctx.isAuthenticated()) {
            return next();
        } else {
            return ctx.throw(403, 'Forbidden');
        }
    }
}

module.exports = middlewares;