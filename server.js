const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Menampilkan file website
app.use(express.static(__dirname));

// Route utama
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});