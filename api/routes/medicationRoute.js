const express = require('express');
const router = express.Router();

// Add medicine to available medication.
// Params: 'name', 'id'
router.post('/', (req, res, next) => {
    try {
        let medName = req.query.name;
        let medID = req.query.id;
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

// Get list of available medication.
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