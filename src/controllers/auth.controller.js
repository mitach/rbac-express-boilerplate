import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json({ message: `User registered with username ${user.username}` });
    } catch (error) {
        console.log('error in authController/register:', error);
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { token, user } = await authService.login(req.body);

        res.cookie('token', token, {
            httpOnly: true, // Prevents client-side JS from accessing the cookie
            secure: process.env.NODE_ENV === 'production', // Only send the cookie over HTTPS in production
            sameSite: 'strict', // Prevents CSRF attacks
            maxAge: 60 * 60 * 1000, // Token expires in 1 hour
        });

        res.status(200).json({ message: `Login successful for ${user.username}` });
    } catch (error) {
        console.log('error in authController/login:', error);
        res.status(500).json({ message: error.message });
    }
}
