import express from "express";
import cors from "cors";
import { db_onstart } from "./db/db_onstart.mjs";
import countRoutes from "./routes/count.mjs";
import userRoutes from "./routes/user.mjs";

// server config and setup
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

// create table and insert first value
db_onstart();

// add your routes here
app.use("/count", countRoutes);
app.use("/users", userRoutes);

app.get("/", function (req, res) {
  res.status(200).send("hello world! test");
});

// global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occurred.");
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
