import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const planSchema = new mongoose.Schema(
  {
    department: {
      type: Number,
      ref: "Department",
      required: true,
    },
    note: {
      type: String,
    },
    ownerName: {
      type: String,
      required: true,
    },
    planType: {
      type: Number,
      required: true,
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
        serial: {
          type: String,
          default: null,
        },
        origin: {
          type: String,
          default: null,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
      },
      versionKey: false,
    },
  }
);
planSchema.plugin(autoIncrement.plugin, {
  model: "Plan",
  startAt: 1,
});
const Plan = mongoose.model("Plan", planSchema);
export default Plan;
