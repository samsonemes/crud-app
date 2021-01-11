const mongoose = require('mongoose')
require('dotenv').config()


const mongoURI = process.env.dURI
const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
      });
      
      console.log("Connected to DataBase !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
module.exports = InitiateMongoServer;