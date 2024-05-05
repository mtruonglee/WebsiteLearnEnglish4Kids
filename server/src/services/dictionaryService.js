/* eslint-disable no-useless-catch */

import { dictionaryModel } from '../model/dictionaryModel.js'

const getAllWords = async () => {

    try {
        const allWords = await dictionaryModel.getAllWords()
        return allWords
    } catch (error) {
        throw error
    }
}

const getWordByTopic = async (topic) => {
    try {
        const result = await dictionaryModel.getWordByTopic(topic)
        return result
    } catch (error) {
        throw error
    }
}

export const dictionaryService = {
    getAllWords,
    getWordByTopic
}