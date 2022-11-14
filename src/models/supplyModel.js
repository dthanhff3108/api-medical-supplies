import mongoose from "mongoose";

const supplySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 40,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      maxlength: 40,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: null,
    },
    unit_price: {
      type: Number,
      required: true,
    },
    model: {
      type: String,
      default: null,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    manufacturer: {
      type: String,
      ref: "Supplier",
      default: null,
    },
    inspection_date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Supply = mongoose.model("Supply", supplySchema);
export default Supply;
