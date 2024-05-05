import mongoose, { Schema } from 'mongoose'

const scoreSchema = new mongoose.Schema({
    IdUser: { type: Schema.Types.ObjectId, ref: 'user' },
    All: { type: Number, default: 0 },
    Action: { type: Number, default: 0 },
    Animal: { type: Number, default: 0 },
    Body: { type: Number, default: 0 },
    Color: { type: Number, default: 0 },
    House: { type: Number, default: 0 },
    Family: { type: Number, default: 0 },
    Feeling: { type: Number, default: 0 },
    Food: { type: Number, default: 0 },
    Fruit: { type: Number, default: 0 },
    Job: { type: Number, default: 0 },
    Shapes: { type: Number, default: 0 },
    School: { type: Number, default: 0 },
    Transport: { type: Number, default: 0 },
    Weather: { type: Number, default: 0 }
})

const score = mongoose.model('score', scoreSchema)

const createScore = async (IdUser) => {
    try {
        const result = await score.create({ IdUser })
        return result
    } catch (error) { throw new Error(error) }
}

const findAndUpdate = async (IdUser, data) => {
    try {
        const result = await score.findOneAndUpdate({ IdUser }, data, { new: true })
        return result
    } catch (error) { throw new Error(error) }
}

const find = async (IdUser) => {
    try {
        const result = await score.find({ IdUser }).exec()
        return result
    } catch (error) { throw new Error(error) }
}

export const scoreModel = {
    createScore,
    findAndUpdate,
    find
}