var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema

var userSchema = new Schema({
   name:String,
   email:String,
   password:String,
   books:{type:Schema.Types.ObjectId,ref:'Book'},
   comments:{type:Schema.Types.ObjectId,ref:"Comment"}
})

var User = mongoose.model('User',userSchema);
module.exports = User;