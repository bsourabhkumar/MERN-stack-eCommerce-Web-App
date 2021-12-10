import React from 'react'
import MainProducts from '../components/Main/MainProducts'
import Side from '../components/Main/Side'
import classes from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={classes.main}>
      <Side className={classes.side} />
      <MainProducts className={classes['main-products']} />
    </div>
  )
}

export default MainPage
