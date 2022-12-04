import mongoose, { Mongoose } from "mongoose";

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
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: "Auth",
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
const Department = mongoose.model("Department", departmentSchema);
export default Department;
