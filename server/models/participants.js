const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Adding Participants
const ParticipantsSchema = new Schema({
    first: {type: String, required: true },
    last: {type: String, required: true },
});

// Create model for todo
module.exports = mongoose.model('Participant', ParticipantsSchema);
