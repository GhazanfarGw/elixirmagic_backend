const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const bitcoinRouter = require('./routes/bitcoin');
const ethereumRouter = require('./routes/ethereum');
const tetherRouter = require('./routes/tether');

app.use('/bitcoin', bitcoinRouter);
app.use('/ethereum', ethereumRouter);
app.use('/tether', tetherRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
