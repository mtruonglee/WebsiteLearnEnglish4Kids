/* eslint-disable no-useless-catch */
import { slugify } from '../utils/formatters.js'
import { userModel } from '../model/userModel.js'
import { jwtHelper } from '../helpers/jwt.helper.js'
import { env } from '../config/enviroment.js'

const createUser = async (reqBody) => {
    try {
        const newUser = {
            ...reqBody,
            slug: slugify(reqBody.name)
        }
        const result = await userModel.getUserByEmail(reqBody.email)
        if (!result) {
            const user = await userModel.createNew(newUser)
            return user
        }
        else throw new Error('Email already exist!')
    } catch (error) {
        throw error
    }
}

const getUser = async (id) => {
    try {
        const user = await userModel.getUser(id)
        return user
    } catch (error) {
        throw error
    }
}

const login = async (reqBody) => {
    try {
        const data = await userModel.getUserByEmail(reqBody.email)
        if (data != null)
            if (data.password === reqBody.password) {
                const accessToken = await jwtHelper.generateToken(data, env.SECRECT_KEY)
                return { email: data.email, name: data.name, role: data.role, accessToken }
            }
            else throw new Error('Wrong username or password!')
        else throw new Error('Wrong email or password!')
    } catch (error) {
        throw error
    }
}

const getAllUser = async () => {
    try {
        const result = await userModel.getAllUser()
        return result
    } catch (error) {
        throw error
    }
}

const updateUser = async (id, data) => {
    try {
        const update = await userModel.updateUser(id, data)
        return update
    } catch (error) {
        throw error
    }
}


export const userService = {
    createUser,
    getUser,
    login,
    getAllUser,
    updateUser
}
