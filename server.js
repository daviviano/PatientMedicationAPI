const http = require('http');
const app = require('./app');
const model = require('./PatientMedicationModel');

const port = 3000;

const server = http.createServer(app);

global.model = new model;

server.listen(port);
