import { getClient } from "../db/db_config.js";
import express from "express";

const router = express.Router();

// Function to increment the value of row with id 1 in the count table and return the updated value
const incrementCountAndGetUpdatedValue = async () => {
  const client = getClient();

  try {
    await client.connect();

    // SQL query to increment the value of row with id 1 and return the updated value
    const incrementAndGetQuery = `
        UPDATE count
        SET value = value + 1
        WHERE id = 1
        RETURNING value
      `;

    // Execute the query and get the updated value
    const result = await client.query(incrementAndGetQuery);

    console.log("Value incremented and updated successfully");

    // Extract and return the updated value
    const updatedValue = result.rows[0].value;
    return updatedValue;
  } catch (error) {
    console.error("Error incrementing value:", error);
    throw error;
  } finally {
    await client.end();
  }
};

// Route to handle the "/increment" endpoint
router.get("/", async function (req, res) {
  try {
    // Call the incrementCountAndGetUpdatedValue method to increment the value and get the updated value
    const updatedValue = await incrementCountAndGetUpdatedValue();
    res.status(200).send({ count: updatedValue });
  } catch (error) {
    res.status(500).send("Error incrementing value");
  }
});

export default router;
