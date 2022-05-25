const express = require("express");

const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "textdb1",
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "INSERT INTO users (email,password) values (?,?)",
    [email, password],
    (err, result) => {
      console.log(err);
      if (result) {
        res.send(result);
      }
    }
  );
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
        res.send(result);
      } else {
        res.send({ message: " Wrong email/password combination!" });
      }
    }
  );
});

app.listen(8000, () => {
  console.log("running server");
});
