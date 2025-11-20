function adminMiddleware(req, res, next) {
    console.log("Admin middleware working");
    next();
}

module.exports = adminMiddleware;
