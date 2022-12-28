const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: [100, "Content must not exceed 100 characters"]
    },
    content: {
        type: String,
        required: true,
        maxlength: [400, "Content must not exceed 400 characters"]
    }
})

module.exports = new mongoose.model('Post', blogSchema)