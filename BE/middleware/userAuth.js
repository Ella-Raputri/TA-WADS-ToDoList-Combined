
const userAuth = (req, res, next) => {
    if (req.session && req.session.userId) {
        req.userId = req.session.userId;
        next();
    } 
    else {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
};

export default userAuth;