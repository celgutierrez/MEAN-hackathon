var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    name: String,
    shortText: String,
    longText: String,

});

module.exports = mongoose.model('Note', NoteSchema);
