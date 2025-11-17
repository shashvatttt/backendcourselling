const { Router } = require("express")
const userRouter = Router()

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


module.exports = {
    userRouter:userRouter
}