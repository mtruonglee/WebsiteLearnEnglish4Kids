import express from 'express'
import { courseController } from '../../controllers/courseController.js'
import { commentController } from '../../controllers/commentController.js'
import { courseValidation } from '../../validations/courseValidation.js'
import { authMiddleware } from '../../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/')
    .get((req, res) => {
        res.status(200).json({ message: 'course' })
    })

router.route('/deleteComment/:id')
    .post(commentController.deleteComment)

router.route('/get')
    .get(courseController.getCourse)

router.route('/get/:id')
    .get(courseController.getCourseById)

router.route('/delete/:id')
    .delete(courseController.deleteCourse)

router.route('/comment/:id')
    .get(commentController.getComment)

router.use(authMiddleware.isAuth)

router.route('/update/:id')
    .put(courseController.updateCourse)

router.route('/create')
    .post(courseValidation.createCourse, courseController.createCourse)

router.route('/create-comment')
    .post(commentController.createComment)

export default router
