const express = require("express");
const bcrypt = require("bcrypt");   // bcrypt is used to hash password before saving it to database
// const fs = require("fs");   // fs is node's inbuilt file system module used to manage files
const generateJWT = require("../utils/generateJWT")
const jwt = require("jsonwebtoken");
const { pool } = require("../database/db.config");   // import database connection
const authenticate = require("../middleware/authenticate");
const { query } = require("express");
require("dotenv").config();
const router = express.Router();   // we create a new router using express's inbuilt Router method
const ONEDAY = 86400;

// create a new user with the give email, name, and hashed password
router.post("/sign-up", (req, res) => {

  const lowerCaseEmail = req.body.email.toLowerCase();
  const newUser = {
    name: req.body.name,
    email: lowerCaseEmail,
    password: bcrypt.hashSync(req.body.password, 8)
  };

  // const queryEmail = `select * from users where email=${newUser.email}`
  // console.log(newUser.email);
  // pool
  // .query(`select * from users where email=${newUser.email}`)
  // .then((result) => {
  //   res.json(result.rows)
  //   console.log(",,,,,,,,,,,sdjfkasjdhfgkajsbdjkahsgbjkhgasjh,,,,,,",result.rows.length);
  // })
  // .catch((e) => console.error(e));

  const query = `
  INSERT INTO users(name, email, password) 
  VALUES($1,$2,$3) RETURNING *`;
  const values = [newUser.name, newUser.email, newUser.password];

  pool.connect((error, client, release) => {
    if (error) {
      return console.error('Error acquiring client', error.stack)
    }
    client.query(query, values, (err, result) => {

      release();
      if (err) {
        console.log(err.message);
        return res.status(400).json({ err });
      }

      if (result.rows.length > 0) {
        return res.status(400).send({error:"A user with the same email already exists!"});
      } else {

        const query = "INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *";
        const values = [newUser.name, newUser.email, newUser.password];

        pool.connect((error, client, release) => {
          if (error) {
            return console.error('Error acquiring client', error.stack)
          }
          client.query(query, values, (err, result) => {
            release();
            if (err) {
              console.log(err.message);
              return res.status(400).json({ err });
            }
            // const user = result.rows[0];
            // const token = jwt.sign(
            //   { id: user.id }, 
            //   process.env.jwtSecret, 
            //   { expiresIn: ONEDAY }
            // );
            const jwtToken = generateJWT(newUser.id);

            return res.status(200).send({
              isAuth: true,
              accessToken: jwtToken
            });
          });
        });
      }
    });
  });
})



// sign in with user given email and password
router.post("/sign-in", async (req, res) => {
  const lowerCaseEmail = req.body.email.toLowerCase();
  const findUser = {
    email: lowerCaseEmail
  };

  const query = `
    SELECT * FROM users WHERE email = $1`;
  const values = [findUser.email];
  pool.connect((error, client, release) => {
    if (error) {
      return console.error('Error acquiring client', error.stack)
    }
    client.query(query, values, (err, result) => {
      release();
      if (err) {
        console.log(err.message);
        return res.status(400).json({ err });
      }
      const user = result.rows[0];
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const jwtToken = generateJWT(user.id);

      res.status(200).send({
        isAuth: true,
        accessToken: jwtToken
      });
    });
  });
});

router.get("/allusers", authenticate, async (req, res) => {
  console.log(req);
  pool
    .query("SELECT * FROM users")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));

})

router.get("/userProfile", authenticate, async (req, res) => {
  console.log(req.user.id);
  const id = req.user.id
  // console.log(id);
  pool
    .query(`SELECT * FROM users where id=${id}`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));

})

router.get("/allbooks", async (req, res) => {

  pool
    .query(`SELECT * FROM books`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));

})

router.get("/favorites", async (req, res) => {

  pool
    .query(`SELECT * FROM favorites`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));

})

router.get("/comments", async (req, res) => {

  pool
    .query(`SELECT * FROM comments`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));

})

router.patch("/changeEmail", authenticate, (req, res) => {
  const id = req.user.id
  const email = req.body.email.toLowerCase();
  const query = `UPDATE users set email=$1 where id=$2`
  pool
  .query(query, [email, id])
  .then(() => res.status(200).send("Email is updated"))
  .catch((e) => console.error(e));

})

router.patch("/changeUsername", authenticate, (req, res) => {
  const id = req.user.id
  const name = req.body.name;
  const query = `UPDATE users set name=$1 where id=$2`
  pool
  .query(query, [name, id])
  .then(() => res.status(200).send("Username is updated"))
  .catch((e) => console.error(e));

})

router.patch("/changePassword", authenticate, (req, res) => {
  const id = req.user.id
  const password = bcrypt.hashSync(req.body.password, 8)
  const query = `UPDATE users set password=$1 where id=$2`
  pool
  .query(query, [password, id])
  .then(() => res.status(200).send("Password is updated"))
  .catch((e) => console.error(e));

})





module.exports = router;   // we need to export this router to implement it inside our server.js files