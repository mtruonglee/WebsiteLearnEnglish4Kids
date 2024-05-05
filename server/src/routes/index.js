import express from 'express'
import course from './course/index.js'
import user from './user/index.js'
import word from './word/index.js'
import process from './process/index.js'

const router = express.Router()

router.route('/')
    .get((req, res) => {
        res.status(200).json({ message: 'home' })
    })

router.use('/course', course)
router.use('/user', user)
router.use('/word', word)
router.use('/process', process)

export default router
