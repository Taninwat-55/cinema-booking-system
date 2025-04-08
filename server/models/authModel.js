const db = require('../db/database');

function getUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

function createUser(email, password, name) {
  const result = db.prepare(
    'INSERT INTO users (email, password, name) VALUES (?, ?, ?)'
  ).run(email, password, name || null);
  
  return result.lastInsertRowid;
}

module.exports = {
  getUserByEmail,
  createUser
};