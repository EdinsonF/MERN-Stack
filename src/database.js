const mongoose = require('mongoose');

const DB = 'mongodb://localhost/mern-task';

mongoose.connect(DB)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

    module.exports = mongoose;
