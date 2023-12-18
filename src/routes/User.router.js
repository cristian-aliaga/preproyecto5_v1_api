const express = require('express')
const auth = require('../middlewares/auth')

router = express.Router(),
    {
        signUp,
        loginUser,
        getUsers,
        updateUser,
        deleteUser
    } = require('../controllers/User.controoler')

router.post('/signup', signUp)
router.post('/login', loginUser)
// router.get('/', auth,  getUsers)
router.get('/',  getUsers)
router.put('/', updateUser)
router.delete('/', deleteUser)

module.exports = router;