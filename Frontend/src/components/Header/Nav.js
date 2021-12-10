import React from 'react'
import SearchBar from './SearchBar'
import classes from './Nav.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store/auth-slice'
import { useHistory } from 'react-router-dom'

const Nav = () => {
  const history = useHistory()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout())
    localStorage.removeItem('isLoggedIn')
  }

  const loginHandler = () => {
    history.push('/login')
  }
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <h1>EagleStore</h1>
      </div>
      <div className={classes['search-bar']}>
        <SearchBar />
      </div>
      <div
        onClick={isLoggedIn ? logoutHandler : loginHandler}
        className={classes.login}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </div>
    </nav>
  )
}

export default Nav
