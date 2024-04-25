const express = require('express');
const router = express.Router();
const Participants = require('../models/participants');

router.get('/participants', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Participants.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/participants', (req, res, next) => {
   
  if (req.body.action) {
    Participants.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
  
});

router.delete('/participants/:id', (req, res, next) => {
    Participants.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;