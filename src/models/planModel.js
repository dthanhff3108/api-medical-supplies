import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    plan: [
      {
        name: {
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
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
const Plan = mongoose.model("Plan", planSchema);
export default Plan;
