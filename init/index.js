const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
 main()
 .then(()=>{
    console.log("Connected to DB");
 })
 .catch ((err) =>{
    console.log(err);
 });
 async function main() {
    await mongoose.connect(MONGO_URL);
 }
 const initDB = async () =>{
     await Listing.deleteMany({});
     initData.data = initData.data.map((obj) => ({
      ...obj,owner:"6aae8e39ae1dbd4bbdcb0fd8",
     }));

     await Listing.insertMany(initData.data);
     console.log("data was initialised")
 };
 initDB();


// require("dotenv").config();
// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");
// const MONGO_URL = process.env.ATLASDB_URL;

// // const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//     .then(() => {
//         console.log("Connected to DB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {

//     // Delete old listings
//     await Listing.deleteMany({});

//     const locations = [
//         "Goa",
//         "Manali",
//         "Jaipur",
//         "Udaipur",
//         "Mumbai",
//         "Delhi",
//         "Rishikesh",
//         "Shimla",
//         "Lonavala",
//         "Jaisalmer",
//         "Mussoorie",
//         "Nainital",
//         "Jodhpur",
//         "Agra",
//         "Varanasi",
//         "Bangalore",
//         "Hyderabad",
//         "Kolkata",
//         "Chandigarh",
//         "Pune",
//         "Amritsar",
//         "Munnar",
//         "Darjeeling",
//         "Ooty",
//         "Srinagar",
//         "Kashmir",
//         "Ahmedabad",
//         "Lucknow",
//         "Noida",
//         "Greater Noida"
//     ];

//     const coordinates = [
//         [73.8567, 15.4909],
//         [77.1892, 32.2396],
//         [75.7873, 26.9124],
//         [73.7125, 24.5854],
//         [72.8777, 19.0760],
//         [77.1025, 28.7041],
//         [78.2676, 30.0869],
//         [77.1734, 31.1048],
//         [73.4072, 18.7546],
//         [70.9083, 26.9157],
//         [78.0747, 30.4598],
//         [79.4636, 29.3919],
//         [73.0243, 26.2389],
//         [78.0081, 27.1767],
//         [82.9739, 25.3176],
//         [77.5946, 12.9716],
//         [78.4867, 17.3850],
//         [88.3639, 22.5726],
//         [76.7794, 30.7333],
//         [73.8567, 18.5204],
//         [74.8723, 31.6340],
//         [77.0595, 10.0889],
//         [88.2636, 27.0410],
//         [76.6950, 11.4064],
//         [74.7973, 34.0837],
//         [74.8723, 34.0837],
//         [72.5714, 23.0225],
//         [80.9462, 26.8467],
//         [77.3910, 28.5355],
//         [77.3910, 28.4744]
//     ];

//     const listings = initData.data.map((obj, index) => ({
//         ...obj,

//         // data.js ki listing ka location replace hoga
//         location: locations[index % locations.length],

//         // country
//         country: "India",

//         // owner
//       //   owner: "6aae8e39ae1dbd4bbdcb0fd8",

//         // required geometry
//         geometry: {
//             type: "Point",
//             coordinate: coordinates[index % coordinates.length]
//         }
//     }));

//     await Listing.insertMany(listings);

//     console.log("Data was initialised");

//     mongoose.connection.close();
// };

// // initDB();

// require("dotenv").config();

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = process.env.ATLASDB_URL;

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("Connected to DB");
// }

// const initDB = async () => {

//     // Delete old listings
//     await Listing.deleteMany({});

//     const locations = [
//         "Goa",
//         "Manali",
//         "Jaipur",
//         "Udaipur",
//         "Mumbai",
//         "Delhi",
//         "Rishikesh",
//         "Shimla",
//         "Lonavala",
//         "Jaisalmer",
//         "Mussoorie",
//         "Nainital",
//         "Jodhpur",
//         "Agra",
//         "Varanasi",
//         "Bangalore",
//         "Hyderabad",
//         "Kolkata",
//         "Chandigarh",
//         "Pune",
//         "Amritsar",
//         "Munnar",
//         "Darjeeling",
//         "Ooty",
//         "Srinagar",
//         "Kashmir",
//         "Ahmedabad",
//         "Lucknow",
//         "Noida",
//         "Greater Noida"
//     ];

//     const coordinates = [
//         [73.8567, 15.4909],
//         [77.1892, 32.2396],
//         [75.7873, 26.9124],
//         [73.7125, 24.5854],
//         [72.8777, 19.0760],
//         [77.1025, 28.7041],
//         [78.2676, 30.0869],
//         [77.1734, 31.1048],
//         [73.4072, 18.7546],
//         [70.9083, 26.9157],
//         [78.0747, 30.4598],
//         [79.4636, 29.3919],
//         [73.0243, 26.2389],
//         [78.0081, 27.1767],
//         [82.9739, 25.3176],
//         [77.5946, 12.9716],
//         [78.4867, 17.3850],
//         [88.3639, 22.5726],
//         [76.7794, 30.7333],
//         [73.8567, 18.5204],
//         [74.8723, 31.6340],
//         [77.0595, 10.0889],
//         [88.2636, 27.0410],
//         [76.6950, 11.4064],
//         [74.7973, 34.0837],
//         [74.8723, 34.0837],
//         [72.5714, 23.0225],
//         [80.9462, 26.8467],
//         [77.3910, 28.5355],
//         [77.3910, 28.4744]
//     ];

//     const listings = initData.data.map((obj, index) => ({
//         ...obj,

//         // Change location
//         location: locations[index % locations.length],

//         // Change country
//         country: "India",

//         // Required for Mapbox
//         geometry: {
//             type: "Point",
//             coordinate: coordinates[index % coordinates.length]
//         }
//     }));

//     await Listing.insertMany(listings);

//     console.log("Data was initialised");

//     await mongoose.connection.close();

//     console.log("Database connection closed");
// };

// main()
//     .then(() => {
//         return initDB();
//     })
//     .catch((err) => {
//         console.log("Database error:");
//         console.log(err);
//     });


// require("dotenv").config();

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = process.env.ATLASDB_URL;

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("Connected to DB");
// }

// const initDB = async () => {

//     // Delete old listings
//     await Listing.deleteMany({});

//     const locations = [
//         "Goa",
//         "Manali",
//         "Jaipur",
//         "Udaipur",
//         "Mumbai",
//         "Delhi",
//         "Rishikesh",
//         "Shimla",
//         "Lonavala",
//         "Jaisalmer",
//         "Mussoorie",
//         "Nainital",
//         "Jodhpur",
//         "Agra",
//         "Varanasi",
//         "Bangalore",
//         "Hyderabad",
//         "Kolkata",
//         "Chandigarh",
//         "Pune",
//         "Amritsar",
//         "Munnar",
//         "Darjeeling",
//         "Ooty",
//         "Srinagar",
//         "Kashmir",
//         "Ahmedabad",
//         "Lucknow",
//         "Noida",
//         "Greater Noida"
//     ];

//     const coordinates = [
//         [73.8567, 15.4909],
//         [77.1892, 32.2396],
//         [75.7873, 26.9124],
//         [73.7125, 24.5854],
//         [72.8777, 19.0760],
//         [77.1025, 28.7041],
//         [78.2676, 30.0869],
//         [77.1734, 31.1048],
//         [73.4072, 18.7546],
//         [70.9083, 26.9157],
//         [78.0747, 30.4598],
//         [79.4636, 29.3919],
//         [73.0243, 26.2389],
//         [78.0081, 27.1767],
//         [82.9739, 25.3176],
//         [77.5946, 12.9716],
//         [78.4867, 17.3850],
//         [88.3639, 22.5726],
//         [76.7794, 30.7333],
//         [73.8567, 18.5204],
//         [74.8723, 31.6340],
//         [77.0595, 10.0889],
//         [88.2636, 27.0410],
//         [76.6950, 11.4064],
//         [74.7973, 34.0837],
//         [74.8723, 34.0837],
//         [72.5714, 23.0225],
//         [80.9462, 26.8467],
//         [77.3910, 28.5355],
//         [77.3910, 28.4744]
//     ];

//     const listings = initData.data.map((obj, index) => ({
//         ...obj,

//         location: locations[index % locations.length],

//         country: "India",

//         geometry: {
//             type: "Point",
//             coordinate: coordinates[index % coordinates.length]
//         }
//     }));

//     await Listing.insertMany(listings);

//     console.log("Data was initialised");

//     await mongoose.connection.close();

//     console.log("Database connection closed");
// };

// main()
//     .then(() => {
//         return initDB();
//     })
//     .catch((err) => {
//         console.log("Database error:");
//         console.log(err);
//     });