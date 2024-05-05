import express from 'express'
import { signupValidation } from '../../validations/userValidation.js'
import { userController } from '../../controllers/userController.js'
import { scoreController } from '../../controllers/scoreController.js'
import { authMiddleware } from '../../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/sign-up')
    .post(signupValidation.createUser, userController.createUser)

router.post('/login', userController.login)

router.use(authMiddleware.isAuth)

router.post('/score', scoreController.createScore)

router.post('/getScore', scoreController.getScore)

router.post('/updateScore', scoreController.updateScore)

router.route('/getAllUser')
    .post(userController.getAllUser)

router.route('/infor')
    .post(userController.getUser)

router.route('/update')
    .post(userController.updateUser)

export default router