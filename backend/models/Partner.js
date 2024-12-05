const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
