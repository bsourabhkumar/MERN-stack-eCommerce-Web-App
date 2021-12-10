import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from './store/product-actions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    dispatch(fetchProductData())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <HomePage /> : <LoginPage />}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <RegisterPage />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
