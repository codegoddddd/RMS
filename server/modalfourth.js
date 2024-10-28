const mongoose = require('mongoose')

const studentShemaFourth = mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    password : String
})

module.exports = mongoose.model('studentdetails',studentShemaFourth)