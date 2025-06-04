# Simple To Do List App Backend
<br>

**Name:** Ella Raputri (2702298154)

<br>

## Project Description
This is a simple to do list app backend used for my practice in using Express and Sequelize for MySQL.

<br>

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

<br>

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/Ella-Raputri/TA-WADS-ToDoList-Backend.git
cd TA-WADS-ToDoList-Backend
```
<br>

### 2. Install Dependencies
```sh
npm install
```
<br>

### 3. Setup Local MySQL Database
#### 1). Log into MySQL by using this command in terminal or using GUI (For me, I use the GUI MySQL Workbench)
```sh
mysql -u root -p
```
#### 2). Create a new database named todolist_ella
```sh
CREATE DATABASE todolist_ella;
```
#### 3). Add the credentials to the .env file
```sh
DB_HOST= localhost             
DB_USERNAME= root    
DB_PASSWORD= <your password>    
DB_NAME= todolist_ella
```
<br>

### 4. Start the Development Server
```sh
npm run server
```
The backend server will start at `http://localhost:3000/`.

<br>

## API Documentation

Below is the API Design for the to do list app. 
<br>
<img src="docs\README_images\api_design.png" alt ="API Design" width = "600"><br>

For more information, you can access the Swagger UI API documentation in `http://localhost:3000/api-docs` after starting the backend server.
