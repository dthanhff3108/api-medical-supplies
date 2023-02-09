import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 40,
      unique: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      default: null,
      ref: "Department",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
      },
      versionKey: false,
    },
  }
);

userSchema.plugin(autoIncrement.plugin, {
  model: "User",
  startAt: 1,
});

const User = mongoose.model("User", userSchema);
export default User;
