import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'

const createUser = async (req, res, next) => {
    const correctCondition = Joi.object({
        name: Joi.string().required().min(3).max(50).trim().strict(),
        email: Joi.string().required().min(3).max(50).trim().strict(),
        tel: Joi.string().required().min(10).max(10).trim().strict(),
        password: Joi.string().required().min(3).max(50).trim().strict()
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

export const signupValidation = {
    createUser
}
