const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete().put(updateUser);

// /api/users/:userId/assignments
router.route('/:userId/thought').post();

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/thought/:thoughtId').delete(deleteUser);

module.exports = router;
