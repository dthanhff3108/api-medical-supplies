import mongoose from "mongoose";
const issueSchema = new mongoose.Schema({
  to: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const Issue = mongoose.model("Issue", issueSchema);
export default Issue;
