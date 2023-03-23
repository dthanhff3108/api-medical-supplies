import express from "express";
import cors from "cors";
import { connect } from "./config/mongodb";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { apiV1 } from "./routes";
import serverless from "serverless-http";
const baseUrl = "localhost";
const port = 8888;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json("hello");
});

connect();

app.listen(port, baseUrl, () => {
  console.log("Server is running in Port 8001");
});
app.use("/v1", apiV1);
// module.exports.handler = serverless(app);
// module.exports.handler = async (event, context) => {
//   const result = await serverlessExpress({
//     app,
//     event,
//     context,
//   });
//   return result;
// };
