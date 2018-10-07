const express = require('express');
const app = express();

const patientRoute = require('./api/routes/patientRoute');
const medicationRoute = require('./api/routes/medicationRoute');

app.use('/patient', patientRoute);
app.use('/medication', medicationRoute);

module.exports = app;
