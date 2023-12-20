const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = (email) => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, minLength: 5, unique: true, validate: [validateEmail, 'Please enter a valid email address'] },
  password: { type: String, required: true },
  role: { type: String, enum: ['guest', 'member', 'admin'], default: 'guest' }
});

module.exports = mongoose.model('User', userSchema);
