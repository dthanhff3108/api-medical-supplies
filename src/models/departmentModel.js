import mongoose from "mongoose";

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
    toJSON: { virtuals: true },
  }
);
const Department = mongoose.model("Department", departmentSchema);
export default Department;
