const mongoose = require('mongoose');

const schemaDefination = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
};

const contactSchema = new mongoose.Schema(schemaDefination);
module.exports = mongoose.model('Contact', contactSchema);
 