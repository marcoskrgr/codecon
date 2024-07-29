const jwt = require('jsonwebtoken');

const CookieMiddleware = (req, res, next) => {
    const { token } = req.cookies;

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        res.clearCookie("token");
        throw new Error("Session expired.");
    }
}

module.exports = CookieMiddleware;