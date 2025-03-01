import { Router } from 'express';

import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';

const router = Router();

// Only admin can access this route
router.get('/admin', authenticate, authorizeRoles('admin'), (req, res) => {
    res.json({ message: 'Welcome admin' });
});

// Both admin and manager can access this route
router.get('/manager', authenticate, authorizeRoles('admin', 'manager'), (req, res) => {
    res.json({ message: 'Welcome Manager' });
});

// All can access this route
router.get('/user', authenticate, authorizeRoles('admin', 'manager', 'user'), (req, res) => {
    res.json({ message: 'Welcome user' });
});

export default router;
