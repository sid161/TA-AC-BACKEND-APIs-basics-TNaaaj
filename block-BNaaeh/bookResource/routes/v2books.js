var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Comment = require('../models/comment');


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

// add comment
router.post('/:bookId/comment',(req,res,next) => {
    var bookId = req.params.id;
    var data = req.body;
    data.createdBy = req.user.id;
    Comment.create(data,(err,comment) => {
        if(err) return next(err)
        User.findByIdAndUpdate(req.user.id,{$push: {comments: comment.id}},(err,updatedUser) => {
            if(err) return next(err)
            res.json({comment,updatedUser})
        })
    })

})

//  edit comment
router.get("/:commentId/edit",(req,res,next) => {
    var commentId = req.params.id;
    Comment.findById(commentId,(err,comment) => {
        if(err) return next(err)
        res.json({comment});
    })
})

//update
router.put("/comment/:id",(req,res,next) => {
    var id = req.params.id;
    Comment.findByIdAndUpdate(id,req.body,(err,updatedComment) => {
        if(err) return next(err)
        res.status(200).json({updatedComment});
    })
})

//delete comment
router.delete("/comment/:id/delete",(req,res,next) => {
    var id = req.params.id;
    Comment.findByIdAndDelete(id,(err,comment) =>{
        if(err) return next(err)
        res.status(200).json({comment});
    })
})

module.exports = router;