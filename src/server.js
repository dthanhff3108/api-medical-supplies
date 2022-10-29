import express from "express";
import cors from "cors";
import { connect } from "./config/mongodb";
import morgan from "morgan";
import Supplies from "./models/suplies.model";
const baseUrl = "localhost";
const port = 8001;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json("hello");
});
connect();
const testDb = async () => {
  try {
    const supply = await Supplies.find({});
    console.log(supply);
  } catch (e) {
    console.log(e);
  }
};
testDb();
app.listen(port, baseUrl, () => {
  console.log("Server is running in Port 8001");
});
