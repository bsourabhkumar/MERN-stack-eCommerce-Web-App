import React, { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/product-slice'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const searchTerms = ['Shirt', 'Shoes', 'Jacket', 'Saree', 'Ethnic dress']
  const dispatch = useDispatch()

  useEffect(() => {
    const searchProducts = async () => {
      const response = await axios.post(
        'https://eagle-store.herokuapp.com/api/v1/products/search',
        {
          name: searchTerm,
        },
      )
      const productData = await response.data
      const productsArray = productData.data.products
      dispatch(
        productActions.findProducts({
          items: productsArray,
          totalQuantity: productsArray.length,
        }),
      )
    }
    if (searchTerm) {
      const timer = setTimeout(() => {
        searchProducts()
      }, 500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [searchTerm, dispatch])
  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={searchTerms}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={searchTermHandler}
            value={searchTerm}
            label="Search Products"
          />
        )}
      />
    </div>
  )
}

export default SearchBar
