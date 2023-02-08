import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    consignment: {
      type: String,
      required: true,
    },
    name: {
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
      type: String,
      required: true,
    },
    expireTime: {
      type: String,
      default: null,
    },
    origin: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
const Store = mongoose.model("Store", storeSchema);
export default Store;
