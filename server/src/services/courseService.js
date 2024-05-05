/* eslint-disable no-useless-catch */
import { courseModel } from '../model/courseModel.js'

const createCourse = async (reqBody) => {
    try {
        const course = await courseModel.createCourse(reqBody)

        return course
    } catch (error) {
        throw error
    }
}

const getCourse = async () => {
    try {
        const course = await courseModel.getCourse()
        return course
    } catch (error) {
        throw error
    }
}

const getCourseById = async (id) => {
    try {
        const course = await courseModel.getCourseById(id)
        return course
    } catch (error) {
        throw error
    }
}

const updateCourse = async (id, data) => {
    try {
        const update = await courseModel.updateCourse(id, data)
        return update
    } catch (error) {
        throw error
    }
}

const deleteCourse = async (id) => {
    try {
        await courseModel.deleteCourse(id)
    } catch (error) {
        throw error
    }
}

export const courseService = {
    createCourse,
    getCourse,
    getCourseById,
    updateCourse,
    deleteCourse
}