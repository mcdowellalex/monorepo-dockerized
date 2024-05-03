const { Client } = require("pg");

// Configuration object for connecting to the PostgreSQL database
const dbConfig = {
  user: "user",
  host: "postgresql",
  database: "mydatabase",
  password: "password",
  port: 5432,
};

// Export a function that creates and returns a new Client instance with the provided configuration
const getClient = () => {
  return new Client(dbConfig);
};

// Export the getClient function so it can be used elsewhere
module.exports = { getClient };
