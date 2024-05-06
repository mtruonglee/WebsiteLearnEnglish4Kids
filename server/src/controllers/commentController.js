import { commentService } from '../services/commentService.js'
import { StatusCodes } from 'http-status-codes'

const createComment = async (req, res, next) => {
    const comment = {
        email: req.jwtDecoded.data.email,
        name: req.jwtDecoded.data.name,
        content: req.body.content
    }
    try {
        const result = await commentService.createComment(req.body.CourseId, comment)
        res.status(StatusCodes.CREATED).json(result)
    } catch (error) {
        next(error)
    }
}

const getComment = async (req, res, next) => {
    try {
        const result = await commentService.getComment(req.params.id)
        res.status(StatusCodes.OK).json(result)
    } catch (error) {
        next(error)
    }
}

const deleteComment = async (req, res, next) => {
    try {
        const result = await commentService.deleteComment(req.params.id, req.body.CourseId)
        res.status(StatusCodes.OK).json(result)
    } catch (error) {
        next(error)
    }
}

export const commentController = {
    createComment,
    getComment,
    deleteComment
}