const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 15 },
  msg: { type: String, required: true, minLength: 3 },
  author: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Post', postSchema);
