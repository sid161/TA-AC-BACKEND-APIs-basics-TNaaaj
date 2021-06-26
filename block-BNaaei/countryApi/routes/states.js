var express = require('express');
var router = express.Router()

router.get('/',(req,res,next) => {
    State.find({})
    .populate(neighbouring_countries)
    .exec((err,countries) => {
        if(err) return next(err)
        res.json(countries);
    })

// create new state

router.post('/new',(req,res,next) => {
    State.create(req.body,(err,state) => {
        if(err) return next(err);
        res.json(sate);

    } )
})

router.get("/sort/population",(req,res,next) => {
    State.find({})
    .sort({population:1})
    .exec((err,state) => {
        if(err) return next(err)
        res.json(state);
    })
})


router.post("/:id/update",(req,res,next) => {
    var stateId = req.params.id;
    State.findByIdandUpdate(stateId,req.body,(err,updatestate) => {
        if(err) return next(err)
        res.json(updatedState);
    })
    
})

// delete state
router.delete("/:id",(req,res,next) =>{
    var id = req.params.id;
    State.findByIdAndDelete(id,(err,state) => {
        if(err) return next(err)
        Country.findByIdAndUpdate(state.country, {$pull : {$state:state.id}})
        })
})
module.exports = router;