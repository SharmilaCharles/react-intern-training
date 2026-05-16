# 👨‍💼 Employee Admin Dashboard (Day 5 Mini-Project)

A production-ready Employee Management Dashboard built with **React**, **Vite**, and **Tailwind CSS**. This project was developed as part of the React Intern Training program.

## 🚀 Key Features

- **🔐 Secure Authentication**: Simulated JWT-based login flow with protected routes.
- **📊 Admin Dashboard**: Visual overview of employee statistics and recent activities.
- **👨‍💼 Employee Management**:
  - Searchable and filterable employee list.
  - Detailed employee profiles with dynamic routing.
  - Mock API integration for data persistence.
- **📱 Responsive UI**: Mobile-first design with a collapsible sidebar and premium aesthetics.
- **🛠 Reusable Components**: Custom-built library of Buttons, Inputs, Cards, Tables, and Loaders.

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **API Handling**: Axios
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Mock Server**: JSON Server

## 📂 Project Structure

```bash
src/
 ├── components/    # Reusable UI components
 ├── pages/         # Page-level components (Dashboard, Employees, etc.)
 ├── layouts/       # Main dashboard layout
 ├── services/      # API and service logic
 ├── context/       # Global state (AuthContext)
 ├── routes/        # Route protection and configuration
 ├── styles/        # Global CSS and Tailwind base
 └── utils/         # Helper functions
```

## ⚙️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Application**:
   Starts both the Vite dev server and the JSON Server mock API.
   ```bash
   npm run dev:all
   ```

3. **Login Credentials**:
   - The system currently accepts **any email and password** for testing purposes.

## 📝 License

This project was built for educational purposes during the React Intern Training.
