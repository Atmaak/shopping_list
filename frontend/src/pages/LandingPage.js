import React from 'react'
import { useDataContext } from '../DataContext'

const LandingPage = () => {
  const { history } = useDataContext()
  return (
    <div>
      <button onClick={() => {history('Login')}}>Log in</button>
      <button onClick={() => {history('SignUp')}}>Sign Up</button>
    </div>
  )
}

export default LandingPage