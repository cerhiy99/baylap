'use client'
import React, { useState, useEffect, useRef } from 'react'
import './Brends.scss'
import UpSVG from '../../../assest/Filters/Up.svg'
import DownSVG from '../../../assest/Filters/Down.svg'

type Category = {
  id: number
  name: string
}

type CategoriesProps = {
  listCategories: Category[]
}

const Categories: React.FC<CategoriesProps> = ({ listCategories }) => {
  const sortedCategories = [...listCategories].sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (/^\d/.test(nameA) && !/^\d/.test(nameB)) return 1
    if (!/^\d/.test(nameA) && /^\d/.test(nameB)) return -1
    return nameA.localeCompare(nameB, 'uk') // Сортування для української мови
  })

  const [selectedCategories, setSelectedCategories] = useState<
    Record<number, boolean>
  >({})
  const [selectedLetter, setSelectedLetter] = useState<string>('А')
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024)
  const scrollContainerRef = useRef<HTMLUListElement | null>(null)

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

  useEffect(() => {
    const initialSelectedCategories: Record<number, boolean> = {}
    sortedCategories.forEach(category => {
      initialSelectedCategories[category.id] = false
    })
    setSelectedCategories(initialSelectedCategories)
  }, [sortedCategories])

  const handleCheckboxChange = (categoryId: number) => {
    setSelectedCategories(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId]
    }))
  }

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter)
    const list = scrollContainerRef.current
    if (list) {
      const targetElement = Array.from(list.children).find(child => {
        const categoryName = (child as HTMLElement).innerText.trim()
        if (letter === '0-9') return /^\d/.test(categoryName)
        return categoryName.startsWith(letter)
      })
      if (targetElement) {
        list.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - list.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }

  const toggleDropdown = () => setIsDropdownOpen(prevState => !prevState)

  // Український алфавіт + цифри
  const alphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'.split('').concat(['0-9'])

  return (
    <div className='brands-container categories-container'>
      <div
        style={{ minWidth: '90px' }}
        className='brands-header categories-header'
        onClick={toggleDropdown}
      >
        <span>КАТЕГОРІЯ</span>
        <span className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}>
          {isDropdownOpen ? <UpSVG /> : <DownSVG />}
        </span>
      </div>
      {isDropdownOpen && (
        <div style={{ left: '5px' }} className={isMobile ? 'dropdown' : ''}>
          <ul className='brands-list filter-scroll' ref={scrollContainerRef}>
            {sortedCategories.map(category => (
              <li key={category.id} className='brand-item'>
                <label
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <input
                    type='checkbox'
                    checked={selectedCategories[category.id] || false}
                    onChange={() => handleCheckboxChange(category.id)}
                    style={{ display: 'none' }}
                  />
                  <span className='custom-checkbox'></span>
                  <span className='brand-name'>{category.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Categories
