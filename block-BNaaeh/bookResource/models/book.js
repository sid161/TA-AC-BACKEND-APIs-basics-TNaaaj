var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    name:String,
    description:String,
    author:String,
    createdBy:{type:Schema.Types.ObjectId,ref:"User"},
    comments:[{type:Schema.Types.ObjectId,ref:"Comment"}]
})

var Book = mongoose.model('Book',bookSchema);
module.exports = Book;