const verify = (req, res, next) =>
{
    const token = req.headers.authorization;

    if (!token)
    {
        return res.status(401).json({ error: "Unauthorized - Token missing" });
    }

    jwt.verify(token, "secret", (err, decoded) =>
    {
        if (err)
        {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }

        req.user = decoded;
        next();
    });
};

module.exports = verify;
