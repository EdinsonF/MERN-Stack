const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI;

mongoose.connect(DB)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

    module.exports = mongoose;

