import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: "string", required: true, unique: true },
    name: { type: "string", required: true, unique: true },
    image_url: { type: "string", unique: true },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
