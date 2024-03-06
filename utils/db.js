import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export const connection = mysql.createConnection({
  port: 3306, // Your MySQL port
  host: "localhost", // Your MySQL host
  user: "root", // Your MySQL username
  password: "Asraar7130#", // Your MySQL password
  database: "loginactivities", // Your MySQL database name
});
