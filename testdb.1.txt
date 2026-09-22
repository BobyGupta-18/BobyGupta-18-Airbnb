require("dotenv").config();

const mongoose = require("mongoose");

async function testDB() {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.ATLASDB_URL);

        console.log("✅ MongoDB Atlas connected!");

        await mongoose.connection.db.admin().ping();

        console.log("✅ MongoDB ping successful!");

        await mongoose.disconnect();
    } catch (err) {
        console.log("❌ MongoDB connection failed:");
        console.log(err.message);
    }
}

testDB();