/* eslint-disable no-useless-catch */
import { scoreModel } from '../model/scoreModel.js'

const createScore = async (IdUser) => {
    try {
        const result = await scoreModel.find(IdUser)
        if (result.length === 0) {
            const create = await scoreModel.createScore(IdUser)
            return create
        }
        return result
    } catch (error) { throw error }
}

const updateScore = async (IdUser, data) => {
    try {
        const result = await scoreModel.findAndUpdate(IdUser, data)
        return result
    } catch (error) { throw error }
}

const getScore = async (IdUser) => {
    try {
        const result = await scoreModel.find(IdUser)
        return result
    } catch (error) {
        throw error
    }
}

export const scoreService = {
    createScore,
    getScore,
    updateScore
}