import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
  },

  password: {
    required: true,
    type: String,
  },

 phone: {
    required: true,
    type: String,
  },
 bio: {
    required: true,
    type: String,
  },
 
});

export const userModel = mongoose.models.users ?? mongoose.model("users", userSchema);
