const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title for the post"],
        trim: true,
        maxlength: [100, "Content must not exceed 100 characters"],
    },
    content: {
        type: String,
        required: [true, "Please provide content for the post"],
        trim: true,
        maxlength: [400, "Content must not exceed 400 characters"]
    }
})

module.exports = mongoose.model('Post', blogSchema);