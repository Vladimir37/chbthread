const md5 = require('md5');
const models = require('./assets/models');

function creating() {
    const login = process.argv[2];
    const pass = process.argv[3];

    if (!login || !pass) {
        console.log('ERROR');
        console.log('Login or password not found.');
        process.exit();
    }

    let newUser = new models.UserModel({
        status: 0,
        login: login,
        pass: md5(pass),
        active: true,
    });

    models.UserModel.findOne({
        login
    }).then(resp => {
        if (resp) {
            console.log('ERROR');
            console.log('Login already in use.');
            process.exit();
        }
        return newUser.save()
    }).then(() => {
        console.log('SUCCESS');
        process.exit();
    }).catch(err => {
        console.log('ERROR');
        console.log(err);
        process.exit();
    });
}

creating();