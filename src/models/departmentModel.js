import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      unique: true,
    },
    location: {
      type: String,
      default: null,
    },
    ownerInfo: {
      type: Number,
      default: null,
      ref: "Auth",
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    staffs: {
      type: [Number],
      ref: "Auth",
    },
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
departmentSchema.plugin(autoIncrement.plugin, {
  model: "Department",
  startAt: 1,
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
