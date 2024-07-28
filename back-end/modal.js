const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    NAME:String,
    ROLL:Number,
    FDS:Number,
    CG:Number,
    DELD:Number,
    OOP:Number,
    DM:Number,
    percent:Number
})



// const studentSchema4 = mongoose.Schema({
//     email:String,
//     password:String
// })

module.exports = mongoose.model('SecondYearFirst',studentSchema)


// module.exports =mongoose.model('login',studentSchema4)