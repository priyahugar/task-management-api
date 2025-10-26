# Task Management API

## Overview
This is a RESTful backend API for managing tasks, like a to-do list.  
Users can add, view, update, and delete tasks using HTTP requests.

## Tech Stack
- Node.js
- Express.js
- JWT for authentication

## API Endpoints
- *Add Task:* POST /tasks  
- *View All Tasks:* GET /tasks  
- *Update Task:* PUT /tasks/:id  
- *Delete Task:* DELETE /tasks/:id  

## Getting Started
To run the project, navigate to the project folder and run the following commands:
```
cd task-management-api
npm install
npm start
```
After the server is running, test the API routes using Postman or Thunder Client:
```
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

## Notes
- Data will reset whenever the server restarts.  
- Each task has a *unique ID, **title, and **description*.
