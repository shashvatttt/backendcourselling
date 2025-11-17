const { Router } = require("express")
const productRouter = Router()

    productRouter.post('/sell', (req, res) => {
        res.json({
        message: "sell endpoint"
         })
    })

    productRouter.get('/purchase', (req, res) => {
        res.json({
        message: "signup endpoint"
        })
    })


module.exports = {
    productRouter:productRouter
}