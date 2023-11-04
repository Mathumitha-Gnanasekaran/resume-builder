const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const URI = "mongodb://localhost:27017/infas_cv_builder"

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;