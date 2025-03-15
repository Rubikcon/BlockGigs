# Job Marketplace API

This API allows users to register, login, create jobs, and retrieve available jobs.

## Base URL

```
http://localhost:4000/api
```

## Authentication

Most endpoints require authentication. You must include an `Authorization` header in your requests:

```
Authorization: Bearer <token>
```

---

## **Endpoints**

### **1. Register User**

- **URL:** `/auth/register`
- **Method:** `POST`
- **Payload:**

```json
{
  "role": "client",
  "wallet_address": "0x1234567890abcdef",
  "email": "client@example.com",
  "password": "securepassword",
  "fullname": "John Doe",
  "about": "I am a client looking for talented developers."
}
```

- **Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "<user_id>",
    "email": "client@example.com"
  }
}
```

---

### **2. Login User**

- **URL:** `/auth/login`
- **Method:** `POST`
- **Payload:**

```json
{
  "role": "client",
  "email": "client@example.com",
  "password": "securepassword"
}
```

- **Response:**

```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "<user_id>",
    "email": "client@example.com",
    "isVerified": true
  }
}
```

---

### **3. Create Job**

- **URL:** `/job/create`
- **Method:** `POST`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Payload:**

```json
{
  "title": "Build a Crypto Wallet",
  "description": "Looking for a blockchain developer to build a secure and scalable crypto wallet.",
  "totalPrice": 5000,
  "milestones": [
    {
      "title": "UI/UX Design",
      "amount": 1000,
      "description": "Design the front-end and user experience for the wallet."
    },
    {
      "title": "Smart Contract Development",
      "amount": 2000,
      "description": "Develop and deploy smart contracts for wallet transactions."
    },
    {
      "title": "Testing & Deployment",
      "amount": 2000,
      "description": "Perform security audits and deploy the wallet."
    }
  ]
}
```

- **Response:**

```json
{
  "message": "Job created successfully",
  "job": {
    "id": "<job_id>",
    "title": "Build a Crypto Wallet",
    "description": "Looking for a blockchain developer to build a secure and scalable crypto wallet.",
    "totalPrice": 5000,
    "client": "<client_id>"
  }
}
```

---

### **4. List All Available Jobs**

- **URL:** `/job/available`
- **Method:** `GET`

- **Response:**

```json
[
  {
    "id": "<job_id>",
    "title": "Build a Crypto Wallet",
    "description": "Looking for a blockchain developer to build a secure and scalable crypto wallet.",
    "totalPrice": 5000,
    "client": {
      "fullname": "John Doe",
      "email": "client@example.com"
    }
  }
]
```

---

## **Setup & Running Locally**

### **1. Install Dependencies**

```sh
npm install
```

### **2. Setup Environment Variables**

Create a `.env` file and add your MongoDB URI and other configurations:

```sh
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

### **3. Start the Server**

```sh
npm run dev
```

---

## **Future Enhancements**

- Add job completion endpoint
- Add user profile management
- Add talent-job assignment

---

## **Contributors**

- **Moses Sunday**
