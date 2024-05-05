import { StatusCodes } from 'http-status-codes'
import { courseService } from '../services/courseService.js'

const createCourse = async (req, res, next) => {
    try {
        //Dieu huong sang service
        if (req.jwtDecoded.data.role === 'admin') {
            const createCourse = await courseService.createCourse(req.body)
            //Lay kq tra ve client
            res.status(StatusCodes.CREATED).json(createCourse)
        }
        else throw new Error('Error!')
    } catch (error) {
        next(error)
    }
}

const getCourse = async (req, res, next) => {
    try {
        //Dieu huong sang service
        const getUser = await courseService.getCourse()

        //Lay kq tra ve client
        res.status(StatusCodes.OK).json(getUser)
    } catch (error) {
        next(error)
    }
}

const getCourseById = async (req, res, next) => {
    try {
        //Dieu huong sang service
        const getCourse = await courseService.getCourseById(req.params.id)

        //Lay kq tra ve client
        res.status(StatusCodes.OK).json(getCourse)
    } catch (error) {
        next(error)
    }
}

const updateCourse = async (req, res, next) => {
    try {
        const update = await courseService.updateCourse(req.params.id, req.body)
        res.status(StatusCodes.OK).json(update)
    } catch (error) {
        next(error)
    }
}

const deleteCourse = async (req, res, next) => {
    try {
        await courseService.deleteCourse(req.params.id)
        res.status(StatusCodes.OK).json({ message: 'success' })
    } catch (error) {
        next(error)
    }
}

export const courseController = {
    createCourse,
    getCourse,
    getCourseById,
    updateCourse,
    deleteCourse
}