import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const supplySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 40,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    dangerLevel: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      default: null,
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
supplySchema.plugin(autoIncrement.plugin, {
  model: "Supply",
  startAt: 1,
});

const Supply = mongoose.model("Supply", supplySchema);
export default Supply;
