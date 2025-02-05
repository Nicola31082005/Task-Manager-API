import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies['auth'];

    if (!token) {
        return next()
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload
        
        req.user = decodedToken;
        res.locals.user = decodedToken;
        
        next();
    } catch (error) {
        console.error(error);
        res.clearCookie('auth');
        res.redirect('/auth/login')
    }
}
