const app = require('./app');
const mongoose = require('mongoose');

const port = 8080;
const dbUrl = process.env.DATABASE;

mongoose.connect(dbUrl).then((con) => {
  console.log('DataBase Connected Successfully');
});

app.listen(port, () => {
  console.log(`App running in ${port}`);
});
