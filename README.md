# PatientMedicationAPI

# INSTALLATION INSTRUCTIONS:
1) Ensure NodeJS is installed on local machine. 
2) Navigate to directory containing source files and 'package.json' files
   and run 'npm install' to install all dependencies.

# STARTUP INSTRUCTIONS:
To start the server, run 'node server.js'.  This will create a server on the
localhost (3000) port.

# TESTING INSTRUCTIONS:
To test, I used Postman to send HTTP requests to the server.

1) To add a patient: POST 'localhost:3000/patient?name=<name>&id=<id>'
   Replace <name> with string of patient name.
   Replace <id> with int of patient id.  ID's must be unique.
   
2) To add a medicine: POST 'localhost:3000/medication?name=<name>&id=<id>'
   Replace <name> with string of medicine name.
   Replace <id> with int of medicine id.  ID's must be unique.
   
3) To get the list of patients: GET 'localhost:3000/patient'

4) To get the list of available medicine: GET 'localhost:3000/medication'

5) To assign a medication to a patient: PUT 'localhost:3000/patient?patID=<patID>&medID=<medID>'
   Replace <patID> with int of patient id.
   Replace <medID> with int of medication id.
   
5) To remove a medication from a patient: DELETE 'localhost:3000/patient?patID=<patID>&medID=<medID>'
   Replace <patID> with int of patient id.
   Replace <medID> with int of medication id.
   
