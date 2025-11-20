const express = require("express");
const app = express();

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(3000, () => {
  console.log("Server running");
});
