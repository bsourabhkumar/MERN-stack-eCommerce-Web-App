import React, { useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()

  const Name = useRef()
  const Username = useRef()
  const Email = useRef()
  const Password = useRef()
  const PasswordAgain = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (PasswordAgain.current.value !== Password.current.value) {
      PasswordAgain.current.setCustomValidity("Passwords don't match!")
    } else {
      const userReg = {
        name: Name.current.value,
        username: Username.current.value,
        email: Email.current.value,
        password: Password.current.value,
      }
      try {
        await axios.post(
          'https://eagle-store.herokuapp.com/api/v1/register',
          userReg,
        )
        history.push('/login')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Login>
      <Wrapper>
        <Right>
          <h1>Register to EagleStore</h1>
          <form onSubmit={handleSubmit}>
            <LoginBox>
              <input type="text" required ref={Name} placeholder="Name" />
              <input
                type="username"
                required
                ref={Username}
                placeholder="Username"
              />
              <input type="email" required ref={Email} placeholder="Email" />
              <input
                type="password"
                required
                minLength="6"
                ref={Password}
                placeholder="Password"
              />
              <input
                type="password"
                required
                minLength="6"
                ref={PasswordAgain}
                placeholder="Password Again"
              />
              <button className="account-button" type="submit">
                Create an Account
              </button>
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
  height: 90%;
  display: flex;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const LoginBox = styled.div`
  height: 400px;
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
    background-color: #1775ee;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  .login-button:hover {
    background-color: silver;
    color: #1775ee;
  }
  span {
    text-align: center;
    color: tomato;
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;
  }
  .account-button {
    width: 60%;
    height: 30px;
    align-self: center;
    border-radius: 10px;
    border: none;
    background-color: lightskyblue;
    color: black;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
  .account-button:hover {
    background-color: white;
    color: #42b72a;
  }
`

export default Register
