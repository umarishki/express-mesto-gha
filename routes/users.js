const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUserInfo,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/me', createUser);
router.patch('/me', updateUserInfo);
router.patch('/avatar', updateUserAvatar);

module.exports = router;
