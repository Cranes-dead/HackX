const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
};

const pool = mysql.createPool(dbConfig);

app.post('/submit-form', (req, res) => {
  const { pat_id, pat_name, pat_phno, pat_email, pat_sex, pat_bg } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool', err);
      return res.status(500).send('Internal Server Error');
    }

    const sql = 'INSERT INTO Patient (Pat_id, Pat_name, Pat_phno, Pat_email, Pat_sex, Pat_BG) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [pat_id, pat_name, pat_phno, pat_email, pat_sex, pat_bg], (err, results) => {
      connection.release();
      if (err) {
        console.error('Error executing SQL query', err);
        return res.status(500).send('Internal Server Error');
      }
      res.status(200).send('Form data inserted successfully');
    });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
