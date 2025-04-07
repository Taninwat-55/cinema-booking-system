## Installation

1. Klona projektet: `git clone [repo-url]`
2. Installera beroenden: `npm install`
3. Installera server-beroenden: `cd server && npm install`
4. Installera klient-beroenden: `cd client && npm install`
5. Initiera databasen: `node server/initDB.js`
6. Lägga till exempeldata: 
   - `node server/seeds/insertMovies.js`
   - `node server/seeds/insertScreenings.js`
   - `node server/seeds/insertSeats.js`
7. Starta utvecklingsservern: `npm run dev`