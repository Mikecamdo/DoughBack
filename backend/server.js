require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const employeesRoutes = require('./routes/employees');
const companiesRoutes = require('./routes/companies');
const ceoRoutes = require('./routes/ceo');
const claimsRoutes = require('./routes/claims');

const createModelsMiddleware = require('./middleware/model-middleware');

const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.use(createModelsMiddleware);

// Enable JSON parsing
app.use(express.json())

// Connect to mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE
})

connection.connect()

// API routes
app.use('/employees', employeesRoutes);
app.use('/companies', companiesRoutes);
app.use('/ceo', ceoRoutes);
app.use('/claims', claimsRoutes);

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})