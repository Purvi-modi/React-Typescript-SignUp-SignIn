const express = require("express");

const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const SUCCESSFULLY_REGISTERED = "successfully registered";
const DUPLICATE_ENTRY = "duplicate entry";

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "textdb1",
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    console.log(err);
    if (result.length > 0) {
      res.send(DUPLICATE_ENTRY);
    } else {
      db.query(
        "INSERT INTO users (email,password) values (?,?)",
        [email, password],
        (err, result) => {
          console.log(err);
          if (result) {
            res.send(SUCCESSFULLY_REGISTERED);
          }
        }
      );
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(email);
      } else {
        res.send({ message: " Wrong email/password combination!" });
      }
    }
  );
});

app.listen(8000, () => {
  console.log("running server");
});
