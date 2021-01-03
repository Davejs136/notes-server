import { Schema, model, Document } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs';

type UserDocument = Notes.Users.UserDocument & Document;

const userSchema = new Schema({
  firstname: { type: String, maxlength: 30, required: true },
  lastname: { type: String, maxlength: 30 },
  username: { type: String, required: true, unique: true },
  email: { type: String, maxlength: 30, required: true },
  password: { type: String, minlength: 6, required: true },
});

userSchema.methods.encryptPassword = async (password: string) => {
  const salt = await genSalt(10);
  return hash(password, salt);
};

userSchema.methods.comparePassword = async function (password: string) {
  return compare(password, this.password);
};

const User = model<UserDocument>('User', userSchema);

export default User;
