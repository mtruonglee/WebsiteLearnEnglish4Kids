import { scoreService } from '../services/scoreService.js'

const createScore = async (req, res, next) => {
    try {
        // const { accessToken, ...data } = req.body
        const result = await scoreService.createScore(req.jwtDecoded.data._id)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const updateScore = async (req, res, next) => {
    try {
        const { accessToken, ...data } = req.body
        const result = await scoreService.updateScore(req.jwtDecoded.data._id, data)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const getScore = async (req, res, next) => {
    try {
        const result = await scoreService.getScore(req.jwtDecoded.data._id)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const scoreController = {
    createScore,
    updateScore,
    getScore
}