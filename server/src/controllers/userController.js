import { StatusCodes } from 'http-status-codes'
import { userService } from '../services/userService.js'

const createUser = async (req, res, next) => {
    try {
        //Dieu huong sang service
        const createUser = await userService.createUser(req.body)
        //Lay kq tra ve client
        res.status(StatusCodes.CREATED).json(createUser)
    } catch (error) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        //Dieu huong sang service
        const getUser = await userService.getUser(req.jwtDecoded.data._id)

        //Lay kq tra ve client
        res.status(StatusCodes.OK).json(getUser)
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const accessToken = await userService.login(req.body)
        res.status(StatusCodes.OK).json(accessToken)
    } catch (error) {
        next(error)
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const result = await userService.getAllUser()
        res.status(StatusCodes.OK).json(result)
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const update = await userService.updateUser(req.jwtDecoded.data._id, req.body)
        res.status(StatusCodes.OK).json(update)
    } catch (error) {
        next(error)
    }
}

export const userController = {
    createUser,
    getUser,
    login,
    getAllUser,
    updateUser
}