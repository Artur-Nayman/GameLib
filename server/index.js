const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for JSON parsing
app.use(express.json());

// Configuring the connection to PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test route
app.get('/', (req, res) => {
  res.send('GameLib API is running...');
});

// Checking the connection to the database and starting the server
async function startServer() {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to PostgreSQL');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Database connection error:', err);
    process.exit(1);
  }
}

startServer();