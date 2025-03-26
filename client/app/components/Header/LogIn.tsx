'use client'
import React, { useState } from 'react'
import CloseSVG from '../../assest/Goods/Close.svg'
import './LogIn.scss'
import FacebookSVG from '../../assest/Header/Facebook.svg'
import GoogleSVG from '../../assest/Header/Google.svg'

type Props = {
  register: () => void
  close: () => void
}

const LogIn = ({ register, close }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='logIn-container'>
      <div className='log-in'>
        <div className='row'>
          <h3>Увійти</h3>
          <div onClick={close} className='close'>
            <CloseSVG />
          </div>
        </div>
        <label>Електронна пошта</label>
        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label>Пароль</label>
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div
          style={{
            margin: '12.5px 0',
            gap: '5px',
            justifyContent: 'left'
          }}
          className='row'
        >
          <input type='checkbox' />
          <span>Запам’ятати мене</span>
        </div>
        <div className='line' />
        <div
          style={{
            margin: '12.5px 0'
          }}
          className='row'
        >
          <div className='forgot-password'>Забули пароль?</div>
          <button className='button-log-in'>Увійти</button>
        </div>
        <div className='register' onClick={register}>
          Зареєструватися
        </div>
        <br />
        <div className='line' />
        <br />
        <div className='logInWhichUser'>Увійти як користувач</div>

        <div className='buttons-log-in'>
          <div className='button-facebook'>
            <button>
              <FacebookSVG />
              <div className='button-text'>Facebook</div>
            </button>
          </div>
          <div className='button-google'>
            <button>
              <GoogleSVG />
              <div className='button-text'>Google</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
