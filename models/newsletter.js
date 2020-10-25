const mongoose = require('mongoose');
const NewsletterSchema = new mongoose.Schema({
    estabelishment_category: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    }
});
 mongoose.model('newsletter', NewsletterSchema);
 module.exports = mongoose.model('newsletter');