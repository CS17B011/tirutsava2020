const express = require('express');
const c3Router = express.Router();
const C3 = require('../model/C3');

// READ
c3Router.get('/', (req, res) => {
    C3.find({}, (err, response) => {
        if (err) res.status(500).json({
            message : "Unable to get"
        });
        else res.status(200).json({response});
    })
})

// POST
c3Router.post('/', (req, res) => {
    const c3 = new C3(req.body);
    c3.save((err, response) => {
        if (err) res.status(500).json({
            message : "Unable to add C3"
        })
        else res.status(200).json({
            message : "successfully added c3"
        })
    })
})

module.exports = c3Router;

/* {
	"id" : 1,
	"N" : 6,
	"M" : 6,
	"binaryArray" : "1000101111111010101011111010001010000",
	"questions" : ["Bollywood star appear in Sultan", "Bollywood makes makes lots of movie", "Saki Saki song item girl", "Actor in Krantiveer as well as Actor in Bulandi", "Yeh 2.5 kg ka haath hai kehne wale actor ka naam"]
} */