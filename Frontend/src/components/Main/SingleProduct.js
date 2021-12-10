import React from 'react'
import classes from './SingleProduct.module.css'

const SingleProduct = (props) => {
  return (
    <div className={classes['product-box']}>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>Desc: {props.description}</p>
      <p>Price: ₹ {props.price}</p>
      <p>Category: {props.category}</p>
      <p>Brand: {props.brand}</p>
    </div>
  )
}

export default SingleProduct
