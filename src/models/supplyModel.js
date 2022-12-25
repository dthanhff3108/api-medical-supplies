import mongoose from "mongoose";

const supplySchema = new mongoose.Schema(
  {
    name_supply: {
      type: String,
      maxlength: 40,
      required: true,
      unique: true,
    },
    type_supply: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    supplier: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Supplier",
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
const Supply = mongoose.model("Supply", supplySchema);
export default Supply;
