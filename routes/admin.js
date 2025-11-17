const { Router } = require("express")
const adminRouter = Router()

adminRouter.use(adminMiddleware)
 
    userRouter.post('/signup', (req, res) => {
        res.json({
            message: "signup endpoint"
        })
    })

    userRouter.post('/login', (req, res) => {
        res.json({
            message: "signin endpoint"
        })
    })

    userRouter.post('/join', (req, res) => {
        res.json({
            message: "join endpoint"
        })
    })

    userRouter.put('/delete', (req, res) => {
        res.json({
            message: "join endpoint"
        })
    })

module.exports = {
    adminRouter:adminRouter
}