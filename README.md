# BlockGig

BlockGig is a platform that provides job opportunities for web professionals. It consists of a frontend and a backend, both of which are built using Node.js, Next js and can be started using the `npm run dev` command.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone git@github.com:Rubikcon-Nexus/BlockGig.git
cd BlockGig
```

## 2. Install Dependencies

Navigate to both the frontend and backend directories and install the required dependencies.

#### Backend

```bash
cd Blockgig-Backend
npm install

```

#### Backend

```bash
cd ../Blockgigs
npm install
```

## 3. Configure Environment Variables

Both the frontend and backend may require environment variables to be set. Check for a .env.example file in each directory and create a .env file based on it.

#### Backend

```bash

cd Blockgig-Backend
cp .env.example .env

```

Edit the .env file and replace the `MONGODB_UR ` with your database connection string.

## 4. Start the Applications

You can start both the frontend and backend applications using the npm run dev command.

#### Backend

```bash

cd Blockgigs-Backend
npm run dev
```

#### Frontend

```bash

cd ../Blockgigs
npm run dev
```

## 5. Access the Application

Once both the frontend and backend are running, you can access the application by navigating to the appropriate URLs in your web browser.

- Frontend: Usually accessible at` http://localhost:5173` (or another port if configured differently).

- Backend: Usually accessible at `http://localhost:8000` (or another port if configured differently).

# Development

- Running Tests
  To run tests for both the frontend and backend, navigate to each directory and run:

```bash

npm test
```

- Building for Production
  To build the frontend for production, navigate to the Blockgigs directory and run:

```bash

npm run build
```

# Contributions

If you'd like to contribute to BlockGig, please follow these steps:

1. Fork the repository.

Create a new branch (`git checkout -b feature/YourFeatureName`).

2. Commit your changes (git commit -m 'Add some feature').

Push to the branch (`git push origin feature/YourFeatureName`).

3. Open a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for using BlockGig! We hope it helps you find great job opportunities in the web industry.

```

```
