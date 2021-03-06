import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import mongooseHidden from 'mongoose-hidden';

import { emailRegex, passwordRegex } from '../lib/stringTesters.js';

export const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdById: {
      type: mongoose.Schema.ObjectId,
      ref: 'Profile',
      required: true
    },
    createdByName: {
      type: String
    },
    createdBySurname: {
      type: String
    }
  },
  { timestamps: true }
);

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, 'First name required'] },
  surname: { type: String, required: [true, 'Surname required'] },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
    validate: (email) => emailRegex.test(email)
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    minlength: [8, 'Password must be a minimum of 8 characters'],
    validate: (password) => passwordRegex.test(password)
  },
  isHelper: { type: Boolean },
  averageRating: { type: String },
  services: { type: Array },
  bio: { type: String },
  city: { type: String, required: [true, 'City required'] },
  region: { type: String, required: [true, 'Region required'] },
  imageProfile: { type: String },
  imageService: { type: String },
  comments: [commentSchema],
  posts: { type: Array },
  isAdmin: { type: Boolean }
});

profileSchema.pre('save', function encryptPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  }
  next();
});

profileSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

profileSchema.plugin(mongooseHidden({ defaultHidden: { password: true, email: true } }));

export default mongoose.model('Profile', profileSchema);
