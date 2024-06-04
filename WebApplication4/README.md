# Todo-List Server

This is the backend server for the Todo-List application, built with C# and .NET, using MongoDB for data storage. The server provides a RESTful API to manage todo items, allowing clients to create, read, update, and delete tasks.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)

## Features

The Todo-List server includes the following features:
- RESTful API to manage todo items
- MongoDB for persistent data storage
- Endpoints for creating, reading, updating, and deleting todo items

## Technologies Used

- **C#**
- **.NET**
- **MongoDB**

## Getting Started

### Prerequisites

To run the server, ensure you have the following installed:
- .NET SDK
- MongoDB

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/guyreuveni33/ToDoApp.git
   ```

2. **Enter the folder**:
   ```bash
   cd ToDoApp/server/WebApplication4
   ```

3. **Install dependencies**:
   ```bash
   dotnet restore
   ```

### Running the Server

1. **Start the backend server**:
   ```bash
   dotnet run
   ```

The server will start running on the default port. Ensure that MongoDB is running and accessible.

### API Endpoints

The server provides the following API endpoints:

- `GET /api/todos`: Fetch all todo items
- `POST /api/todos`: Add a new todo item
- `PUT /api/todos/{id}`: Update a todo item
- `DELETE /api/todos/{id}`: Delete a todo item

### Configuration

Ensure MongoDB is running and update the connection string in `appsettings.json` if necessary. The default configuration assumes MongoDB is running locally on the default port.

**Example `appsettings.json`**:
```json
{
  "ConnectionStrings": {
    "MongoDb": "mongodb://localhost:27017"
  },
  "DatabaseName": "TodoAppDb"
}
```

## Conclusion

The Todo-List server is a robust backend service that provides essential functionalities for managing todo items. By following the setup instructions, you can easily get the server up and running and integrate it with the Todo-List client for a complete todo management solution.
