const express = require('express');
const router = express.Router();

const Participants = require('../models/participants');

router.get('/participants', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Participants.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});





router.post('/participants', async (request, response) => {
   
  // if (req.body) {
  //   Participants.create(req.body)
  //     .then((data) => res.json(data))
  //     .catch(next);
  // } else {
  //   res.json({
  //     error: 'The input field is empty',
  //   });
  // }

  const participant = new Participants({
		first: req.body.first,
		last: req.body.last,
	})

  try {
    await participant.save();
    response.send(participant);
  } catch (error) {
    response.status(500).send(error);
  }
  
});






router.delete('/participants/:id', (req, res, next) => {
    Participants.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;