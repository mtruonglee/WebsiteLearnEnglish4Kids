import 'dotenv/config'

export const env = {
    MONGODB_URI: '',
    DATABASE_NAME: '',
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT,
    SECRECT_KEY: process.env.SECRECT_KEY,

    AUTHOR: process.env.AUTHOR
}