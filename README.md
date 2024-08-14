# Full Stack Expense Tracker

## Project Overview

The **Expense Tracker** is a full-stack web application designed to help users manage their expenses efficiently. It features user authentication, expense management (adding, viewing, editing, and deleting expenses), and data visualization via a pie chart to show category-wise expense distribution.

## Features

1. **User Authentication**
   - **Sign Up**: Create an account.
   - **Login**: Login using credentials.
   
2. **Expense Management**
   - **Add Expense**: Add a new expense entry.
   - **View Expenses**: Display all expenses in a tabular format, sorted by the latest entry.
   - **Edit Expense**: Modify existing expense records.
   - **Delete Expense**: Remove an expense from the list.

3. **Data Visualization (Optional)**
   - **Category-wise Expense Distribution**: Visual representation of expenses through a pie chart.

## Tech Stack

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose** for database
- **JWT (JSON Web Token)** for authentication
- **bcryptjs** for password hashing

### Frontend
- **React.js**
- **Axios** for API requests
- **React Router** for navigation
- **Chart.js** and **React Chart.js 2** for data visualization

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** running locally or on a cloud service like MongoDB Atlas.

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory and add the following environment variables:
   ```
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend should now be running on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend should now be running on `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Register a new user.
- **POST** `/api/auth/login` - Login with existing credentials.

### Expense Management

- **POST** `/api/expenses` - Add a new expense.
- **GET** `/api/expenses` - Retrieve all expenses.
- **PUT** `/api/expenses/:id` - Update an existing expense.
- **DELETE** `/api/expenses/:id` - Delete an expense.

## Directory Structure

```
.
├── backend
│   ├── config
│   │   └── db.js
│   ├── models
│   │   ├── User.js
│   │   └── Expense.js
│   ├── routes
│   │   ├── auth.js
│   │   └── expenses.js
│   ├── middleware
│   │   └── auth.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Auth
    │   │   │   ├── Login.js
    │   │   │   └── SignUp.js
    │   │   ├── ExpenseManager
    │   │   │   ├── AddExpense.js
    │   │   │   ├── EditExpense.js
    │   │   │   └── ViewExpenses.js
    │   │   └── Visualization
    │   │       └── ExpensePieChart.js
    │   ├── App.js
    │   ├── index.js
    │   └── package.json
```

## Usage

1. **Sign Up**: Navigate to `/signup` and create an account.
2. **Login**: Use the credentials to log in at `/login`.
3. **Add Expense**: Go to `/add-expense` to input your expenses.
4. **View Expenses**: Visit `/view-expenses` to see all your expenses.
5. **Edit/Delete Expenses**: Use the options available in the expenses table.
6. **Visualize Expenses**: Go to `/visualization` to see a pie chart of your expenses categorized.

## Deploying the Application

- **Backend**: You can deploy the backend on platforms like **Heroku**, **AWS**, or **DigitalOcean**.
- **Frontend**: Deploy the frontend using services like **Vercel**, **Netlify**, or **GitHub Pages**.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you find a bug or want to suggest an enhancement.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries, reach out to me at [atharvapawar2120@gmail.com].

---

This `README.md` provides all necessary details for understanding, setting up, and running the full-stack expense tracker application. Feel free to modify it to better fit your project’s specifics.
