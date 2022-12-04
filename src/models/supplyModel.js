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
    supplier: {
      type: [Schema.Types.ObjectId],
      ref: "Supplier",
      required: true,
    },
  },
  { timestamps: true }
);
const Supply = mongoose.model("Supply", supplySchema);
export default Supply;
