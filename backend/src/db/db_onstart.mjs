import { getClient } from "./db_config.js";
import { User } from "../models/user.mjs";

// this command will connect to the database
//    then create the count table if it does not exist
//    then add one value to that table
const db_onstart = () => {
  // PostgreSQL connection config
  const client = getClient();

  // Connect to the database
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL");

      // SQL query to create a table
      const createCountTableQuery = `
        CREATE TABLE IF NOT EXISTS count (
          id SERIAL PRIMARY KEY,
          value INTEGER NOT NULL DEFAULT 0
        )
      `;

      // Create the table
      return client.query(createCountTableQuery);
    })
    .then(() => {
      console.log('Table "count" created successfully');

      // SQL query to insert a default value into the table
      const insertDefaultValueQuery = `
        INSERT INTO count (value) VALUES (0)
      `;
      // Insert default value into the table
      return client.query(insertDefaultValueQuery);
    })
    .then(() => {
      // SQL query to create a table
      const createUserTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
        )
      `;

      // Create the table
      return client.query(createUserTableQuery);
    })
    .then(() => {
      console.log('Table "count" created successfully');

      return User.create({
        username: "johndoe",
        email: "johndoe@example.com",
      });
      // SQL query to insert a default value into the table
      // const insertUserQuery = `
      //   INSERT INTO users (username, email) VALUES ('johndoe', 'johndoe@example.com')
      // `;
      // // Insert default value into the table
      // return client.query(insertUserQuery);
    })
    .then(() => {
      console.log("Default value inserted into the table");
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL:", err);
    })
    .finally(() => {
      // End the client connection
      client.end();
    });
};

export { db_onstart };
