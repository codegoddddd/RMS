const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI || "mongodb+srv://admin:pass@123@cluster0.vil7r7h.mongodb.net/")
  .then(console.log("MongoDB Connected"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());

const route = require("./route");
const { loginUser } = require("./controllerlogin"); // Added this line for login

app.use("/abc", route);
app.post("/abc/login", loginUser); // Added this line for login

app.get("/", (req, res) => {
  res.send("Running at Port 8000");
});

app.listen(8000, () => console.log("Running at LocalHost 8000"));

// const express = require('express')
// const app = express()
// // const {json} = require('json')
// const mongoose = require('mongoose')
// const cors = require('cors')

// mongoose.connect("mongodb://localhost:27017/")
// .then(console.log("MongoDB connected"))
// .catch((err)=>{
//     console.log(err)
// })

// app.use(cors())
// app.use(express.json())
// const route = require('./route')
// app.use('/abc',route)

// app.get(('/'),(req,res)=>{
//     res.send("Running at port 8000")
// })

// app.listen(8000,()=>console.log("Listening at port 8000"))
