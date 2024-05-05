import mongoose, { Schema } from 'mongoose'

const commentSchema = new mongoose.Schema ({
    IdCourse: { type: Schema.Types.ObjectId, ref: 'course' },
    comments: [{ email: String, name: String, content: String }]
})

const comment = mongoose.model('comment', commentSchema)

const createComment = async (IdCourse, comments) => {
    try {
        const result = await comment.create({ IdCourse, comments })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const findByIdCourse = async (IdCourse) => {
    try {
        const result = await comment.findOne({ IdCourse }).exec()
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const updateComment = async (IdCourse, comments) => {
    try {
        const result = await comment.findOneAndUpdate({ IdCourse }, { comments }, { new: true })
        return result
    } catch (error) { throw new Error(error) }
}

const getComment = async (IdCourse) => {
    try {
        const result = await comment.find(IdCourse).exex()
        return result
    } catch (error) { throw new Error(error) }
}

const deleteComment = async (Id) => {
    try {
        const result = await comment.updateOne({}, { $pull: { comments: { _id: Id } } }, { new: true })
        return result
    } catch (error) { throw new Error(error) }
}

export const commentModel = {
    createComment,
    findByIdCourse,
    updateComment,
    getComment,
    deleteComment
}
