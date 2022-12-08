const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  updateThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,


} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api//:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtid/reaction
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
