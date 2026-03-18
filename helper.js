const express= require('express');
const app = express();
const envelopes = require('./envelopes.js');
app.use(express.json());

function getEnvelopeById(id) {
    return envelopes.find(envelope => envelope.id === id)|| null;
}

function getIndexById(id) {
    return envelopes.findIndex(envelope => envelope.id === id)|| -1;
}

function updateBudget(id, amount) {
    const envelope = getEnvelopeById(id);
    if (envelope) {
        envelope.budget -= amount;
    }
}


module.exports = {
    getEnvelopeById,
    getIndexById,
    updateBudget
};