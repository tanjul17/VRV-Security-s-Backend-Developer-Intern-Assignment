# VRV Security’s Backend Developer Intern Assignment

## Overview

This is a web application developed using the **MERN stack** (MongoDB, Express, React, Node.js) to demonstrate **Role-Based Access Control (RBAC)** for a security service company. The system defines three user roles: **Guard**, **Manager**, and **Authority**, each with different levels of access to services.

### Live Demo

You can access the live version of the application here:  
[**Live Demo**]https://frontend-vrv-task-tanjul.vercel.app/

### Features

- **Authentication**: Uses **JWT (JSON Web Tokens)** to securely authenticate users.
- **Authorization**: The application implements role-based access where different user roles have different access permissions:
  - **Guard**: Limited access to services, such as CCTV surveillance and basic functionality.
  - **Manager**: Access to additional services like guard deployment, attendance records, and security oversight.
  - **Authority**: Full access to all available services, including advanced options like viewing active units, generating reports, and system management.

### Tech Stack

- **Frontend**:
  - **React.js**: A JavaScript library for building user interfaces. React is used to build dynamic, responsive components and manage the front-end application state.
  - **React Router**: For handling routing and navigation within the application.
  - **Axios**: For making HTTP requests to the backend API.

- **Backend**:
  - **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server-side.
  - **Express.js**: A web application framework for Node.js that simplifies the routing and handling of HTTP requests.
  - **JWT (JSON Web Tokens)**: For secure user authentication. JWT is used to verify the identity of users based on their credentials.
  - **bcrypt.js**: For password hashing, ensuring secure storage of user passwords in the database.

- **Database**:
  - **MongoDB**: A NoSQL database used to store application data, including user credentials and role-based information.

- **Other Tools**:
  - **CORS (Cross-Origin Resource Sharing)**: To enable secure cross-origin requests between the frontend and backend.
  - **dotenv**: To manage environment variables for sensitive information, such as database connection strings and JWT secrets.
  - **Mongoose**: A MongoDB object modeling tool that provides a straight-forward way to interact with MongoDB collections.

### Key Enhancements:
- **Dark Mode & Light Mode**: Added a feature for theme switching, improving user experience.
- **RBAC Integration**: Secured routes and actions based on user roles.
- **Tech Stack**: Clear listing of technologies used in both the backend and frontend.

### Setup & Installation

To set up the project locally, follow the steps below:

![Screenshot (23)](https://github.com/user-attachments/assets/4d5feb75-0407-43ad-9686-3f24c186c7ac)
![Screenshot (22)](https://github.com/user-attachments/assets/0a31de31-afd1-4797-88bb-e106699bdf00)
![Screenshot (21)](https://github.com/user-attachments/assets/7a128fb6-8218-483f-a8db-8db80d9fa753)
![Screenshot (20)](https://github.com/user-attachments/assets/08f108c6-a2b5-46a8-a450-d96c3286bade)
![Screenshot (19)](https://github.com/user-attachments/assets/d05792ee-b8fa-4f46-8220-e35a1ac97483)
![Screenshot (18)](https://github.com/user-attachments/assets/eb03299f-1955-418a-97dc-4a73c8bbaf59)



#### 1. **Clone the Repository**
First, clone the repository to your local machine:

```bash
git clone https://github.com/tanjul17/VRV-Security-s-Backend-Developer-Intern-Assignment
