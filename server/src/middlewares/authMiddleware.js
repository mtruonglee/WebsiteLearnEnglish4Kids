import { jwtHelper } from '../helpers/jwt.helper.js'
import { env } from '../config/enviroment.js'
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
// const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'access-token-secret-example-trungquandev.com-green-cat-a@'
// /**
//  * Middleware: Authorization user by Token
//  * @param {*} req
//  * @param {*} res
//  * @param {*} next
//  */
let isAuth = async (req, res, next) => {
    // Lấy token được gửi lên từ phía client, thông thường tốt nhất là các bạn nên truyền token vào header
    const tokenFromClient = req.body.accessToken || req.query.token || req.headers['x-access-token']
    if (tokenFromClient) {
        // Nếu tồn tại token
        try {
            // Thực hiện giải mã token xem có hợp lệ hay không?
            const decoded = await jwtHelper.verifyToken(tokenFromClient, env.SECRECT_KEY)
            // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
            req.jwtDecoded = decoded
            // Cho phép req đi tiếp sang controller.
            next()
        } catch (error) {
            // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
            return res.status(401).json({
                message: 'Unauthorized.'
            })
        }
    } else {
        // Không tìm thấy token trong request
        return res.status(403).send({
            message: 'No token provided.'
        })
    }
}
export const authMiddleware = {
    isAuth
}