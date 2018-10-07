const express = require('express');
const router = express.Router();

// Add medicine to available medicines\
// Params: 'name', 'id'
router.post('/', (req, res, next) => {
    try {
        let medName = req.param('name');
        let medID = req.param('id');
        model.addMedication(medName, medID);
        res.status(200).json({
            message: "Medication successfully added.",
            data: medName, medID
    });
    } catch (e) {
        console.log(e);
        res.status(400).json({
        message: e,
        });
    }
    
});

// Get list of available medicines
router.get('/', (req, res, next) => {
    try {
        let listOfMeds = model.getMeds();
        res.status(200).json({
            message: 'List of medication successfully retrieved.',
            data: listOfMeds
        });
    } catch (e) {
        res.status(400).json({
        message: e
        });
    }
})

module.exports = router;