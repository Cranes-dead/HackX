app.post('/submit-form', (req, res) => {
    const { pat_id, pat_name, pat_phno, pat_email, pat_sex, pat_bg } = req.body;

    // Insert the data into the database
    const query = 'INSERT INTO patients (id, name, phone, email, sex, blood_group) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [pat_id, pat_name, pat_phno, pat_email, pat_sex, pat_bg];

    connection.query(query, values, (error, result) => {
        if (error) {
            console.error('An error occurred while executing the query');
            return res.status(500).send('An error occurred');
        }
        res.send('Form submitted successfully');
    });
});

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', // or the IP address of your MySQL server
    port: 3306, // optional, only if your MySQL server is running on a different port
    user: 'root',
    password: 'Shaily1201',
    database: 'TrailX'
});


connection.connect((error) => {
    if (error) {
        console.error('An error occurred while connecting to the DB');
        throw error;
    }
    console.log('Connected to the database');
});
