import React from 'react'
import './Register.scss'
import './LogIn.scss'

type Props = {
  logIn: () => void
  close: () => void
}
const Register = ({ logIn, close }: Props) => {
  return (
    <div className='register-container'>
      <div className='register'>
        <div className='row'>
          <h3>Реєстрація </h3>
        </div>
      </div>
    </div>
  )
}

export default Register
