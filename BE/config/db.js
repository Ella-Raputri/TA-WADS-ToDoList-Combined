import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,    
  dialect: 'mysql',              
  username: process.env.DB_USERNAME,     
  password: process.env.DB_PASSWORD,     
  database: process.env.DB_NAME,    
  logging: false,               
});

// Test connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection established successfully.');
  } catch (error) {
    console.error('Unable to connect:', error);
    process.exit(1); 
  }
};

export { sequelize, testConnection };
