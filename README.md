# User Management Application

The User Management Application is a web-based system developed using Spring Boot on the backend and React.js with Redux on the frontend. It provides functionality for user CRUD operations and authentication with token-based authorization.

## Features

- User creation, update, deletion, and retrieval.
- User login with token generation and expiration. ~~~(Pending)
- Token validation with token renewal on expiry.

## Technologies Used

- Backend:
    - Java Spring Boot
    - MySQL
- Frontend:
    - React.js
    - Redux
    - Bootstrap

## Prerequisites

Before running the application, ensure that you have the following installed:

- Java Development Kit (JDK)
- Node.js and npm
- MySQL database

## Getting Started

To set up and run the User Management Application, follow these steps:

### Backend Setup

1. Clone the repository: `git clone https://github.com/alanmercus/user_management.git`
2. Open the `user_management` directory.
3. Configure the database connection in `src/main/resources/application.properties`.
4. Run the application.

### Frontend Setup

1. Open the `ui` folder inside the roo directory.
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm start`

## Configuration

The following configurations can be found in `src/main/resources/application.properties`:

- `spring.datasource.url`: The URL for connecting to the MySQL database.
- `spring.datasource.username`: The username for the database connection.
- `spring.datasource.password`: The password for the database connection.
- `app.token.expiry`: The expiration time for generated tokens (in milliseconds). ~(Pending)

