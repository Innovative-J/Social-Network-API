const router = require('express').Router();
const thoughtController = require('../controllers/thoughtController');

// GET all thoughts
router.get('/', thoughtController.getAllThoughts);

// POST a new thought
router.post('/', thoughtController.createThought);

// GET a thought by its id
router.get('/:thoughtId', thoughtController.getThoughtById);

// PUT to update a thought by its id
router.put('/:thoughtId', thoughtController.updateThought);

// DELETE to remove a thought by its id
router.delete('/:thoughtId', thoughtController.deleteThought);

// POST to add a reaction to a thought
router.post('/:thoughtId/reactions', thoughtController.createReaction);

// DELETE to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.deleteReaction);

module.exports = router;
