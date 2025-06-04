# Simple To Do List App Frontend
<br>

**Name:** Ella Raputri (2702298154)

<br>

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

<br>

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/Ella-Raputri/TA-WADS-ToDoList.git
cd TA-WADS-ToDoList
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm run dev
```
Vite will start a local development server and provide a URL (usually `http://localhost:5173/`).
Now, you can preview this simple to do list app. If you want to pull the images from Docker hub instead, you can choose the below configuration.


<br>

## Pages and Screenshots
<details>
<summary>&ensp;<b>Home/Welcome Page</b></summary>

- This is the first page that the user see when accessing the website.

- If the user does not login yet, then the Get Started button will redirect the user to the login page. However, if the user have logged in, then the Get Started button will redirect the user to the todo page.

- Image for this page:
  - <img src="docs\README_images\home.png" alt ="Home" width = "600"><br>
</details>

<br> 

<details>
<summary>&ensp;<b>Login and Register</b></summary>

- In the Login page, user can log in to their account if they already have a registered account. You can try with email: ella.raputri@binus.ac.id and password: 2702298154 if you want to test it.

- In Register page, user can register as a new user to the app.

- Images for this page:
  - <img src="docs\README_images\login.png" alt ="Login" width = "600"><br>
  - <img src="docs\README_images\register.png" alt="Register" width = "600"><br>
</details>

<br> 

<details>
<summary>&ensp;<b>To Do List</b></summary>

- In this page, user can create, read, update, and delete the tasks from their to do list.

- Image for this page:
  - <img src="docs\README_images\todo.png" alt ="To Do" width = "600"><br>
</details>

<br> 

<details>
<summary>&ensp;<b>Profile</b></summary>

- In this page, user can see and update their profile information.

- Image for this page:
  - <img src="docs\README_images\profile.png" alt ="Profile" width = "600"><br>
</details>

<br> 



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
