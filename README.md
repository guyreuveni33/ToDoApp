# Todo-List App

A comprehensive Todo-List application with a React frontend and a C# backend, utilizing SQL with SQL Workbench for structured data storage. Users can add, edit, delete, and prioritize tasks seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Features

- Add, edit, delete, and prioritize tasks
- Responsive design for desktop and mobile
- Persistent data storage with SQL

## Technologies Used

- **Frontend**: React, CSS, HTML
- **Backend**: C#, .NET, SQL (SQL Workbench)
- **REST API**

## Getting Started

### Prerequisites

- Node.js
- .NET SDK
- SQL Workbench

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/guyreuveni33/ToDoApp.git
    cd ToDoApp
    ```

2. **Install client dependencies:**
    ```sh
    cd client-side
    npm install
    ```

3. **Install server dependencies:**
    ```sh
    cd ../server-side
    dotnet restore
    ```

4. **Set up SQL Database:**
    - Use SQL Workbench to create and configure your database.
    - Update the database connection string in the backend configuration file to match your SQL Workbench setup.

### Running the Application

1. **Start the backend server:**
    ```sh
    cd server-side
    dotnet run
    ```

2. **Start the frontend:**
    ```sh
    cd ../client-side
    npm start
    ```

3. **Open your browser and navigate to** `http://localhost:3000`

### UI

Below is a screenshot of the Todo-List client interface, showcasing its clean and user-friendly design:

![צילום מסך 2024-10-25 112642](https://github.com/user-attachments/assets/1bfb53fc-8d07-47f6-be3e-0f8dcbe39c17)
