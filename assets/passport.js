const passport = require('koa-passport');
const local = require('passport-local');
const md5 = require('md5');
const models = require('../assets/models');

const LocalStrategy = local.Strategy;

passport.use(new LocalStrategy(
    (login, pass, done) => {
        const passHash = md5(pass);
        models.UserModel.findOne({
            login,
        }).then(user => {
            if (!user || user.pass != passHash) {
                done(null, false);
            }
            user.pass = '';
            done(null, user);
        }).catch(err => {
            done(err);
        });
    })
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    models.UserModel.findById(id, (err, user) => {
        user.pass = '';
        done(err, user);
    })
});

module.exports = passport;