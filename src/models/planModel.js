import mongoose from "mongoose";

const historyImportSchema = new mongoose.Schema(
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
    source: {
      type: Boolean,
      default: true,
    },
    inspection_date: {
      type: String,
      required: true,
    },
    exp_date: {
      type: String,
      default: null,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
const HistoryImport = mongoose.model("HistoryImport", historyImportSchema);
export default HistoryImport;
