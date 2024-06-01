# Todo-List App

A comprehensive Todo-List application with a React frontend and a C# server backend using MongoDB for data storage. Users can add, edit, delete, and prioritize tasks seamlessly.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
root/
├── client/
│ ├── README.md
│ ├── src/
│ ├── public/
│ └── package.json
├── server/
│ ├── README.md
│ ├── src/
│ ├── appsettings.json
│ └── ToDoApp.csproj
├── .gitignore
└── README.md

## Features

- Add, edit, delete, and prioritize tasks
- Responsive design
- Persistent data storage with MongoDB

## Technologies Used

- Frontend: React, CSS, HTML
- Backend: C#, .NET, MongoDB
- REST API

## Getting Started

### Prerequisites

- Node.js
- .NET SDK
- MongoDB

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/guyreuveni33/ToDoApp.git
    cd ToDoApp
    ```

2. Install client dependencies
    ```sh
    cd client
    npm install
    ```

3. Install server dependencies
    ```sh
    cd ../server
    dotnet restore
    ```

### Running the Application

1. Start the backend server
    ```sh
    cd server
    dotnet run
    ```

2. Start the frontend
    ```sh
    cd ../client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
