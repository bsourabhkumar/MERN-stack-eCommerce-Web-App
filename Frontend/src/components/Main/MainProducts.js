import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from './SingleProduct'
import classes from './MainProducts.module.css'

const MainProducts = () => {
  const productData = useSelector((state) => state.product)
  return (
    <div className={classes['main-product']}>
      {productData.items.map((product) => (
        <SingleProduct
          key={product._id}
          name={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
          category={product.category}
          brand={product.brand}
        />
      ))}
    </div>
  )
}

export default MainProducts
