# RBAC Express Boilerplate

A robust Role-Based Access Control (RBAC) boilerplate built with Express.js, providing a secure and scalable foundation for your Node.js applications.

## 📁 Project Structure

```
src/
├── configs/        # Configuration files and environment variables
├── controllers/    # Request handlers
├── middlewares/    # Custom middleware functions
├── models/        # Database models and schemas
├── routes/        # API route definitions
├── services/      # Business logic and external service integrations
└── server.js      # Main application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (if using MongoDB as database)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mitach/rbac-express-boilerplate.git
cd rbac-express-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and configure your environment variables:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

## 🔐 RBAC Features

- User authentication and authorization
- Role-based access control
- Permission management
- Secure middleware implementation
- JWT token authentication

## 🛠️ Tech Stack

- Express.js - Web framework
- JSON Web Tokens (JWT) - Authentication
- Middleware for role verification
- Error handling middleware
- Request validation

## 📝 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - (NOT DONE!) Refresh access token

### User Management

- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Role Management

- `GET /api/roles` - Get all roles
- `POST /api/roles` - Create new role
- `PUT /api/roles/:id` - Update role
- `DELETE /api/roles/:id` - Delete role

## 🔒 Security Features

- Password hashing
- JWT token authentication
- Role-based middleware
- Request rate limiting
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers. 