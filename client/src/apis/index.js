import axios from 'axios'

//courseapis
export const fetchCourseApi = async () => {
    const response = await axios.get('http://localhost:8017/course/get')
    return response.data
}

export const fetchCourseByIdApi = async (id) => {
    const response = await axios.get(`http://localhost:8017/course/get/${id}`)
    return response.data
}

export const createCourseApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:8017/course/create', data)
        return response.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const updateCourseApi = async (id, data) => {
    const response = await axios.put(`http://localhost:8017/course/update/${id}`, data)
    return response.data
}

export const deleteCourseApi = async (id) => {
    const response = await axios.delete(`http://localhost:8017/course/delete/${id}`)
    return response.data
}

export const createCommentApi = async (data) => {
    const response = await axios.post('http://localhost:8017/course/create-comment', data)
    return response.data
}

export const getCommentApi = async (id) => {
    const response = await axios.get(`http://localhost:8017/course/comment/${id}`)
    return response.data
}

export const deleteCommentApi = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8017/course/deleteComment/${id}`)
        return response.data
    } catch (error) {
        return error
    }
}

//userapis
export const createUserApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:8017/user/sign-up', data)
        alert('Success!')
        return response.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const loginApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:8017/user/login', data)
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('name', response.data.name)
        return response.data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getAllUserApi = async (accessToken) => {
    try {
        const response = await axios.post('http://localhost:8017/user/getAllUser', accessToken)
        return response.data
    } catch (error) {
        return error
    }
}

export const getUserApi = async (accessToken) => {
    try {
        const response = await axios.post('http://localhost:8017/user/infor', accessToken)
        return response.data
    } catch (error) {
        return error
    }
}

export const updateUserApi = async (accessToken) => {
    try {
        const response = await axios.post('http://localhost:8017/user/update', accessToken)
        return response.data
    } catch (error) {
        return error
    }
}

//gameapi
export const fetchWordApi = async () => {
    const response = await axios.get('http://localhost:8017/word')
    return response.data
}

export const getWordByTopicApi = async (topic) => {
    const response = await axios.post('http://localhost:8017/word/getByTopic', topic)
    return response.data
}

export const createUserScoreApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:8017/user/score', data)
        return response.data
    } catch (error) {
        return error
    }
}

export const getUserScoreApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:8017/user/getScore', data)
        return response.data
    } catch (error) {
        return error
    }
}

export const updateUserScoreApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:8017/user/updateScore', data)
        return response.data
    } catch (error) {
        return error
    }
}

//processapis
export const createProcessApi = async (IdCourse, IdUser) => {
    const response = await axios.post(`http://localhost:8017/process/${IdCourse}`, IdUser)
    return response.data
}

export const getProcessApi = async (accessToken) => {
    const response = await axios.post('http://localhost:8017/process/getProcessCourses', accessToken)
    return response.data
}
