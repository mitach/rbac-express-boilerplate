import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1] || req.headers.Authorization?.split(" ")[1];
    
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedUser;

        console.log('Decoded user is', decodedUser);

        next();
    } catch (error) {
        console.log(error)
        res.status(403).json({ message: "Invalid token" });
    }
}
