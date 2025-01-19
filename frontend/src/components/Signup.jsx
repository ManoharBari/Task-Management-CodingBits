import { UserPlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'

function Signup() {
  return (
    <div className="contain">
      <div className="formWrapper">
        <h1 className="title">Create your account</h1>
        <form className="form">
          <div className="inputGroup">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
           
              className="input"
              required
            />
          </div>
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
          <div className="inputGroup">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              className="input"
              required
            />
          </div>

          <button type="submit" className="button">
            <UserPlus size={16} />
            <span>Sign Up</span>
          </button>
        </form>
        <p className="switchPrompt">
          Already have an account? <Link to="/login" className="switchLink">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
