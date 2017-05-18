var express = require('express');
var Recipe = require('../models/note');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        Note.find(function(err, notes) {
            if (err) return res.status(500).send(err);

            return res.send(notes);
        });
    })
    .post(function(req, res) {
        Note.create(req.body, function(err, note) {
            if (err) return res.status(500).send(err);

            return res.send(note);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        Note.findById(req.params.id, function(err, note) {
            if (err) return res.status(500).send(err);

            return res.send(note);
        });
    })
    .put(function(req, res) {
        Note.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    })
    .delete(function(req, res) {
        Note.findByIdAndRemove(req.params.id, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    });

module.exports = router;
