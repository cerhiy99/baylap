'use client'
import React, { useState, useEffect, useRef } from 'react'
import './Brends.scss'
import UpSVG from '../../../assest/Filters/Up.svg'
import DownSVG from '../../../assest/Filters/Down.svg'
import { Locale } from '@/i18n.config'

type Brand = {
  id: number
  name: string
}

type Props = {
  lang: Locale
}

const Brands: React.FC<Props> = ({ lang }: Props) => {
  const initialBrands: Brand[] = [
    { id: 1, name: 'A Daily Concepts' },
    { id: 2, name: 'A Dior' },
    { id: 3, name: 'A Dolce & Gabbana' },
    { id: 4, name: 'A Kerastase' },
    { id: 5, name: 'A Armani' },
    { id: 6, name: 'A Adidas' },
    { id: 7, name: 'B Burberry' },
    { id: 8, name: 'B Keratherapy' },
    { id: 9, name: "B L'Oreal Professionnel" },
    { id: 10, name: 'B Kezy' },
    { id: 11, name: 'B Bvlgari' },
    { id: 12, name: 'C Clinique' },
    { id: 13, name: 'C Calvin Klein' },
    { id: 14, name: 'C Dior' },
    { id: 15, name: 'C Dolce & Gabbana' },
    { id: 16, name: 'C Daily Concepts' },
    { id: 17, name: 'D Dior Homme' },
    { id: 18, name: 'D Kerastase' },
    { id: 19, name: 'D Diesel' },
    { id: 20, name: 'D DKNY' },
    { id: 21, name: 'E Estee Lauder' },
    { id: 22, name: 'E Elizabeth Arden' },
    { id: 23, name: 'E Ermenegildo Zegna' },
    { id: 24, name: 'F Fendi' },
    { id: 25, name: 'F Ferragamo' },
    { id: 26, name: 'F Furla' },
    { id: 27, name: 'G Gucci' },
    { id: 28, name: 'G Givenchy' },
    { id: 29, name: 'G Giorgio Armani' },
    { id: 30, name: 'H Hermes' },
    { id: 31, name: 'H Hugo Boss' },
    { id: 32, name: 'I Issey Miyake' },
    { id: 33, name: 'J Jo Malone' },
    { id: 34, name: 'J Jimmy Choo' },
    { id: 35, name: 'K Kenzo' },
    { id: 36, name: "K Kiehl's" },
    { id: 37, name: 'L Lancome' },
    { id: 38, name: 'L Louis Vuitton' },
    { id: 39, name: 'M Montblanc' },
    { id: 40, name: 'M Michael Kors' },
    { id: 41, name: 'N Nina Ricci' },
    { id: 42, name: 'O Oscar de la Renta' },
    { id: 43, name: 'P Prada' },
    { id: 44, name: 'P Paco Rabanne' },
    { id: 45, name: 'R Ralph Lauren' },
    { id: 46, name: 'S Saint Laurent' },
    { id: 47, name: 'T Tom Ford' },
    { id: 48, name: 'T Tiffany & Co.' },
    { id: 49, name: 'V Valentino' },
    { id: 50, name: 'V Versace' },
    { id: 51, name: '1 First Brand' },
    { id: 52, name: '2 Second Brand' },
    { id: 53, name: '3 Another Brand' },
    { id: 54, name: '4 Fourth Element' },
    { id: 55, name: '5 Star Product' },
    { id: 56, name: '6 Sixth Brand' },
    { id: 57, name: '7 Seventy Co.' },
    { id: 58, name: '8 Eighth Wonder' },
    { id: 59, name: '9 Nine Elements' },
    // Українські бренди
    { id: 60, name: 'Ароматика' },
    { id: 61, name: 'Біокон' },
    { id: 62, name: 'Веледа' },
    { id: 63, name: 'Грін Віза' },
    { id: 64, name: 'Ґуд Дей' },
    { id: 65, name: 'Душка' },
    { id: 66, name: 'Екобьюти' },
    { id: 67, name: 'Євробьюти' },
    { id: 68, name: 'Жива косметика' },
    { id: 69, name: 'Зелена аптека' },
    { id: 70, name: 'Інсі' },
    { id: 71, name: 'Ївона' },
    { id: 72, name: 'Йоганджі' },
    { id: 73, name: 'Кора' },
    { id: 74, name: 'Космоплекс' },
    { id: 75, name: 'Лавандова мрія' },
    { id: 76, name: 'Мавка' },
    { id: 77, name: 'Натураліс' },
    { id: 78, name: 'Оксамит' },
    { id: 79, name: 'Промінь' },
    { id: 80, name: 'Рута' },
    { id: 81, name: 'Сонцезахист' },
    { id: 82, name: 'Терра' },
    { id: 83, name: 'Українська троянда' },
    { id: 84, name: 'ФітоКосметика' },
    { id: 85, name: 'Холодна вода' },
    { id: 86, name: 'Цитрина' },
    { id: 87, name: 'Чисте обличчя' },
    { id: 88, name: 'Шовкова ніч' },
    { id: 89, name: 'Щаслива шкіра' },
    { id: 90, name: 'Юкрейн Бьюти' },
    { id: 91, name: 'Ясна' }
  ].sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (/^\d/.test(nameA) && !/^\d/.test(nameB)) return 1
    if (!/^\d/.test(nameA) && /^\d/.test(nameB)) return -1
    return nameA.localeCompare(nameB)
  })

  const [selectedBrands, setSelectedBrands] = useState<Record<number, boolean>>(
    {}
  )
  const [selectedLetter, setSelectedLetter] = useState<string>('A')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const scrollContainerRef = useRef<HTMLUListElement | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleCheckboxChange = (brandId: number) => {
    setSelectedBrands(prevState => ({
      ...prevState,
      [brandId]: !prevState[brandId]
    }))
  }

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter)

    const list = scrollContainerRef.current
    if (list) {
      const targetElement = Array.from(list.children).find(child => {
        const brandName = (child as HTMLElement).innerText.trim()
        if (letter === '0-9') return /^\d/.test(brandName)
        return brandName.startsWith(letter)
      })
      if (targetElement) {
        list.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - list.offsetTop - 2,
          behavior: 'smooth'
        })
      }
    }
  }

  const toggleOpen = () => setIsOpen(prevIsOpen => !prevIsOpen)

  // Алфавіти залежно від мови
  const ukrainianAlphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'.split('')
  const russianAlphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')
  const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const combinedAlphabet = englishAlphabet.concat(['0-9'])

  const currentAlphabet = lang === 'ru' ? russianAlphabet : ukrainianAlphabet

  return (
    <div className='brands-container'>
      <div className='brands-header' onClick={toggleOpen}>
        <span>БРЕНД</span>
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? <UpSVG /> : <DownSVG />}
        </span>
      </div>
      {isOpen && (
        <div className={isMobile ? 'dropdown' : ''}>
          <div className='brands-alphabet'>
            {/* Англійський алфавіт */}
            {combinedAlphabet.map(letter => (
              <button
                key={letter}
                className={`alphabet-button ${
                  selectedLetter === letter ? 'active' : ''
                }`}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ))}
            <div style={{ marginTop: '16px' }}>
              {/* Український або російський алфавіт */}
              {currentAlphabet.map(letter => (
                <button
                  key={letter}
                  className={`alphabet-button ${
                    selectedLetter === letter ? 'active' : ''
                  }`}
                  onClick={() => handleLetterClick(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
          <ul className='brands-list filter-scroll' ref={scrollContainerRef}>
            {initialBrands.map(brand => (
              <li key={brand.id} className='brand-item'>
                <label
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <input
                    type='checkbox'
                    checked={selectedBrands[brand.id] || false}
                    onChange={() => handleCheckboxChange(brand.id)}
                    style={{ display: 'none' }}
                  />
                  <span className='custom-checkbox'></span>
                  <span className='brand-name'>{brand.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Brands
