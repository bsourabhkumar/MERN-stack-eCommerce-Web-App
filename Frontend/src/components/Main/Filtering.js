import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { productActions } from '../../store/product-slice'
import { useDispatch } from 'react-redux'
import classes from './Filtering.module.css'

const Filtering = () => {
  const [filterValue, setFilterValue] = useState('')
  const [fields, setFields] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const getFilteredData = async () => {
      if (filterValue) {
        const filteredProducts = await axios.get(
          'https://eagle-store.herokuapp.com/api/v1/products/?category=' +
            filterValue,
        )
        const currentItems = await filteredProducts.data
        dispatch(
          productActions.filterProducts({
            items: currentItems.data.products,
            totalQuantity: currentItems.results,
          }),
        )
      } else {
        const filteredProducts = await axios.get(
          'https://eagle-store.herokuapp.com/api/v1/products/',
        )
        const currentItems = await filteredProducts.data
        dispatch(
          productActions.filterProducts({
            items: currentItems.data.products,
            totalQuantity: currentItems.results,
          }),
        )
      }
    }
    getFilteredData()
  }, [filterValue, dispatch])

  useEffect(() => {
    const getLimitedData = async () => {
      if (fields.length > 0) {
        const limitedProducts = await axios.get(
          'https://eagle-store.herokuapp.com/api/v1/products/?fields=name,image,description,' +
            fields.toString(),
        )
        const currentItems = await limitedProducts.data
        dispatch(
          productActions.limitProducts({
            items: currentItems.data.products,
            totalQuantity: currentItems.results,
          }),
        )
      } else {
        const Products = await axios.get(
          'https://eagle-store.herokuapp.com/api/v1/products/',
        )
        const currentItems = await Products.data
        dispatch(
          productActions.filterProducts({
            items: currentItems.data.products,
            totalQuantity: currentItems.results,
          }),
        )
      }
    }
    getLimitedData()
  }, [fields, dispatch])

  const updateFilter = (e) => {
    setFilterValue(e.target.value)
  }
  const updateClearFilters = () => {
    setFilterValue('')
  }
  const updateFields = (e) => {
    setFields((prevField) => [...prevField, e.target.value])
  }
  const updateClearFields = () => {
    setFields([])
  }
  return (
    <div className={classes.filter}>
      <label>Category</label>
      <div>
        <input
          type="checkbox"
          name="Men"
          value="Men"
          id="Men"
          checked={filterValue === 'Men'}
          onChange={updateFilter}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Women"
          value="Women"
          id="Women"
          checked={filterValue === 'Women'}
          onChange={updateFilter}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Kids"
          value="Kids"
          id="Kids"
          checked={filterValue === 'Kids'}
          onChange={updateFilter}
        />
        <label>Kids</label>
      </div>
      <button onClick={updateClearFilters}>Clear Filters</button>
      <label>Only Show</label>
      <div>
        <input
          type="checkbox"
          name="price"
          value="price"
          id="price"
          checked={fields.includes('price')}
          onChange={updateFields}
        />
        <label>Price</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="brand"
          value="brand"
          id="brand"
          checked={fields.includes('brand')}
          onChange={updateFields}
        />
        <label>Brands</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="category"
          value="category"
          id="category"
          checked={fields.includes('category')}
          onChange={updateFields}
        />
        <label>Category</label>
      </div>
      <button onClick={updateClearFields}>Clear Fields</button>
    </div>
  )
}

export default Filtering
