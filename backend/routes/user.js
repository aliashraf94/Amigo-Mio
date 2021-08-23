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

  // const query = `
  // INSERT INTO users(name, email, password) 
  // VALUES($1,$2,$3) RETURNING *`;
  // const values = [newUser.name, newUser.email, newUser.password];

  const queryEmail = "select * from users where email=$1"
  const value = [newUser.email];

  pool.connect((error, client, release) => {
    if (error) {
      return console.error('Error acquiring client', error.stack)
    }
    client.query(queryEmail, value, (err, result) => {

      release();
      if (err) {
        console.log(err.message);
        return res.status(400).json({ err });
      }

      if (result.rows.length > 0) {
        return res.status(400).send({error:"A user with the same email already exists!"});
      }
    })

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
    });
  });



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
  const id = req.user.id
  // console.log(id);
  pool
    .query(`SELECT id, name, email, is_admin FROM users where id=${id}`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));

})

//This endpoint gives information about the user and the comment made to the book.
router.get("/booksCommentsUser/:bookId", function(req, res) {
  const bookId =   parseInt(req.params.bookId) ;
  const queryBooksCommentsUserId = `SELECT name, comment FROM users JOIN  comments ON users.id=comments.user_id JOIN books ON books.id=comments.book_id WHERE books.id =  $1`
  if(!isNaN(bookId) && bookId > 0 ){ 
    pool
        .query(queryBooksCommentsUserId, [bookId])
        .then((result) => res.json(result.rows))
        .catch((e) => console.error(e))
  }else{
    res.send(`The value ${req.params.bookId} is not a number`)
  }
})

// INSERT DATA IN order_items
router.post("/commentInsert", (req, res) =>{
  //Desestructuración
  const {user_id, book_id, comment  } = req.body
  const insertDates = "INSERT INTO comments (user_id, book_id, comment) VALUES ($1, $2, $3) "
  pool.query(insertDates, [user_id, book_id, comment])
     .then(() => res.status(200).send({ message: "new comment" }) )
     .catch(e =>   {res.send(e); console.log(e) }    )
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
    .then(() => res.status(200).send({userEmail:"Email is updated"}))
    .catch((e) => console.error(e));

})

router.patch("/changeUsername", authenticate, (req, res) => {
  const id = req.user.id
  const name = req.body.name;
  const query = `UPDATE users set name=$1 where id=$2`
  pool
  .query(query, [name, id])
  .then(() => res.status(200).send({Username:"Username is updated"}))
  .catch((e) => console.error(e));

})

router.patch("/changePassword", authenticate, (req, res) => {
  const id = req.user.id
  const password = bcrypt.hashSync(req.body.password, 8)
  const query = `UPDATE users set password=$1 where id=$2`
  pool
    .query(query, [password, id])
    .then(() => res.status(200).send({userPassword:"Password is updated"}))
    .catch((e) => console.error(e));

})

// Creating a end point where we can delete the user.
router.delete("/deleteAccount", authenticate, (req, res) => {
  const id = req.user.id
  // const id = 15
  const query = `DELETE FROM users WHERE id=$1`
  pool
    .query(query, [id])
    .then(() => res.status(200).send("The account is deleted"))
    .catch((e) => console.error(e));
  // Bug: If user is connected to other tables we should receive that error.

})


router.post("/uploadBook" , authenticate, (req, res) => {
  
  const newBook = {
    title: req.body.title,
    description: req.body.description,
    img_url: req.body.img_url,
    format: req.body.format,
    user_id: req.user.id,
    suggest_age: req.body.suggest_age
  };
  console.log(newBook)

  const query = "INSERT INTO books (title, descriptoin,image_url, format, user_id, suggest_age)  VALUES($1,$2,$3,$4,$5,$6) RETURNING *"
  const values = [newBook.title, newBook.description, newBook.img_url, newBook.format, newBook.user_id, newBook.suggest_age]
  pool
  .query(query, values)
  .then(() => res.status(200).send({res:"Book is uploaded"}))
  .catch((e) => console.error(e));
  // Bug: If user is connected to other tables we should receive that error.

})





module.exports = router;   // we need to export this router to implement it inside our server.js files