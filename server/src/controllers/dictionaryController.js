import { StatusCodes } from 'http-status-codes'
import { dictionaryService } from '../services/dictionaryService.js'

const getAllWords = async (req, res, next) => {
    try {
        //Dieu huong sang service
        const getUser = await dictionaryService.getAllWords()

        //Lay kq tra ve client
        res.status(StatusCodes.OK).json(getUser)
    } catch (error) {
        next(error)
    }
}

const getWordByTopic = async (req, res, next) => {
    try {
        const result = await dictionaryService.getWordByTopic(req.body.topic)
        res.status(StatusCodes.OK).json(result)
    } catch (error) {
        next(error)
    }
}

export const dictionaryController = {
    getAllWords,
    getWordByTopic
}