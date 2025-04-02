const fs = require('fs');
const db = require('./db/database');

// Läs in SQL-skriptet
const schema = fs.readFileSync('./db/schema.sql', 'utf-8');

try {
  db.exec(schema);
  console.log('✅ Databasen har initierats enligt schema.sql');
} catch (err) {
  console.error('❌ Fel vid initiering av databas:', err.message);
}