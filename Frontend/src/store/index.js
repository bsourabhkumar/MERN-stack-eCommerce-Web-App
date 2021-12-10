import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product-slice'
import authReducer from './auth-slice'

const store = configureStore({
  reducer: { product: productReducer, auth: authReducer },
})

export default store
