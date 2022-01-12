const express = require('express');
const router = express.Router();
const car = require('../models/car');
module.exports = router;

//retrieving cars
router.get('/cars', (req, res, next)=>{
    car.find(function(err, cars){
        res.json(cars);
    })
});

//add cars
router.post('/cars',(req, res, next)=>{
    let newCar = new car({
        code : req.body.code,
        matricule : req.body.matricule,
        model : req.body.model,
        prix : req.body.prix,
        categorie : req.body.categorie
    });
    newCar.save((err , car) => {
        if (err) { 
            res.json({msg: 'failed to add the car '} + err);
        }
        else{
            res.json({msg: 'Car added successfully'});
        }
    });
});