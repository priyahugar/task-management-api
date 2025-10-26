# Task Management API

## Overview
A simple backend REST API to manage tasks, similar to a to-do list.  
You can create, view, update, and delete tasks using HTTP requests.

## Tech Stack
- Node.js  
- Express.js  
- JWT Authentication  

## Fetures
Create Task:POST/tasks   
Get All Tasks:GET/tasks 
Update Task:PUT/tasks/:id
Delete Task:DELETE/tasks/:id

## How to Run
1. Go to the project folder
   cd task-management-api
2. Install dependencies:
   npm install
3. Start the server
   npm start
4. Open Thunder Client or Postman to test CRUD routes:
   - GET /tasks
   - POST /tasks
   - PUT /tasks/:id
   - DELETE /tasks/:id

## Notes
- The tasks will reset when the server restarts.
- Each task contains a unique ID, a title, and a description.