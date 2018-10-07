const express = require('express');
const router = express.Router();

// Get list of patients
router.get('/', (req, res, next) => {
    try {
        let listOfPats = model.getPatients();
        res.status(200).json({
            message: 'List of patients successfully retrieved.',
            data: listOfPats
        });
    } catch (e) {
        res.status(400).json({
            message: e
        });
    }
})

// Add a patient
// Params: 'name', 'id'
router.post('/', (req, res, next) => {
    try {
        let patientName = req.param('name');
        let patientID = req.param('id');
        model.addPatient(patientName, patientID);
        res.status(200).json({
            message: "Patient successfully added.",
            data: patientName, patientID
    });
    } catch (e) {
        res.status(400).json({
            message: e
    });
    }
})

// Assign medicine to patient
// Params: 'patID', 'medID'
router.put('/', (req, res, next) => {
    try {
        let patientID = req.param('patID');
        let medID = req.param('medID');
        model.assignMedToPatient(patientID, medID)
        res.status(200).json({
          message: 'Medication successfully assigned.'
        });
    } catch (e) {
        res.status(400).json({
            message: e
          });
    }
})

// Delete medicine from patient
// Params: 'patID', 'medID'
router.delete('/', (req, res, next) => {
    try {
        let patientID = req.param('patID');
        let medID = req.param('medID');
        model.removeMedFromPatient(patientID, medID)
        res.status(200).json({
          message: 'Medication successfully unassigned.'
        });
    } catch (e) {
        res.status(400).json({
            message: e
          });
    }
})

module.exports = router;