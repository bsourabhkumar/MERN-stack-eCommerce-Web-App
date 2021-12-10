import { productActions } from './product-slice'
import axios from 'axios'

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://eagle-store.herokuapp.com/api/v1/products',
      )
      const data = await response.data
      return data
    }
    try {
      const productData = await fetchData()
      dispatch(
        productActions.fetchProducts({
          items: productData.data.products || [],
          totalQuantity: productData.results,
        }),
      )
    } catch (error) {
      console.log('Error occured', error)
    }
  }
}
