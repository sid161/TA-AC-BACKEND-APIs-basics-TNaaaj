var express = require('express');
var router = express.Router();
var Country = require('../models/country');
var State = require('../models/state');

router.get('/',(req,res,next) => {
    Country.find({})
    .populate("states")
    .populate("neighbouring_countries")
    .exec((err,country) => {
        if(err) return next(err)
        res.json(country);
    })
})

router.get('/population/ascending',(req,res,next) => {
    Country.find({}).sort({population:1})
    .populate('neighbouring_countries')
    .populate('states')
    .exec((err,country) => {
        if(err) return next(err)
        res.json(country);
    })
})

router.post('/new',(req,res,next) => {
    var data = req.body;
    Country.create(data,(err,country) => {
        if(err) return next(err)
        res.json({country});
    })
})

//list of all countries

router.get('/:type',(req,res,next) => {
    var type = req.params.type;
    Country.find({},(err,countries) => {
        if(type === 'all'){
            res.json({countries});
        }
        if(type === 'asc'){
            countries = countries.sort((a,b) => {
                b-a
            })
        }
    })
})

//update
router.put("/:id",(req,res,next) => {
    var id = req.params.id;
    Country.findByIdAndUpdate(id,(err,country) => {
        if(err) return next(err)
        res.status(200).json({country});
    })
})

router.delete('/:id',(req,res,next) => {
    var id = req.params.id;
    Country.findByIdAndDelete(id,(err,country) => {
        if(err) return next(err)
        res.status(200).json({country})
    })
})

// sort by ascending descending order
router.get('/ascending',(req,res,next) => {
    Country.find({})
    .sort({name:1})
    .populate('neigbouring_countries')
    .populate('states')
    .exec((err,country) => {
        if(err) return next(err)
        res.json(country);
    })
})

router.get('/list/religion',(req,res,next) => {
    Country.find({})
    .populate('ethnicity')
    .exec((err,country) => {
        if(err) return next(err)
        res.json(country);
    })
})



module.exports = router;
