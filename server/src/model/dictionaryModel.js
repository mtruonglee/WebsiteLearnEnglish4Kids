import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    word: String,
    meaning: String,
    topic: String,
    img: String
})
const dictionary = mongoose.model('word', courseSchema)

const getAllWords = async () => {
    try {
        const get = await dictionary.find()
        return get
    } catch (error) { throw new Error(error) }
}

const getWordByTopic = async (topic) => {
    try {
        const result = await dictionary.find({ topic }).exec()
        return result
    } catch (error) { throw new Error(error) }
}

export const dictionaryModel = {
    getAllWords,
    getWordByTopic
}