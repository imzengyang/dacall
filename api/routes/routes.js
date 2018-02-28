module.exports = function (app) {
    let user = require('../controllers/userController')

    app.route('/users')
        .get(user.list_all_users);

    app.route('/user')
        .post(user.create_a_user);
}