const express = require("express");
const mongoose = require("mongoose");
const app = express();

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

async function main(){
  await mongoose.connect("mongodb+srv://abhi:kings11punjab@cluster0.uhrq4q3.mongodb.net/coursera-app")
  app.listen(3000);
  console.log("Listing on 3000")
}

main()