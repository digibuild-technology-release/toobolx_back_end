require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const data = require('./routes/data');

/* const chartRoutes = require('./routes/chart');//collegamento api chart Value
const chartRoutesDateTime = require('./routes/chartDateTime')//collegamento api chart DateTime */

//const offersRoutes = require('./routes/offers'); //collegamento api offers


//const sqlRoutes = require('./routes/sql')
//const dbSql = require('./dbSql')


//database connection
//db.on('error', console.error.bind(console, 'MongoDB connection error:'))


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

// routes
app.use("/api/auth", authRoutes);
app.use("/api", data);

/* app.use("/api/chart", chartRoutes);//collegamento api chart
//app.use("/api/offers", offersRoutes) //collegamento api per tabella offers
app.use("/api/chartDateTime", chartRoutesDateTime)
 */

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));