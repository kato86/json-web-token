require("dotenv/config");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");

// 2. Login a user
// 3. Logout a user
// 4. Setup a protected route
// 5. Get a new accestoken with a refresh token

const server = express();

// Use express middleware for easier cookie handling
server.use(cookieParser());

server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

// Needed to be able to read body data
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(process.env.PORT, () =>
  console.log(`Server listenig on port ${process.env.PORT}`)
);

// 1. Register a user
server.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exist

    const hashedPassword = await hash(password, 10);
    console.log(hashedPassword);
  } catch (err) {}
});
