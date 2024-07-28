
const mongoose = require('mongoose')

const studentSchemaFirst = mongoose.Schema({
    NAME:String,
    ROLL:Number,
    DSA:Number,
    SE:Number,
    PPL:Number,
    MP:Number,
    MII:Number,
    percent:Number
})

module.exports =mongoose.model('secondYearSecond',studentSchemaFirst)