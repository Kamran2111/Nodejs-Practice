const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/templates/main.html"));
});

app.get("/analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/templates/analytics.html"));
});

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "public", "/templates/error.html"));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
