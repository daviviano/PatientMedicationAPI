const Patient = require('./patient');
const Medication = require('./medication');

class PatientMedicationModel {
    
    constructor() {
        this.listOfPatients = [];
        this.listOfMedications = [];
    }
    
    // Get list of patients.
    getPatients() {
        return this.listOfPatients;
    }

    // Get list of medication
    getMeds() {
        return this.listOfMedications;
    }
    
    // Adds medication to list of medication.
    // MedicationID must be unique.
    // Does not check name, as many companies make drugs with 
    // same name (E.G. 'Asprin' may be made my multiple companies - different ID's)
    addMedication(name, id) {
        this.listOfMedications.forEach(function(m) {
            if (m.id === id) {
                throw "Medication ID already in use."
            }
        })
        let newMedication = new Medication(name, id);
        this.listOfMedications.push(newMedication);
    }
    
    // Adds new Patient to list of patients.
    // PatientID must be unique to differtiate patients with same name.
    addPatient(name, id) {
        this.listOfPatients.forEach(function(p) {
            if (p.id === id) {
                throw "Patient ID already in use."
            }
        })
        let newPatient = new Patient(name, id);
        this.listOfPatients.push(newPatient);
    }
    
    // Assign medicine to patient if medicine and patient exist, and patient
    // is not already assigned this medicine.
    assignMedToPatient(patID, medID) {
        let med;
        let pat;
        if (this.doesMedExist(medID)) {
            med = this.listOfMedications.find(function(m) {
                return m.id === medID;
            })
        } else {
            throw 'Medicine does not exist.';
        }

        if (this.doesPatientExist(patID)) {
            pat = this.listOfPatients.find(function(p) {
                return p.id === patID;
            })
        } else {
            throw 'Patient does not exist.';
        }
            
       if (pat.isAssignedMed(med)) {
           throw 'Patient is already assigned medication.';
       } else {
           pat.assignMed(med);
       }
            
    }

    // Unassign a medication from a patient.
    // Throw error if patient or medicine doesn't exist
    // or if patient is not assigned given medicine.
    removeMedFromPatient(patID, medID) {
        let pat;
        let med;
        if (this.doesMedExist(medID)) {
            med = this.listOfMedications.find(function(m) {
                return m.id === medID;
            })
        } else {
            throw 'Medicine does not exist.';
        }

        if (this.doesPatientExist(patID)) {
            pat = this.listOfPatients.find(function(p) {
                return p.id === patID;
            })
        } else {
            throw 'Patient does not exist.';
        }
            
        if (pat.isAssignedMed(med)) {
            pat.removeMed(med);
        } else {
            throw 'Cannot remove unassigned medicine.';
        }            
    }
    
    // Checks if given medicine is in available list of medicines.
    doesMedExist(medID) {
        return this.listOfMedications.some(function(m) {
            return m.id === medID;
        })
    }

    // Checks if given patients exists in list.
    doesPatientExist(patID) {
        return this.listOfPatients.some(function(p) {
            return p.id === patID;
        })
    }
}

module.exports = PatientMedicationModel;