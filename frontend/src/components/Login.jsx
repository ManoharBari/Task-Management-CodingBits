import React from 'react'
import { LogIn } from 'lucide-react'
import "../styles/login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="contain">
        <div className="formWrapper">
          <h1 className="title">Welcome Back</h1>
          <form className="form">
            <div className="inputGroup">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                required
              />
            </div>
            <div className="inputGroup">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                required
              />
            </div>
            <button type="submit" className="button">
              <LogIn size={16} />
              <span>Login</span>
            </button>
          </form>
          <p className="switchPrompt">
            Don't have an account? <Link to="/signup" className="switchLink">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
