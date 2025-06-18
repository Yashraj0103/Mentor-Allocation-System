app.use(express.json());

// server.js
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // public contains student.html, student.js

// Dummy login endpoint
app.post("/api/login", (req, res) => {
  const { username, password, role } = req.body;
  const users = [
    { username: "student1", password: "studentpass", role: "student" },
    { username: "yash", password: "yash123", role: "student" },
  ];

  const match = users.find(u => u.username === username && u.password === password && u.role === role);
  if (match) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});


// Handle mentor request
app.post("/api/request-mentor", (req, res) => {
    const { name, topic, mentor } = req.body;
    if (!name || !topic || !mentor) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }
    console.log("Mentor requested by:", name, topic, mentor);
    res.status(200).json({ success: true });
  });
  

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



  