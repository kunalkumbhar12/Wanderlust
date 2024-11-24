const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("Connected to DB");
})
.catch((err) =>{
    console.log(err)
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "673750d7ae722584612a264e"}));
    await Listing.insertMany(initData.data);
    console.log("Data was intialized");
}

initDB();