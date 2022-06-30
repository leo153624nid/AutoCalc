import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    login: null,
    email: null,
    userName: null,
    isAuth: true,
}

const SET_USER = 'SET_USER'

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_USER, (state, action) => ({
            ...state,
            ...action.user,
        }))
        .addDefaultCase((state) => state)
})

// Установка данных пользователя
export const setUser = (userId, login, email, userName) => ({
    type: SET_USER,
    user: { userId, login, email, userName },
})

export default authReducer
