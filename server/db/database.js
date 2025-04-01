const Database = require('better-sqlite3');
const db = new Database('cinema.db');

module.exports = db;
