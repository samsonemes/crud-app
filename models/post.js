const mongoose = require('mongoose');

const postModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const Post = mongoose.model("Post", postModel)
module.exports = Post;