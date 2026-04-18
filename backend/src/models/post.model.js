const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image : String,
    caption : String
})

// ye ban gaya schema aur schema se banega model

const PostModel = mongoose.model('Post', postSchema); 

// ab schema se model banao jiska naam Post hai aur usme postSchema use karo
// post is the name of the collection in the database where our posts will be stored
// PostModel ka matlb hai ki ab hum PostModel ka use karke apne database me posts create, read, update, delete kar sakte hain

module.exports = PostModel;
// ab is model ko export kar do taki use app.js me import karke use kar sako