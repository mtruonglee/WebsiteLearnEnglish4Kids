/* eslint-disable no-useless-catch */
import { processModel } from '../model/processModel.js'

const createProcess = async (data) => {
    try {
        const result = await processModel.findProcessByIdUser(data.IdUser)
        if (result) {
            if (!result.IdCourses.includes(data.IdCourses)) {
                result.IdCourses.push(data.IdCourses)
                await processModel.updateProcessCourses(data.IdUser, result.IdCourses)
            }
            return 'nononono'
        }
        await processModel.createProcess(data)
        return result
    } catch (error) { throw error }
}

const getProcessCourses = async (IdUser) => {
    try {
        const result = await processModel.getProcessCourses(IdUser)
        return result
    } catch (error) {
        throw error
    }
}

export const processService = {
    createProcess,
    getProcessCourses
}