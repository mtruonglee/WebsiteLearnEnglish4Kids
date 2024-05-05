import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'

const createCourse = async (req, res, next) => {
    const correctCondition = Joi.object({
        name: Joi.string().required().trim().strict(),
        author: Joi.string().required().trim().strict(),
        img: Joi.string().required().trim().strict(),
        lesson: Joi.array().items(Joi.object()),
        topic: Joi.string().required().trim().strict(),
        description: Joi.string().required().trim().strict(),
        accessToken: Joi.string().required().trim().strict()
    })

    try {
        await correctCondition.validateAsync(req.body, { abortEarly: false })
        next()
    } catch (error) {
        const errorMessage = new Error(error).message
        const costomError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)

        next(costomError)
    }
}

export const courseValidation = {
    createCourse
}