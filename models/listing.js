const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const ListingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
      description:String,
      image:{
      url:String,
      filename:String,
      },
//        url: {
//     type: String,
//     default: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//     set: (v) =>
//         v === ""
//             ? "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
//             : v,
// },
    // },
      price:Number,
      location:String,
      country : String,
      reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
      ],
      owner: 
        {
            type:Schema.Types.ObjectId,
            ref:"User",
        },
        geometry: {
            type: {
                type:String,
                enum:['Point'],
                required:true
            },
            coordinate:{
                type:[Number],
                required:true
            }
        }
    

});
ListingSchema.post("findOneAndDelete",async (listing) => {
    if(listing) {
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});
const Listing = mongoose.model("Listing",ListingSchema);
module.exports = Listing;