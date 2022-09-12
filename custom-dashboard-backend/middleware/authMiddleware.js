const authMiddleware = (req, res, next) => {
    const headers = req.headers;
    const secretHeader = headers['x-secret'];
    if (secretHeader !== process.env.WEBHOOK_SECRET) {
        return res.sendStatus(401);
    }
    next();
};

module.exports = authMiddleware