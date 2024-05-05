import { processService } from '../services/processService.js'

const createProcess = async (req, res, next) => {
    try {
        const data = {
            IdUser: req.jwtDecoded.data._id,
            IdCourses: req.params.id
        }
        const process = await processService.createProcess(data)
        res.status(200).json(process)
    } catch (error) {
        next(error)
    }
}

const getProcessCourses = async (req, res, next) => {
    try {
        const result = await processService.getProcessCourses(req.jwtDecoded.data._id)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const processController = {
    createProcess,
    getProcessCourses
}