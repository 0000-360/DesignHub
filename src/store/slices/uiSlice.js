import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isMenuOpen: false,
    theme: 'light', // 'light' | 'dark'
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        },
        setTheme: (state, action) => {
            state.theme = action.payload
        },
    },
})

export const { toggleMenu, closeMenu, setTheme } = uiSlice.actions
export default uiSlice.reducer
