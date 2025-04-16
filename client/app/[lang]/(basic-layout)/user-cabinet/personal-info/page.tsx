'use client'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './pagePersonal.scss'

const PagePersonal = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    street: '',
    building: '',
    apt: '',
    index: '',
    phone: '',
    delivery: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleChangeNumber = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }))
  }
  return (
    <div className='PagePersonal'>
      <div className='PagePersonal__title'>Персональні дані</div>
      <div className='page-form__line'>
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
      </div>
      <div className='page-form__line'>
        <div className='form-group'>
          <label>
            Країна <span className='required'>*</span>
          </label>
          <input
            type='text'
            name='country'
            placeholder='Введіть країну...'
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>
            Місто <span className='required'>*</span>
          </label>
          <input
            type='text'
            name='city'
            placeholder='Введіть місто...'
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='page-form__line'>
        <div className='form-group'>
          <label>Вулиця</label>
          <input
            type='text'
            name='country'
            placeholder='Введіть вулицю...'
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group__short'>
          <div className='form-group'>
            <label>Будинок</label>
            <input
              type='text'
              name='country'
              placeholder='Введіть країну...'
              value={formData.building}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Кв./Офіс</label>
            <input
              type='text'
              name='country'
              placeholder='Введіть країну...'
              value={formData.apt}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className='page-form__line'>
        <div className='form-group'>
          <label>Поштовий індекс</label>
          <input
            type='text'
            name='country'
            placeholder='Введіть поштовий індекс...'
            value={formData.index}
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
          </div>
          {/* <input
            type='text'
            name='city'
            placeholder='Введіть номер телефону...'
            value={formData.phone}
            onChange={handleChange}
            required
          /> */}
        </div>
      </div>
      <div className='page-form__line'>
        <div className='form-group'>
          <label>Нова Пошта</label>
          <input
            type='text'
            name='delivery'
            placeholder='Введіть пошту...'
            value={formData.delivery}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='required'>
        Поля, позначені зірочками (*), обов&apos;язкові для заповнення. 
      </div>
      <div className='button__container'>
        <button>Зберегти</button>
      </div>
    </div>
  )
}

export default PagePersonal
