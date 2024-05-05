import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
    name: 'courseData',
    initialState: {
        value: {}
    },
    reducers: {
        saveCourseData: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { saveCourseData } = courseSlice.actions

export default courseSlice.reducer