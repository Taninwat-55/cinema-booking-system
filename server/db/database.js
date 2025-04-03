const Database = require('better-sqlite3');
// const db = new Database('cinema.db');
const path = require('path');

const db = new Database(path.join(__dirname, '../../cinema.db'));

module.exports = db;
