import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const storeDepartmentSchema = new mongoose.Schema(
  {
    idDepartment: {
      type: Number,
      ref: "Department",
      required: true,
    },
    storeData: [
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
storeDepartmentSchema.plugin(autoIncrement.plugin, {
  model: "StoreDepartment",
  startAt: 1,
});
const StoreDepartment = mongoose.model(
  "StoreDepartment",
  storeDepartmentSchema
);
export default StoreDepartment;
