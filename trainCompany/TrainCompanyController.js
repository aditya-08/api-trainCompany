var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var TrainCompany = require('./TrainCompany');

// CREATES A NEW trainCompany
router.post('/', function (req, res) {
    TrainCompany.create({
        tocCode: req.body.tocCode,
        tocName: req.body.tocName,
        delayedBy: req.body.delayedBy,
        claimBy: req.body.claimBy,
        TwitterAccount: req.body.TwitterAccount,
        claimUrl: req.body.claimUrl,
        iconImage: req.body.iconImage
    },
        function (err, trainCompany) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(trainCompany);
        });
});

// RETURNS ALL THE trainCompany IN THE DATABASE
router.get('/', function (req, res) {
    TrainCompany.find({}, function (err, trainCompany) {
        if (err) return res.status(500).send("There was a problem finding the trainCompany.");
        res.status(200).send(trainCompany);
    });
});

// GETS A SINGLE trainCompany FROM THE DATABASE
router.get('/:id', function (req, trainCompany) {
    TrainCompany.findById(req.params.id, function (err, trainCompany) {
        if (err) return res.status(500).send("There was a problem finding the trainCompany.");
        if (!trainCompany) return res.status(404).send("No trainCompany found.");
        res.status(200).send(trainCompany);
    });
});

// DELETES A trainCompany FROM THE DATABASE
router.delete('/:id', function (req, res) {
    TrainCompany.findByIdAndRemove(req.params.id, function (err, trainCompany) {
        if (err) return res.status(500).send("There was a problem deleting the trainCompany.");
        res.status(200).send("trainCompany: " + trainCompany.name + " was deleted.");
    });
});

// UPDATES A SINGLE trainCompany IN THE DATABASE
router.put('/:id', function (req, res) {
    TrainCompany.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, trainCompany) {
        if (err) return res.status(500).send("There was a problem updating the trainCompany.");
        res.status(200).send(trainCompany);
    });
});


module.exports = router;