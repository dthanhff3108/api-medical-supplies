import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const unitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
unitSchema.plugin(autoIncrement.plugin, {
  model: "Unit",
  startAt: 1,
});
const Unit = mongoose.model("Unit", unitSchema);
export default Unit;
