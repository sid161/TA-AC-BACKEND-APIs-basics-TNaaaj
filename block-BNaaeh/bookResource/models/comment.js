var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema

var commentSchema = new Schema({
    title:String,
    likes:String,
    createdBy:{type:Schema.Types.ObjectId,ref:'User'},
    Book:{type:Schema.Types.ObjectId,ref:'Book'}
})

var Comment = mongoose.model('Book',bookSchema);
module.exports = Comment;