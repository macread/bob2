const User = require('../controllers/user');

module.exports = app => {
	app.route('/users').get(User.list);
	app.route('/users/:userId').get(User.get);
	app.route('/users').post(User.post);
	app.route('/users/:userId').put(User.put);
	app.route('/users/:userId').delete(User.delete);
};