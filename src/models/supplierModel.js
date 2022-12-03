import mongoose from "mongoose";
const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 40,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
const Supplier = mongoose.model("Supplier", supplierSchema);
export default Supplier;
