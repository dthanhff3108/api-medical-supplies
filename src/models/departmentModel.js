import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 6,
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Department = mongoose.model("Department", departmentSchema);
export default Department;