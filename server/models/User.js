import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Joi from 'joi';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  //encryprt password
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.validateRegister = function () {
  const validateSchema = Joi.object({
    username: Joi.string().trim().alphanum().min(2).max(50).required(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().trim().min(6),
  });

  return validateSchema.validateAsync({
    username: this.username,
    email: this.email,
    password: this.password,
  });
};

export function vaidateLogin(data) {
  const validateSchema = Joi.object({
    email: Joi.string().email().required().trim(),
    password: Joi.string().trim(),
  });

  return validateSchema.validateAsync({
    email: data.email,
    password: data.password,
  });
}

const User = mongoose.model('user', userSchema);

export default User;
