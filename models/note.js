var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    name: String,
    shortText: String,
    longText: String,
    user_id: String
});

module.exports = mongoose.model('Note', NoteSchema);
