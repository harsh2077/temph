# Assignment

## Overview
EmployWise is a user management application built with React that integrates with the [Reqres API](https://reqres.in/) for basic user management functions. This application features a login screen, a paginated user list, and the ability to edit and delete user details.

## Features
- **Authentication Screen:** Allows users to log in using predefined credentials.
- **User List:** Displays a paginated list of users with their details.
- **Edit User:** Users can edit their first name, last name, and email.
- **Delete User:** Users can remove other users from the list.
- **Client-Side Search:** Basic filtering functionality to search through users.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Code Quality](#code-quality)
- [License](#license)

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/harsh2077/user-management
   cd user-management
2. Install dependencies:
    ```bash
   npm install
3. Start the application:
    ```bash
   npm start

## Usage
1. Open the application in your web browser at `http://localhost:3000`.
2. Enter the following credentials to log in:
   - **Email:** `eve.holt@reqres.in`
   - **Password:** `cityslicka`
3. After logging in, you will be redirected to the Users List page.
4. Here, you can view, edit, or delete users. You can also use the search feature to filter users by name.

## API Endpoints
- **Authentication:**
  - `POST /api/login` - Logs in a user and returns a token.
  
- **Get Users:**
  - `GET /api/users?page=1` - Fetches the list of users.
  
- **Update User:**
  - `PUT /api/users/{id}` - Updates a user's details.
  
- **Delete User:**
  - `DELETE /api/users/{id}` - Deletes a user from the list.

## Error Handling
The application gracefully handles API errors, displaying appropriate messages to the user when login fails or when editing/deleting users encounters an issue. Form validation is implemented to ensure user input is valid.

