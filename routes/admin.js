const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const adminMiddleware = require("../middlewares/adminMiddleware"); 

adminRouter.use(adminMiddleware);


adminRouter.post('/signup', (req, res) => {
    const {email, password, firstName, lastName} = req.body;

    

    res.json({
        message: "admin signup endpoint"
    });
});

adminRouter.post('/login', (req, res) => {
    res.json({
        message: "admin login endpoint"
    });
});


adminRouter.post('/course', (req, res) => {
    res.json({
        message: "admin join endpoint"
    });
});


adminRouter.put('/course', (req, res) => {
    res.json({
        message: "admin delete endpoint"
    });
});

module.exports = adminRouter;
