import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, minLength: 3, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, min: 10, max: 50 },
  email: { type: String, required: true },
  phone: Number,
  address: [{ city: String }, { street: String }, { alley: String }],
  createAt: { type: Date, default: () => Date.now() },
});
const User = models.User || model("User", userSchema);
export default User;
