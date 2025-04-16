'use client'
import React, { useState } from 'react'
import CloseSVG from '../../assest/Goods/Close.svg'
import './LogIn.scss'
import FacebookSVG from '../../assest/Header/Facebook.svg'
import GoogleSVG from '../../assest/Header/Google.svg'
import { Locale } from '@/i18n.config'

export type FormLoginProps = {
  email: string
  password: string
}

type Props = {
  lang: Locale
  onSubmit: (formData: FormLoginProps) => void
  onRegisterModal: () => void
  close: () => void
}

const LogIn = ({ onRegisterModal, close, lang, onSubmit }: Props) => {
  const [formData, setFormData] = useState<FormLoginProps>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<{
    email?: string
    password?: string
  }>({})

  const handleSubmitLogin = () => {
    console.log(formData)
    onSubmit(formData)

    close()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined
      })
    }
  }

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
        <input type='text' value={formData.email} onChange={handleChange} />
        <br />
        <label>Пароль</label>
        <input
          type='password'
          value={formData.password}
          onChange={handleChange}
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
          <button className='button-log-in' onClick={handleSubmitLogin}>
            Увійти
          </button>
        </div>
        <button className='register' onClick={onRegisterModal}>
          Зареєструватися
        </button>
        <br />
        <div className='line' />
        <br />
        <div className='logInWhichUser'>Увійти як користувач</div>

        <div className='buttons-log-in'>
          <div className='button-facebook'>
            <button onClick={handleSubmitLogin}>
              <FacebookSVG />
              <div className='button-text'>Facebook</div>
            </button>
          </div>
          <div className='button-google'>
            <button onClick={handleSubmitLogin}>
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
