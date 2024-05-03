const { Client } = require("pg");

const db_onstart = () => {
  // PostgreSQL connection config
  const client = new Client({
    user: "user",
    host: "postgresql",
    database: "mydatabase",
    password: "password",
    port: 5432,
  });

  // Connect to the database
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL");

      // SQL query to create a table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS count (
          id SERIAL PRIMARY KEY,
          value INTEGER NOT NULL DEFAULT 0
        )
      `;

      // Create the table
      return client.query(createTableQuery);
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

module.exports = { db_onstart };
