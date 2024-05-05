import mongoose, { Schema } from 'mongoose'

const processSchema = new mongoose.Schema({
    IdUser: { type: Schema.Types.ObjectId, ref: 'user' },
    IdCourses: [{ type: Schema.Types.ObjectId, ref: 'course' }]
})
const process = mongoose.model('process', processSchema)

const createProcess = async (data) => {
    try {
        const result = await process.create(data)
        return result
    } catch (error) { throw new Error(error) }
}

const findProcessByIdUser = async (data) => {
    try {
        const result = await process.findOne({ IdUser: data }).exec()
        return result
    } catch (error) { throw new Error(error) }
}

const updateProcessCourses = async (IdUser, course) => {
    try {
        const result = await process.findOneAndUpdate({ IdUser }, { IdCourses: course }, { new: true })
        return result
    } catch (error) { throw new Error(error) }
}

const getProcessCourses = async (IdUser) => {
    try {
        const result = await process.findOne({ IdUser }).populate('IdCourses').exec()
        return result
    } catch (error) { throw new Error(error) }
}

export const processModel = {
    createProcess,
    findProcessByIdUser,
    updateProcessCourses,
    getProcessCourses
}