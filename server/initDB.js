const fs = require('fs');
const path = require('path');
const db = require('./db/database');

const schema = fs.readFileSync(
  path.join(__dirname, 'db', 'schema.sql'),
  'utf-8'
);

try {
  db.exec(schema);
  console.log('✅ Databasen har initierats enligt schema.sql');
} catch (err) {
  console.error('❌ Fel vid initiering av databas:', err.message);
}
