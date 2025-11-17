const express = require('express')
const app = express()
const port = 3000
const { userRouter } = require("./routes/user")
const { productRouter } = require("./routes/product")
const { adminRouter } = require("./routes/admin")

// createUserRoutes(app)
// createProductRoutes(app)

app.use("/user" , userRouter)
app.use("/product" , productRouter)
app.use("/admin" , adminRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
