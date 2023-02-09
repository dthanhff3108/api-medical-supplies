import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
export const connect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dthanhff:tuhacloz123@cluster0.hlcrrci.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("connect success"))
    .catch((e) => console.log(e))
    .finally(() => {});
};

autoIncrement.initialize(mongoose.connection);
