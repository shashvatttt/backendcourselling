const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const adminMiddleware = require("../middlewares/adminMiddleware"); // FIX

// apply middleware
adminRouter.use(adminMiddleware);

// admin signup
adminRouter.post('/signup', (req, res) => {
    res.json({
        message: "admin signup endpoint"
    });
});

// admin login
adminRouter.post('/login', (req, res) => {
    res.json({
        message: "admin login endpoint"
    });
});

// create / join course (example)
adminRouter.post('/join', (req, res) => {
    res.json({
        message: "admin join endpoint"
    });
});

// delete something
adminRouter.put('/delete', (req, res) => {
    res.json({
        message: "admin delete endpoint"
    });
});

module.exports = adminRouter;
