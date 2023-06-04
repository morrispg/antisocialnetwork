const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/Thought
router.route('/').get().post(createThought);

// /api/Thought/:ThoughtId
router
  .route('/:ThoughtId')
  .get()
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
