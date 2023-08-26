const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async () => {
    try {
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Db Connected');
    } catch (error) {
        console.error('Mongoose connection error:', error);
        process.exit(1);
    }
};
