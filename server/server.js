import express from "express";

const app = express();

app.listen(8004, () => {
  console.log("Server is running on http://localhost:8004");
});
