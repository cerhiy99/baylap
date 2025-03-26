'use client'

import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Cooperation.scss'
import axios from 'axios'

const FormCooperation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+380',
    message: ''
  })

  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    let isValidEmail = true
    if (formData.email) {
      isValidEmail = /\S+@\S+\.\S+/.test(formData.email)
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phone: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Form data submitted:', formData)

    try {
      const tgToken = process.env.NEXT_PUBLIC_TG_API
      const tgChatId = process.env.NEXT_PUBLIC_TG_CHAT_ID

      /*if (!tgToken || !tgChatId) {
        console.error('Telegram credentials are missing!')
        return
      }*/

      const message = `
Приветствую, Baylap! 🙌
С вашей компанией хотят сотрудничать. 🤑
🏢 Название компании: ${formData.name}
📲 Номер телефона: ${formData.phone}
📧 E-mail: ${formData.email}
✍️ Сообщение: ${formData.message}`

      /*const res = await axios.post(
        `https://api.telegram.org/bot${tgToken}/sendMessage`,
        {
          chat_id: tgChatId,
          text: message,
          parse_mode: 'Markdown'
        }
      )*/
      let res = { data: { ok: true } }

      if (res.data.ok) {
        setSuccessMessage('Дякуємо, Ваше запитання надіслалось!')
        setTimeout(() => {
          setSuccessMessage(null)
          setFormData({ name: '', email: '', phone: '+380', message: '' })
        }, 3000)
      } else {
        console.error('Помилка при надсиланні в Telegram:', res.data)
      }
    } catch (err) {
      console.error('Помилка при відправці форми:', err)
    }
  }

  return (
    <div className='form-container block'>
      <h3>Заповніть форму, щоб стати постачальником</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>
            Назва компанії <span>*</span>
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>
            Телефон <span>*</span>
          </label>
          <PhoneInput
            country={'ua'}
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
        <div className='form-group'>
          <label htmlFor='message'>
            Повідомлення <span>*</span>
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
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
      )}{' '}
    </div>
  )
}

export default FormCooperation
