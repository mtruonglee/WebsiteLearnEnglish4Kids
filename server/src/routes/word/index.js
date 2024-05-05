import express from 'express'
import { dictionaryController } from '../../controllers/dictionaryController.js'

const router = express.Router()

router.route('/')
    .get(dictionaryController.getAllWords)

router.route('/getByTopic')
    .post(dictionaryController.getWordByTopic)

export default router

