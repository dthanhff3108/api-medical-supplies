import mongoose from "mongoose";
const suppliesSchema = new mongoose.Schema({
  name: String,
});
const Supplies = mongoose.model("Supplies", suppliesSchema);

export default Supplies;
