var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema

var countrySchema = new Schema({
    name:String,
    states:[{type:Schema.Types.ObjectId,ref:"State"}],
    continent:String,
    population:Number,
    ethnicity:String,
    neighbouring_countries:[{type:Schema.Types.ObjectId,ref:"Country"}],
    area:Number
})

var Country = mongoose.model('Country',countrySchema)

module.exports = Country;

// name
// states -> ObjectIds
// continent
// population
// ethnicity(religions) -> String
// neighbouring_countires -> ObjectIds of countires
// area