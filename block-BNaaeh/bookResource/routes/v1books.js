var express = require('express');
const Book = require('../models/book');
var router = express.Router();

router.get('/api/books',(req,res,next) => {
    Book.find({},(err,books) => {
        if(err) return next(err)
        res.json({books});
    })
})

// create  book
router.post('/',(req,res,next) => {
    Book.create(req.body,(err,book) => {
        if(err) return next(err)
        res.json({book})
    })
})

// get book by id
router.get('/:id',(req,res,next) => {
    var bookId = req.params.id;
    Book.findById(bookId,(err,book) => {
        if(err) return next(err)
        res.json({book});
    })
})

//update
router.put('/:id',(req,res,next) => {
    var bookId = req.params.id;
    Book.findByIdAndUpdate(bookId,req.body,(err,updatedBook) => {
        if(err) return next(err)
        res.json({updatedBook});
    })
})

//delete
router.delete('/:id',(req,res,next) => {
    var bookId = req.params.id;
    Book.findByIdAndDelete(bookId,(err,book) => {
        if(err) return next(err)
        res.json({book});
    })
})

module.exports = router;