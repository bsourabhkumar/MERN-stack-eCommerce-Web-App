import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    fetchProducts(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    sortProducts(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },
    filterProducts(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },
    findProducts(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },
    limitProducts(state, action){
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    }
  },
})

export const productActions = productSlice.actions
export default productSlice.reducer
