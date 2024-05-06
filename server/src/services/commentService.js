/* eslint-disable no-useless-catch */
import { commentModel } from '../model/commentModel.js'

const createComment = async (IdCourse, comment) => {
    try {
        const result = await commentModel.findByIdCourse(IdCourse)
        if (result) {
            result.comments.unshift(comment)
            await commentModel.updateComment(IdCourse, result.comments)
            return
        }
        await commentModel.createComment(IdCourse, comment)
        return result
    } catch (error) { throw error }
}

const getComment = async (IdCourse) => {
    try {
        const result = await commentModel.findByIdCourse(IdCourse)
        return result
    } catch (error) { throw error }
}

const deleteComment = async (Id, IdCourse) => {
    try {
        const result = await commentModel.deleteComment(Id, IdCourse)
        return result
    } catch (error) { throw error }
}

export const commentService = {
    createComment,
    getComment,
    deleteComment
}