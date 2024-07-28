const mongoose = require('mongoose')

const studentSchemaSecond = mongoose.Schema({
    ROLL:Number,
    NAME:String,
    DBMS:Number,
    SPOS:Number,
    CNS:Number,
    TOC:Number,
    SPM:Number,
    percent:Number
})


module.exports =mongoose.model('THIRDYearFirst',studentSchemaSecond)