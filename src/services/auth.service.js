import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/User.model.js";

export const register = async ({ email, username, password, role }) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) throw new Error("Email already in use");

    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, username, password: hashedPassword, role });

    return newUser;
}

export const login = async ({ email, password }) => {
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');;

    if (!user) throw new Error("Invalid credentials");

    const passIsMatch = await bcrypt.compare(password, user.password);

    if (!passIsMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Update lastLogin on successful login
    user.lastLogin = Date.now();
    await user.save();

    return { token, user };
}