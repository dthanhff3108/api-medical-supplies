import { number } from "joi";
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      unique: true,
    },
    location: {
      type: String,
      default: null,
    },
    ownerInfo: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: "Auth",
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    staffs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Auth",
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
departmentSchema.plugin(autoIncrement.plugin, "Department");

const Department = mongoose.model("Department", departmentSchema);

export default Department;
