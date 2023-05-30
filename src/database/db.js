import dotenv from "dotenv";
dotenv.config();

const DB_DEPLOY = process.env.DB_DEPLOY


import { Sequelize } from "sequelize";
// const db = new Sequelize("Blog_data_base", "postgres", "lebron23JAMES", {
//   // const db = new Sequelize("Prueba_1", "postgres", "lebron23JAMES", {

//   host: "localhost",
//   dialect: "postgres",
// });
const db= new Sequelize(
  DB_DEPLOY,
  { logging: false, native: false }
);
export default db;
