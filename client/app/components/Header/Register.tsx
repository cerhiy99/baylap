'use client'

import type React from 'react'
import CloseSVG from '../../assest/Goods/Close.svg'
import { useState } from 'react'
import './Registration.scss'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface RegistrationModalProps {
  onClose: () => void
}
export default function RegistrationModal({ onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleChangeNumber = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your registration logic here
  }

  return (
    <div className='modal-overlay'>
      <div className='registration-modal'>
        <div className='row'>
          <h3>Реєстрація</h3>
          <div onClick={onClose} className='close'>
            <CloseSVG />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>
              Ім&apos;я <span className='required'>*</span>
            </label>
            <input
              type='text'
              name='firstName'
              placeholder="Введіть ім'я..."
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label>
              Прізвище <span className='required'>*</span>
            </label>
            <input
              type='text'
              name='lastName'
              placeholder='Введіть прізвище...'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label>
              Номер телефону <span className='required'>*</span>
            </label>
            <div className='phone-input-container'>
              <PhoneInput
                country={'ua'}
                placeholder=''
                value={formData.phone}
                onChange={handleChangeNumber}
                inputProps={{
                  type: 'tel',

                  required: true,
                  pattern:
                    '^\\+380 \\(\\d{2}\\\\) \\d{3} \\d{2} \\d{2}$|^(?!\\+380).{7,20}$'
                }}
              />
              {/* <input
                type='tel'
                name='phone'
                placeholder='+380(_)_-__-__'
                value={formData.phone}
                onChange={handleChange}
                required
              /> */}
            </div>
          </div>

          <div className='form-group'>
            <label>
              Електронна пошта <span className='required'>*</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Введіть електронну пошту...'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label>
              Пароль <span className='required'>*</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Введіть пароль...'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label>
              Підтвердити пароль <span className='required'>*</span>
            </label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Введіть повторно пароль...'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className='register-button'>
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  )
}
