const mongoose = require('mongoose')

const studentSchemaThird = mongoose.Schema({
    ROLL:Number,
    NAME:String,
    DS:Number,
    WT:Number,
    AI:Number,
    CC:Number,
    INTERN:Number,
    percent:Number
})

module.exports =mongoose.model('THIRDYearSecond',studentSchemaThird)