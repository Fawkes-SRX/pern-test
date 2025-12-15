// db.js
const { Pool } = require('pg');

// The "Pool" manages the connections for us
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required for Render's free tier
  }
});

module.exports = pool;