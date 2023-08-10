const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors')
require('dotenv').config();

const Carrouter = require("./routers/Carrouter");
const Admins=require('./routers/Adminroutes')

const app = express();
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/Carrouter", Carrouter);
app.use('/admin',Admins)
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`this port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
