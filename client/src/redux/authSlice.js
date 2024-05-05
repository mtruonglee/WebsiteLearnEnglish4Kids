import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'userData',
    initialState: {
        value: {}
    },
    reducers: {
        saveUserData: (state, action) => {
            state.value = action.payload
        },
        deleteUserData: (state) => {
            state.value = {}
        }
    }
})

// Action creators are generated for each case reducer function
export const { saveUserData, deleteUserData } = authSlice.actions

export default authSlice.reducer