const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = "./users.json";

// Helper functions
function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// ================= REGISTER =================
app.post("/api/register", (req, res) => {
  const data = req.body;

  const users = readUsers();

  // Check existing user
  const exists = users.find(u => u.email === data.email);
  if (exists) {
    return res.json({
      success: false,
      message: "Email already registered"
    });
  }

  // Save user
  users.push({
    id: Date.now(),
    ...data
  });

  writeUsers(users);

  res.json({
    success: true,
    message: "Registration successful"
  });
});

// ================= LOGIN =================
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.json({
      success: false,
      message: "Invalid email or password"
    });
  }

  res.json({
    success: true,
    message: "Login successful",
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName || ""
    }
  });
});

// ================= SERVER =================
app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
