import mongoose from 'mongoose'

// define collection (name & schema)
const courseSchema = new mongoose.Schema({
    name: { type: String, max: 255, require: true },
    author: { type: String, max:255, require: true },
    description: { type: String, default: null },
    img: { type: String, require: true },
    topic: { type: String, require: true },
    lesson: { type: Array, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null }
})
const course = mongoose.model('course', courseSchema)

const createCourse = async (data) => {
    try {
        const create = await course.create(data)
        return create
    } catch (error) { throw new Error(error) }
}

const getCourse = async () => {
    try {
        const get = await course.find()
        return get
    } catch (error) { throw new Error(error) }
}

const getCourseById = async (id) => {
    try {
        const get = await course.findById(id)
        return get
    } catch (error) { throw new Error(error) }
}

const updateCourse = async (id, data) => {
    try {
        const update = await course.findByIdAndUpdate(id, data, { new: true })
        return update
    } catch (error) { throw new Error(error) }
}

const deleteCourse = async (id) => {
    try {
        await course.findByIdAndDelete(id)
    } catch (error) { throw new Error(error) }
}

export const courseModel = {
    createCourse,
    getCourse,
    getCourseById,
    updateCourse,
    deleteCourse
}