# US census

The goal of this small web application is to visualize database data. A user can select a column, then display, for each different value in this column, the number of lines with this value, and the average age. Values are sorted by decreasing order and one can only display the first 100 values.

## Tech/Framework used

**Built with:**
- Nest.js, TypeORM, and SQLite
- React, Redux, and React Bootstrap

## Installing

### Prerequisites
- Node 10+
- SQLite

### Server
- Set up the database TestApricity.sqlite with a table *person*.
- Complete the `ormconfig.json` file with the path to the database
- Go to the server directory and run `npm install`
- Run `npm run start:dev`

### Client
- Complete the `.env` file with the server URL
- Go to the client directory and run `npm install`
- Run `npm start`