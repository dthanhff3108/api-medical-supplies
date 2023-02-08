import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    note: {
      type: String,
    },
    ownerName: {
      type: String,
    },
    type: {
      type: Number,
      require: true,
    },
    planData: [
      {
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
          default: null,
        },
        type: {
          type: String,
          default: null,
        },
        model: {
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
