const mongoose = require('mongoose');

momgoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('Good to go 🚀'))
  .on('error', (error) => console.warn('Warning 🤬', error));

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //reacdy to run the next test!
    done(); //after collection of users is done go a
  });
});
