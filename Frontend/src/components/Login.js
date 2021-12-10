import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

const Profile = () => {
  const isFetching = useSelector((state) => state.auth.isFetching)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [test, setTest] = useState(false)
  const dispatch = useDispatch()

  const loginHandler = async () => {
    const loginBody = { email, password }
    dispatch(authActions.loginStart())
    try {
      const res = await axios.post(
        'https://eagle-store.herokuapp.com/api/v1/login',
        loginBody,
      )
      const user = await res.data
      if (user) {
        dispatch(authActions.login({ name: user.name }))
        localStorage.setItem('isLoggedIn', JSON.stringify(true))
      }
    } catch (error) {
      dispatch(authActions.loginFailure)
    }
  }
  const testCredential = () => {
    setTest(true)
    setEmail('test@email.com')
    setPassword('12345678')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginHandler()
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }
  return (
    <Login>
      <Wrapper>
        <Right>
          <h1>Login to EagleStore</h1>
          <form onSubmit={handleSubmit}>
            <LoginBox>
              {!test && (
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={emailChangeHandler}
                />
              )}
              {!test && (
                <input
                  type="password"
                  required
                  minLength="6"
                  placeholder="password"
                  value={password}
                  onChange={passwordChangeHandler}
                />
              )}
              {test && (
                <input
                  type="email"
                  value={email}
                  required
                  placeholder="Email"
                />
              )}
              {test && (
                <input
                  type="password"
                  value={password}
                  required
                  minLength="6"
                  placeholder="password"
                />
              )}
              <button
                className="login-button"
                type="submit"
                onClick={testCredential}
              >
                {isFetching ? 'loading...' : 'Log In With Test Credentials'}
              </button>
              <button className="login-button" type="submit">
                {isFetching ? 'loading...' : 'Log In'}
              </button>
              <Link to="/register">
                <button className="account-button">Create a New Account</button>
              </Link>
            </LoginBox>
          </form>
        </Right>
      </Wrapper>
    </Login>
  )
}
const Login = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: silver;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const LoginBox = styled.div`
  height: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    height: 40px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;
  }
  input:focus {
    outline: none;
  }
  .login-button {
    align-self: center;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: lightskyblue;
    color: black;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  .login-button:hover {
    background-color: silver;
    color: #1775ee;
  }
  .login-button:disabled {
    cursor: not-allowed;
  }
  span {
    text-align: center;
    color: pink;
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;
  }
  .account-button {
    width: 100%;
    height: 30px;
    align-self: center;
    border-radius: 10px;
    border: none;
    background-color: lightsalmon;
    color: blue;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
  .account-button:hover {
    background-color: white;
    color: #42b72a;
  }
`

export default Profile
