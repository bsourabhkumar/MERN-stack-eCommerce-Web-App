import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/product-slice'
import classes from './Sorting.module.css'

const Sorting = () => {
  const [sortValue, setSortValue] = useState('price')
  const dispatch = useDispatch()

  useEffect(() => {
    const getSortedData = async () => {
      const sortData = await axios.get(
        'https://eagle-store.herokuapp.com/api/v1/products/?sort=' + sortValue,
      )
      const productData = await sortData.data
      dispatch(
        productActions.sortProducts({
          items: productData.data.products,
          totalQuantity: productData.results,
        }),
      )
    }
    getSortedData()
  }, [sortValue, dispatch])

  const updateSort = (e) => {
    const value = e.target.value
    setSortValue(value)
    console.log(sortValue)
  }
  return (
    <div className={classes.sorting}>
      <label htmlFor="sorting">Sort Products</label>
      <select name="sort" id="sort" value={sortValue} onChange={updateSort}>
        <option value="price" name="price(ascending)">
          Price(Low to High)
        </option>
        <option value="-price" name="price(descending)">
          Price(High to Low)
        </option>
        <option value="name" name="name(a to z)">
          Name(a to z)
        </option>
        <option value="-name" name="name(z to a)">
          Name(z to a)
        </option>
      </select>
    </div>
  )
}

export default Sorting
