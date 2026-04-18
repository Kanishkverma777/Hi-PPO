const mongoose = require('mongoose');

async function connectDB(){

    await mongoose.connect(process.env.MONGODB_URI);
    // uri me apne mongodb atlas ka connection string daalna hai jisme username, password aur database name hoga
    console.log("Connected to MongoDB");
}

module.exports = connectDB;

