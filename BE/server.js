import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/User.js';
import Task from './models/Task.js';
import connectDB from './config/mongodb.js'
// import { sequelize, testConnection } from './config/db.js';
// import SequelizeStore from 'connect-session-sequelize';
import userRouter from './routes/userRouter.js';
import taskRouter from './routes/taskRouter.js';
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import { swaggerSpec, swaggerUi } from './config/swagger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// const SequelizeStoreInstance = SequelizeStore(session.Store);
// const sessionStore = new SequelizeStoreInstance({
//   db: sequelize,
// });

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
      mongoUrl: MONGODB_URI,
      ttl: 7 * 24 * 60 * 60, // 7 days
  }),
  cookie:{
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production'? 'none':'strict',
      maxAge: 7 *24 *60 *60 *1000
  }
}))

// sessionStore.sync();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/', (req, res) => {
  res.send('Hello world !');
});

app.use('/api/task', taskRouter)
app.use('/api/user', userRouter)

// const startApp = async () => {
//   await testConnection(); 
//   await sequelize.sync({ alter: true });

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

const startApp = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
};

startApp();