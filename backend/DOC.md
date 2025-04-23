Here's a complete **End-to-End API Flow Documentation** in Markdown format, covering the entire user lifecycle from signup to account deletion:

````markdown
# Complete User Lifecycle API Documentation

## Base URL

`https://your-api-domain.com/api`

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
````

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

**Endpoint**: `GET /api/users/talent/65a1b2c3d4e5f6g7h8i9j0k`  
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

**Endpoint**: `PUT /api/users/talent/65a1b2c3d4e5f6g7h8i9j0k`  
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

**Endpoint**: `POST /api/users/delete/talent/65a1b2c3d4e5f6g7h8i9j0k`  
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

**Endpoint**: `POST /api/users/cancel-delete/talent/65a1b2c3d4e5f6g7h8i9j0k`  
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

**Database Result**:

```javascript
// User document with _id "65a1b2c3d4e5f6g7h8i9j0k" removed
```

---

## Complete Flow Example

1. **Register** → `POST /api/auth/register-email`
   . -b. **Register** -> `POST /api/auth/register-wallet`
2. **Verify** → `POST /api/auth/verify-otp`
3. **Login** → `POST /api/auth/login`
4. **View Profile** → `GET /api/users/talent/{id}`
5. **Update Profile** → `PUT /api/users/talent/{id}`
6. **Request Deletion** → `POST /api/users/delete/talent/{id}`
   - (Optional) Cancel → `POST /api/users/cancel-delete/talent/{id}`
7. **Automatic Deletion** → Occurs after 10 hours

## Error Handling

| Code | Scenario                 | Sample Response                        |
| ---- | ------------------------ | -------------------------------------- |
| 400  | Invalid OTP              | `{"message": "Invalid OTP"}`           |
| 404  | User not found           | `{"message": "User not found"}`        |
| 409  | Email already registered | `{"message": "Email already in use"}`  |
| 500  | Server error             | `{"message": "Internal server error"}` |

## Security Notes

- Passwords are hashed with bcrypt
- Sensitive fields (password, OTP) never returned in responses
- Account deletion has 2-hour cancellation window
- Email verification required before login

```

This documentation provides:
1. A complete step-by-step flow from registration to deletion
2. Clear example requests/responses for each endpoint
3. Error handling documentation
4. Security considerations
5. Timelines for automatic processes
6. Optional path for cancellation

The markdown format is ready to be:
- Added to your repository as `API_DOCUMENTATION.md`
- Rendered in documentation tools like GitBook or ReadTheDocs
- Converted to HTML for web viewing
- Shared directly with your API consumers
```
