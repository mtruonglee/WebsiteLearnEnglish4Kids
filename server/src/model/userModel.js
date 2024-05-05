import mongoose from 'mongoose'

// define collection (name & schema)
const userSchema = new mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    tel: { type: String, default: null },
    password: { type: String, required: true },
    slug: { type: String, default: null },
    role: { type: String, default: 'customer' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null }
})
const user = mongoose.model('user', userSchema)

const createNew = async (data) => {
    try {
        const create = await user.create(data)
        return create
    } catch (error) { throw new Error(error) }
}

const getAllUser = async () => {
    try {
        const result = await user.find().exec()
        return result
    } catch (error) { throw new Error(error) }
}

const getUser = async (id) => {
    try {
        const get = await user.findById(id).exec()
        return get
    } catch (error) { throw new Error(error) }
}

const getUserByEmail = async (email) => {
    try {
        const data = await user.findOne({ email }, 'name email password role').exec()
        return data
    } catch (error) { throw new Error(error) }
}

const updateUser = async (id, data) => {
    try {
        const update = await user.findByIdAndUpdate(id, data, { new: true })
        return update
    } catch (error) { throw new Error(error) }
}

export const userModel = {
    createNew,
    getUser,
    getUserByEmail,
    getAllUser,
    updateUser
}