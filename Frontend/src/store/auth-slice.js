import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    isFetching: false,
    error: false,
    name: '',
  },
  reducers: {
    loginStart(state, action) {
      state.isLoggedIn = false
      state.isFetching = true
      state.error = false
    },
    login(state, action) {
      state.isLoggedIn = true
      state.error = false
      state.isFetching = false
      state.name = action.payload.name
    },
    loginFailure(state, action) {
      state.isLoggedIn = false
      state.error = true
      state.isFetching = false
    },
    logout(state, action) {
      state.isLoggedIn = false
    },
  },
})

export const authActions = authSlice.actions
export default authSlice.reducer
