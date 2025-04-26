Alright!  
Let's **break this down carefully** so you have a **mini version** of your `API_DOCUMENTATION.md` **including your Job APIs** while keeping it organized like your first documentation.  
I’ll **first show you** the new structure (the mini plan), **then explain** how you can continue updating it as your backend grows.

---

# ✨ Updated Mini Version of Your API Documentation

## Base URL

`https://blockgigs-bt8d.onrender.com`

---

## Table of Contents

1. [Authentication Flow](#authentication-flow)
2. [User Management](#user-management)
3. [Account Deletion](#account-deletion)
4. [Job Management](#job-management)
   - [Create Job](#create-job)
   - [List Jobs (All)](#list-jobs-all)
   - [List Jobs (With Filter & Search)](#list-jobs-with-filter--search)
   - [Get Single Job](#get-single-job)
   - [Apply to Job](#apply-to-job)
   - [Assign Freelancer](#assign-freelancer)

---

# Authentication Flow

(✅ Same as your original documentation.)

# User Management

(✅ Same as your original documentation.)

# Account Deletion

(✅ Same as your original documentation.)

---

# 🚀 Job Management

## Create Job

**Endpoint**: `POST /api/jobs/create`  
**Request**:

```json
{
  "title": "Create a Logo for a New Startup",
  "description": "We need a logo designed for a tech startup. Should be minimalist and modern.",
  "budget": 300,
  "category": "Design",
  "skills": ["Logo Design", "Brand Identity", "Illustrator"],
  "deadline": "2024-05-31T23:59:59.000Z"
}
```

**Response** (`201 Created`):

```json
{
  "message": "Job created successfully",
  "job": {
    "id": "job123",
    "title": "Create a Logo for a New Startup",
    "budget": 300,
    "category": "Design",
    "status": "open"
  }
}
```

---

## List Jobs (All)

**Endpoint**: `GET /api/jobs`  
**Response** (`200 OK`):

```json
[
  {
    "id": "job123",
    "title": "Create a Logo for a New Startup",
    "budget": 300,
    "category": "Design",
    "status": "open"
  },
  {
    "id": "job124",
    "title": "Write SEO Content for a Blog",
    "budget": 150,
    "category": "Writing",
    "status": "open"
  }
]
```

---

## List Jobs (With Filter & Search)

**Endpoint**: `GET /api/jobs?search=logo&category=Design&budgetMin=100&budgetMax=500`

**Query Parameters**:

- `search` (optional): text search across job title and description
- `category` (optional): filter by category (e.g., Design, Writing)
- `budgetMin` / `budgetMax` (optional): filter jobs within a budget range

**Response** (`200 OK`):

```json
[
  {
    "id": "job123",
    "title": "Create a Logo for a New Startup",
    "budget": 300,
    "category": "Design",
    "status": "open"
  }
]
```

---

## Get Single Job

**Endpoint**: `GET /api/jobs/job123`  
**Response** (`200 OK`):

```json
{
  "id": "job123",
  "title": "Create a Logo for a New Startup",
  "description": "We need a logo designed for a tech startup. Should be minimalist and modern.",
  "budget": 300,
  "category": "Design",
  "skills": ["Logo Design", "Brand Identity", "Illustrator"],
  "status": "open",
  "createdAt": "2024-04-25T10:00:00.000Z"
}
```

---

## Apply to Job (Talent)

**Endpoint**: `POST /api/jobs/apply/job123`  
**Request**:

```json
{
  "proposal": "Hi, I'm an experienced logo designer. I can deliver a minimalist design within 3 days."
}
```

**Response** (`200 OK`):

```json
{
  "message": "Application submitted successfully"
}
```

---

## Assign Freelancer (Client Action)

**Endpoint**: `POST /api/jobs/assign/job123`  
**Request**:

```json
{
  "freelancerId": "freelancer567"
}
```

**Response** (`200 OK`):

```json
{
  "message": "Freelancer assigned successfully",
  "job": {
    "id": "job123",
    "status": "in progress",
    "assignedFreelancer": "freelancer567"
  }
}
```

---

# 📋 Error Handling (Extend)

| Code | Scenario                        | Sample Response                                 |
| ---- | ------------------------------- | ----------------------------------------------- |
| 400  | Missing fields in Job creation  | `{"message": "Title and description required"}` |
| 404  | Job not found                   | `{"message": "Job not found"}`                  |
| 403  | Unauthorized application/assign | `{"message": "You are not authorized"}`         |
| 500  | Server error                    | `{"message": "Internal server error"}`          |

---

# 🔒 Security Notes (Updated)

- Only verified users can apply for or create jobs
- Jobs cannot be edited after assignment unless by admin
- Proposal texts are stored safely
- Authentication required for applying or assigning

---

# ✅ Quick Complete Example

- Client creates job → `POST /api/jobs/create`
- Freelancers list jobs → `GET /api/jobs`
- Freelancer filters jobs → `GET /api/jobs?search=...`
- Freelancer views details → `GET /api/jobs/{id}`
- Freelancer applies → `POST /api/jobs/apply/{id}`
- Client assigns → `POST /api/jobs/assign/{id}`

---
