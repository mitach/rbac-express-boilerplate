import rateLimit from 'express-rate-limit';

// General rate limiter for all routes
export const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minuted
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later',
    headers: true,
});

// Rate limiter for login attempts
export const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 5,
    message: 'Too many login attempts, please try again later',
});
