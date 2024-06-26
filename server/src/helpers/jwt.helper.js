import jwt from 'jsonwebtoken'
// /**
//  * private function generateToken
//  * @param user
//  * @param secretSignature
//  * @param tokenLife
//  */
let generateToken = (user, secretSignature) => {
    return new Promise((resolve, reject) => {
        // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
        const userData = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
        // Thực hiện ký và tạo token
        jwt.sign(
            { data: userData },
            secretSignature,
            {
                algorithm: 'HS256'
            },
            (error, token) => {
                if (error) {
                    return reject(error)
                }
                resolve(token)
            })
    })
}
// /**
//  * This module used for verify jwt token
//  * @param {*} token
//  * @param {*} secretKey
//  */
let verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return reject(error)
            }
            resolve(decoded)
        })
    })
}
export const jwtHelper = {
    generateToken,
    verifyToken
}