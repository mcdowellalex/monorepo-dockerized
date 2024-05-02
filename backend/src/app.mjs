import express from "express";
import cors from "cors";

// server config and setup
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

// global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.get("/", function (req, res) {
  res.status(200).send("hello world!");
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
