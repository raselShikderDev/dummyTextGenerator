import express from "express";
import mongoose from "mongoose";
import ejs from "ejs";
import { dummydataGenerator } from "./models/dummyGenarator.js";

const app = express();
const port = 3000;
await mongoose.connect("mongodb://localhost:27017");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async(req, res) => {
  const dummyText = [
    {
      name: "Alice Johnson",
      salary: 75000,
      language: "Python",
      city: "New York",
      isManager: true,
    },
    {
      name: "Michael Smith",
      salary: 55000,
      language: "JavaScript",
      city: "San Francisco",
      isManager: false,
    },
    {
      name: "Emily Davis",
      salary: 68000,
      language: "Java",
      city: "Seattle",
      isManager: true,
    },
    {
      name: "David Brown",
      salary: 45000,
      language: "C#",
      city: "Chicago",
      isManager: false,
    },
    {
      name: "Sophia Wilson",
      salary: 72000,
      language: "Ruby",
      city: "Boston",
      isManager: true,
    },
    {
      name: "James Anderson",
      salary: 52000,
      language: "Go",
      city: "Austin",
      isManager: false,
    },
    {
      name: "Olivia Martinez",
      salary: 61000,
      language: "PHP",
      city: "Miami",
      isManager: false,
    },
    {
      name: "William Taylor",
      salary: 80000,
      language: "C++",
      city: "Denver",
      isManager: true,
    },
    {
      name: "Isabella Thomas",
      salary: 49000,
      language: "Swift",
      city: "Los Angeles",
      isManager: false,
    },
    {
      name: "Liam Moore",
      salary: 67000,
      language: "Kotlin",
      city: "Atlanta",
      isManager: true,
    },
  ];
  try {
     await dummydataGenerator.deleteMany({salary:{$lt:100000}});
    console.log("deleted Data")
    await dummydataGenerator.insertMany(dummyText);
    console.log("Inserted Data")
    res.send({ message: "Database reset and dummy data inserted." });
  } catch (error) {
    throw new Error("Faild to Update data");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


