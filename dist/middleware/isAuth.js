"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jwt = require("jsonwebtoken");
const isAuth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(401);
        req.user = user;
        next();
    });
};
exports.isAuth = isAuth;
exports.default = exports.isAuth;
//# sourceMappingURL=isAuth.js.map