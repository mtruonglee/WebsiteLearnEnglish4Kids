import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice.js'
import courseSlice from './courseSlice.js'

export default configureStore({
    reducer: {
        userData: authSlice,
        courseData: courseSlice
    }
})