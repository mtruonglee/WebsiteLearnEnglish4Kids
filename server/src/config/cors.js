import { WHITELIST_DOMAINS } from '../utils/constants.js'
// import { env } from '../config/environment.js'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'

export const corsOptions = {
    origin: function (origin, callback) {
        // Cho phép việc gọi API bằng POSTMAN trên môi trường dev,
        // Thông thường khi sử dụng postman thì cái origin sẽ có giá trị là undefined
        // Update mới: Ở video số 75 trong chuỗi MERN Stack PRO khi chúng ta deploy dự án lên một Server Production thì sẽ sửa lại đoạn này thêm một chút nữa để phù hợp với từng môi trường production hoặc dev nhé. Học với mình thì các bạn cứ yên tâm về sự chỉn chu chuẩn chỉnh nhé :D
        // if (!origin && env.BUILD_MODE === 'dev') {
        //     return callback(null, true)
        // }

        // Kiểm tra xem origin có phải là domain được chấp nhận hay không
        if (WHITELIST_DOMAINS.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new ApiError(StatusCodes.FORBIDDEN, 'Not allowed by CORS'))
        }
    },

    // Some legacy browsers (IE11, various SmartTVs) choke on 204
    optionsSuccessStatus: 200,

    // CORS sẽ cho phép nhận cookies từ request, (Nhá hàng :D | Ở khóa MERN Stack Advance nâng cao học trực tiếp mình sẽ hướng dẫn các bạn đính kèm jwt access token và refresh token vào httpOnly Cookies)
    credentials: true
}
