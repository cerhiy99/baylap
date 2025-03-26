'use client'
import React, { useState } from 'react'
import './Coment.scss'
import ArrowDown from '../../assest/MakeOrder/ArrowDown.svg' // У разі використання SVG як React-компонента

type Props = {}

const Coment = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [coment, setComent] = useState('')

  return (
    <div className='coment-container'>
      <div onClick={() => setIsOpen(!isOpen)} className='coment-tile'>
        <p>Коментар до замовлення</p>
        <div
          className={`coment-title-svg ${isOpen ? 'rotate' : ''}`} // Додаємо клас для обертання
        >
          <ArrowDown />
        </div>
      </div>
      <div className={`open ${isOpen ? 'visible' : ''}`}>
        <textarea
          value={coment}
          onChange={e => setComent(e.target.value)}
          placeholder='ваш коментар'
          rows={2}
        />

        <button
          style={{ opacity: coment.length > 3 ? 1 : 0.6, cursor: 'pointer' }}
          type='button'
          onClick={() => setIsOpen(false)}
        >
          Збеоегти
        </button>
      </div>
    </div>
  )
}

export default Coment
