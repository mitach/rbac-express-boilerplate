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
        res.status(200).json({ token, message: `Login successful for ${user.username}` });
    } catch (error) {
        console.log('error in authController/login:', error);
        res.status(500).json({ message: error.message });
    }
}
