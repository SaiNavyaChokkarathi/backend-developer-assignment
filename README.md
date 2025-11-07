# # Backend Developer (Intern) – Assignment

## Features
- JWT Authentication (Login/Register)
- Role-based Access Control (User/Admin)
- CRUD APIs for Tasks
- MongoDB + Express.js
- Validation, Error Handling, Modular Structure

## Setup
1. Clone this repo  
   git clone https://github.com/SaiNavyaChokkarathi/backend-developer-assignment.git
3. Install dependencies  
   npm install
4. Create .env file (see .env.example)
5. Start server  
   npm run dev

## API Endpoints
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | /api/v1/auth/register | Register new user |
| POST | /api/v1/auth/login | Login and get JWT |
| GET | /api/v1/tasks | Fetch tasks |
| POST | /api/v1/tasks | Create task |
| PUT | /api/v1/tasks/:id | Update task (admin only) |
| DELETE | /api/v1/tasks/:id | Delete task (admin only) |

## Scalability Notes
- Modular structure for new modules  
- Ready for Docker and microservices  
- Can integrate Redis caching and Nginx load balancing

backend/
│
├── server.js
├── package.json
├── .env.example
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
└── README.md
