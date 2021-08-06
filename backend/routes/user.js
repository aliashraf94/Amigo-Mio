const express = require("express");
const bcrypt = require("bcrypt");   // bcrypt is used to hash password before saving it to database
const fs = require("fs");   // fs is node's inbuilt file system module used to manage files
const generateJWT = require("../utils/generateJWT")
const jwt = require("jsonwebtoken");
const { pool } = require("../database/db.config");   // import database connection
require("dotenv").config(); 
const router = express.Router();   // we create a new router using express's inbuilt Router method
const ONEDAY = 86400;

// create a new user with the give email, name, and hashed password
router.post("/sign-up", (req, res) => {

  const lowerCaseUsername = req.body.name.toLowerCase();
  const newUser = {
    name: lowerCaseUsername,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  };

  const query = `
  INSERT INTO users(name, email, password) 
  VALUES($1,$2,$3) RETURNING *`;
  const values = [newUser.name, newUser.email, newUser.password];

  pool.connect((error, client, release) => {
    if(error) {
      return console.error('Error acquiring client', error.stack)
    }
    client.query(query, values, (err, result) => {
      release();
      if(err) {
        console.log(err.message);
        return res.status(400).json({err});
      }
      // const user = result.rows[0];
      // const token = jwt.sign(
      //   { id: user.id }, 
      //   process.env.jwtSecret, 
      //   { expiresIn: ONEDAY }
      // );
      const jwtToken = generateJWT(newUser.id);

      return res.status(200).send({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        accessToken: jwtToken,
        message: "User was registered successfully!"
      });
    });
  });

  });
  
  // sign in with user given email and password
  router.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await usersDb.filter(user => user.email === email);
  
      if (user.length === 0) {
        return res.status(401).json({error: "Invalid Credential", isAuthenticated: false});
      }
  
  
      // if the user exist then we will compare the password provided by user with the hashed password we stored during user registration
      const isValidPassword = await bcrypt.compare(
        password,
        user[0].password
      );
  
      if (!isValidPassword) {
        return res.status(401).json({error: "Invalid Credential", isAuthenticated: false});
      }
  
      
      // if the password matches with hashed password then we generate a new token and send it back to user
      const jwtToken = generateJWT(user[0].id);
  
      return res.status(200).send({ jwtToken, isAuthenticated: true });
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send({error: error.message});
    }
  });


  module.exports = router;   // we need to export this router to implement it inside our server.js file