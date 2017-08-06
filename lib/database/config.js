const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://db:27017/restify-sample', {
  useMongoClient: true
});

mongoose.connection.on('connected', () => {
  console.log('Connection open');
});
