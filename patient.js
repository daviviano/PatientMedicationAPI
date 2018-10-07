class Patient {
    constructor(name, id) {
         this.name = name;
         this.id = id;
         this.assignedMeds = [];
    }

    // Assign the given medication to this patient.
    assignMed(medication) {
        this.assignedMeds.push(medication);
    }

    // Returns the list of assigned medications to this patient.
    getAssignedMeds() {
        return this.assignedMeds;
    }

    // Remove the given medication from this patient.
    removeMed(medication) {
        let newListOfMeds = this.assignedMeds.filter(function(m) {
            return m.id !== medication.id;
        })
        this.assignedMeds = newListOfMeds;
    }

    // Checks if the given medication is assigned to this patient.
    isAssignedMed(medication) {
        return this.assignedMeds.some(function(m) {
           return m.id === medication.id    
        })
    }
}

module.exports = Patient;