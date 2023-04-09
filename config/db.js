const mongoose = require("mongoose");

//connect database
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MONGODB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
