import express from 'express'
import { authMiddleware } from '../../middlewares/authMiddleware.js'
import { processController } from '../../controllers/processController.js'

const router = express.Router()

router.use(authMiddleware.isAuth)

router.route('/getProcessCourses')
    .post(processController.getProcessCourses)

router.route('/:id')
    .post(processController.createProcess)

export default router
