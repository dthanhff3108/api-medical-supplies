import express from "express";
import cors from "cors";
import { connect } from "./config/mongodb";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { apiV1 } from "./routes";

const baseUrl = "localhost";
const port = 8001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/v1", apiV1);
connect();

app.listen(port, baseUrl, () => {
  console.log("Server is running in Port 8001");
});
