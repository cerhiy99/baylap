'use client'

import React, { useState, useEffect } from 'react'
import './PriceSelector.scss'
import UpSVG from '../../../assest/Filters/Up.svg'
import DownSVG from '../../../assest/Filters/Down.svg'
import { Slider } from '@mui/material'

const PriceSelector: React.FC = () => {
  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(2300)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [priceRange, setPriceRange] = useState<number[]>([min, max])
  const [selectedRange, setSelectedRange] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleOpen = () => {
    setIsOpen(prev => !prev)
  }

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue)
    }
  }

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRange(event.target.value)
    const option = priceOptions.find(opt => opt.name === event.target.value)
    if (option) {
      setPriceRange([option.min, option.max])
    }
  }

  const priceOptions = [
    { name: 'Вся цена', min: min, max: max },
    { name: 'Больше 100 ₴', min: 100, max: max },
    { name: 'от 100 ₴ до 200 ₴', min: 100, max: 200 },
    { name: 'от 200 ₴ до 300 ₴', min: 200, max: 300 },
    { name: 'от 400 ₴ до 500 ₴', min: 400, max: 500 },
    { name: 'от 800 ₴ до 1000 ₴', min: 800, max: 1000 },
    { name: 'Больше 1000 ₴', min: 1000, max: max }
  ]

  return (
    <div className='price-selector-container'>
      <div className='price-selector-header' onClick={toggleOpen}>
        <h3>ЦЕНА</h3>
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? <UpSVG /> : <DownSVG />}
        </span>
      </div>
      {isOpen && (
        <>
          <div
            className={`price-slider-container ${isMobile ? 'dropdown' : ''}`}
          >
            <div className='price-slider'>
              <Slider
                value={priceRange}
                onChange={handleSliderChange}
                valueLabelDisplay='auto'
                min={0}
                max={max}
                step={10}
                disableSwap
              />
            </div>
            <div className='price-inputs'>
              <input
                type='text'
                placeholder='Мин'
                onChange={e =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
              />
              <input
                type='text'
                placeholder='Макс'
                value={priceRange[1]}
                onChange={e =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
              />
            </div>
          </div>
          <ul className={`price-options ${isMobile ? 'dropdown' : ''}`}>
            {priceOptions.map((option, index) => (
              <li key={index} className='price-option'>
                <label>
                  <input
                    type='radio'
                    name='price'
                    value={option.name}
                    checked={selectedRange === option.name}
                    onChange={handleRangeChange}
                  />
                  <span className='custom-radio'></span>
                  <span className='price-option-text'>{option.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default PriceSelector
