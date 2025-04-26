Of course!  
I'll extend your `User Lifecycle API Documentation` to **also include the full Job API** properly structured under a new section.

I'll **keep your style** (endpoint, request/response samples, explanations) and make it very neat and professional — just like your original markdown.

Here’s the **edited and expanded version**:

---

# Complete User and Job Lifecycle API Documentation

## Base URL

`https://blockgigs-bt8d.onrender.com`

## Table of Contents

1. [Authentication Flow](#authentication-flow)
   - [Register with Email](#1-register-with-email)
   - [Verify Email (OTP)](#2-verify-email-otp)
   - [Login](#3-login)
2. [User Management](#user-management)
   - [Get Profile](#4-get-profile)
   - [Update Profile](#5-update-profile)
3. [Account Deletion](#account-deletion)
   - [Request Deletion](#6-request-deletion)
   - [Cancel Deletion](#7-cancel-deletion-optional)
   - [Automatic Deletion](#8-automatic-deletion-after-2-hours)
4. [Job Management](#job-management)
   - [Create Job](#9-create-job)
   - [List Jobs](#10-list-jobs-with-filter-search-sort)
   - [Get Single Job](#11-get-single-job)
   - [Talent Apply to Job](#12-talent-apply-to-job)
   - [Client Assign Freelancer](#13-client-assign-freelancer)

---

## Authentication Flow

### 1. Register with Email

**Endpoint**: `POST /api/auth/register-email`  
**Request**:

```json
{
  "role": "talent",
  "email": "jane.doe@example.com",
  "password": "SecurePass123!",
  "fullname": "Jane Doe",
  "pseudonym": "JadeArt",
  "profession": "Illustrator"
}
```

**Response** (`201 Created`):

```json
{
  "message": "User registered successfully. Please verify your email.",
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k",
    "email": "jane.doe@example.com",
    "role": "talent",
    "isVerified": false
  }
}
```

---

### 2. Verify Email (OTP)

**Endpoint**: `POST /api/auth/verify-otp`  
**Request**:

```json
{
  "email": "jane.doe@example.com",
  "otp": "428657"
}
```

**Response** (`200 OK`):

```json
{
  "message": "OTP verified successfully. Your account is now active."
}
```

---

### 3. Login

**Endpoint**: `POST /api/auth/login`  
**Request**:

```json
{
  "email": "jane.doe@example.com",
  "password": "SecurePass123!"
}
```

**Response** (`200 OK`):

```json
{
  "message": "Login successful",
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k",
    "email": "jane.doe@example.com",
    "role": "talent",
    "isVerified": true
  }
}
```

---

## User Management

### 4. Get Profile

**Endpoint**: `GET /api/users/talent/:id`  
**Response** (`200 OK`):

```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k",
  "email": "jane.doe@example.com",
  "fullname": "Jane Doe",
  "pseudonym": "JadeArt",
  "profession": "Illustrator",
  "isVerified": true,
  "createdAt": "2023-12-15T10:30:00.000Z"
}
```

---

### 5. Update Profile

**Endpoint**: `PUT /api/users/talent/:id`  
**Request**:

```json
{
  "profession": "Senior Illustrator",
  "min_pay": 85
}
```

**Response** (`200 OK`):

```json
{
  "message": "Profile updated successfully",
  "user": {
    "profession": "Senior Illustrator",
    "min_pay": 85
  }
}
```

---

## Account Deletion

### 6. Request Deletion

**Endpoint**: `POST /api/users/delete/talent/:id`  
**Request**:

```json
{
  "confirmation": "DELETE"
}
```

**Response** (`200 OK`):

```json
{
  "message": "Account will be deleted in 2 hours. You can cancel this before then.",
  "deletionTime": "2023-12-15T14:30:00.000Z"
}
```

---

### 7. Cancel Deletion (Optional)

**Endpoint**: `POST /api/users/cancel-delete/talent/:id`  
**Response** (`200 OK`):

```json
{
  "message": "Account deletion cancelled successfully"
}
```

---

### 8. Automatic Deletion (After 2 Hours)

**System Action**:

- Account automatically deleted at scheduled time
- No API response (system process)

---

# Job Management

## 9. Create Job

**Endpoint**: `POST /api/jobs`  
**Authorization**: Bearer Token (Client only)

**Request**:

```json
{
  "title": "Website Redesign",
  "details": "We need a full redesign of our company website.",
  "category": "Web Development",
  "locationType": "remote",
  "budgetType": "fixed",
  "budget": 1200,
  "skillsRequired": ["HTML", "CSS", "JavaScript"],
  "duration": "1 month"
}
```

**Response** (`201 Created`):

```json
{
  "message": "Job created successfully",
  "job": {
    "_id": "66123abc123abc456def7890",
    "title": "Website Redesign",
    "details": "We need a full redesign of our company website.",
    "client": "660abcdef12345abcdef1234",
    "status": "open",
    "available": true,
    "createdAt": "2024-04-26T10:00:00.000Z"
  }
}
```

---

## 10. List Jobs (with Filter, Search, Sort, Pagination)

**Endpoint**: `GET /api/jobs`

**Query Parameters**:

| Feature             | Example                                      |
| ------------------- | -------------------------------------------- |
| Pagination          | `?page=2&limit=5`                            |
| Filter by Status    | `?status=open`                               |
| Filter by Client    | `?client=6611aef012abc3456789abcd`           |
| Sort by Field       | `?sortBy=totalPrice&order=asc`               |
| Search Title/Detail | `?search=website`                            |
| Price Range Filter  | `?minPrice=100&maxPrice=500`                 |
| Available Jobs Only | `?available=true`                            |
| Combo Filters       | `?search=design&available=true&minPrice=100` |

**Example**:

`GET /api/jobs?search=redesign&minPrice=1000&available=true&page=1&limit=10`

**Response** (`200 OK`):

```json
{
  "jobs": [
    {
      "_id": "66123abc123abc456def7890",
      "title": "Website Redesign",
      "budget": 1200,
      "locationType": "remote",
      "available": true,
      "status": "open"
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "limit": 10,
    "pages": 1
  }
}
```

---

## 11. Get Single Job

**Endpoint**: `GET /api/jobs/:id`

**Response** (`200 OK`):

```json
{
  "_id": "66123abc123abc456def7890",
  "title": "Website Redesign",
  "details": "Full redesign needed",
  "skillsRequired": ["HTML", "CSS", "JavaScript"],
  "budget": 1200,
  "duration": "1 month",
  "locationType": "remote",
  "budgetType": "fixed",
  "client": {
    "_id": "660abcdef12345abcdef1234",
    "fullname": "Client Name",
    "email": "client@example.com"
  },
  "status": "open",
  "available": true,
  "createdAt": "2024-04-26T10:00:00.000Z"
}
```

---

## 12. Talent Apply to Job

**Endpoint**: `POST /api/jobs/apply/:jobId`  
**Authorization**: Bearer Token (Talent only)

**Request**:

```json
{
  "proposal": "I can redesign your website in 4 weeks with responsive design and SEO optimization.",
  "expectedBudget": 1100,
  "duration": "4 weeks"
}
```

**Response** (`200 OK`):

```json
{
  "message": "Applied to job successfully",
  "application": {
    "_id": "6615abc123def456abc123de",
    "talent": "660abcdef12345abcdef7890",
    "job": "66123abc123abc456def7890",
    "proposal": "I can redesign your website in 4 weeks...",
    "expectedBudget": 1100,
    "status": "pending"
  }
}
```

---

## 13. Client Assign Freelancer to Job

**Endpoint**: `POST /api/jobs/assign/:jobId`  
**Authorization**: Bearer Token (Client only)

**Request**:

```json
{
  "talentId": "660abcdef12345abcdef7890"
}
```

**Response** (`200 OK`):

```json
{
  "message": "Freelancer assigned successfully",
  "job": {
    "_id": "66123abc123abc456def7890",
    "assignedTalent": "660abcdef12345abcdef7890",
    "status": "in progress"
  }
}
```

---

# Error Handling

| Code | Scenario                 | Sample Response                        |
| ---- | ------------------------ | -------------------------------------- |
| 400  | Invalid input            | `{"message": "Invalid data"}`          |
| 404  | Job/User not found       | `{"message": "Resource not found"}`    |
| 409  | Already applied/assigned | `{"message": "Action conflict"}`       |
| 401  | Unauthorized Access      | `{"message": "Unauthorized"}`          |
| 500  | Server Error             | `{"message": "Internal server error"}` |

---

# Security Notes

- Passwords are hashed with bcrypt
- JWT Authentication for protected routes
- Client/Talent role restrictions enforced
- Sensitive fields are not exposed
- Email verification required before job interaction

---

# Complete Flow Example (User + Job)

1. **Register** → `POST /api/auth/register-email`
2. **Verify** → `POST /api/auth/verify-otp`
3. **Login** → `POST /api/auth/login`
4. **Create Job** (Client) → `POST /api/jobs`
5. **List Jobs** (Public) → `GET /api/jobs`
6. **Apply to Job** (Talent) → `POST /api/jobs/apply/:jobId`
7. **Assign Freelancer** (Client) → `POST /api/jobs/assign/:jobId`

---
