'use client'

import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const AboutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    let isValidEmail = true
    if (formData.email) {
      isValidEmail =
        formData.email === '' || /\S+@\S+\.\S+/.test(formData.email)
    }
    const isValid =
      formData.name.trim() !== '' &&
      formData.phone.length === 12 &&
      formData.message.trim() !== '' &&
      isValidEmail
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Показуємо повідомлення про успіх
    setSuccessMessage('Дякуємо, Ваше запитання надіслалось!')

    // Очищуємо форму
    setFormData({
      name: '',
      phone: '+380',
      email: '',
      message: ''
    })

    // Прибираємо повідомлення через 3 секунди
    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
  }

  return (
    <div className='about-form block'>
      <h2>Залюбки відповімо на Ваші запитання!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Ім&apos;я <span>*</span>
          </label>
          <input
            className='input'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>
            Телефон <span>*</span>
          </label>
          <PhoneInput
            country={'ua'}
            placeholder=''
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phone',
              required: true,
              pattern:
                '^\\+380 \\(\\d{2}\\\\) \\d{3} \\d{2} \\d{2}$|^(?!\\+380).{7,20}$'
            }}
          />
        </div>

        <div>
          <label>E-mail</label>
          <input
            className='input'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            Повідомлення <span>*</span>
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type='submit'
          className={isFormValid ? 'but-active' : ''}
          disabled={!isFormValid}
        >
          Відправити
        </button>
      </form>

      {/* Відображення повідомлення про успіх */}
      {successMessage && (
        <p style={{ color: 'green' }} className='success-message'>
          {successMessage}
        </p>
      )}
    </div>
  )
}

export default AboutForm
