import mongoose from "mongoose";

const dummyData = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
})

export const dummydataGenerator = mongoose.model("dummydataGenerator", dummyData)



// const dummyData = new mongoose.Schema([
//   {
//     name: String,
//     salary: Number,
//     language: String,
//     city: String,
//     isManager: Boolean,
//   }
// ])