## DigiParivaar Backend Assignment

### Tech Stack

- Node.js
- Express
- MongoDB
- JWT Authentication

### Setup

```bash
npm install
npm run dev

Environment Variables

- PORT
- MONGO_URI
- JWT_SECRET
- ADMIN_TOKEN

Auth APIs

POST /auth/request-otp
POST /auth/verify-otp

Lesson APIs

GET /lessons
GET /lessons/:id

Progress APIs (Protected)

POST /progress
GET /progress/:lessonId

Admin API

POST /admin/lessons

Assumptions

- OTP is mocked
- JWT used for auth
- Simple admin token used
```
