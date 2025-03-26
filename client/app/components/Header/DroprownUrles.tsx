'use client'
import React, { useState, useEffect, useRef } from 'react'
import './DroprownUrles.scss'
import { Locale } from '@/i18n.config'
import Link from 'next/link'
import DownSVG from '../../assest/Header/Down.svg'

type Props = {
  dictionary: any
  lang: Locale
}

const DroprownUrles = ({ dictionary, lang }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen(true)
  }
  const toggleClose = () => {
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }
  /*
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
*/
  return (
    <div
      onMouseEnter={toggleOpen}
      onMouseLeave={toggleClose}
      className='header-dropdown-url'
      //ref={dropdownRef}
    >
      <p className={isOpen ? 'open' : ''}>
        {dictionary.title}
        <DownSVG className='arrow' />
      </p>
      <div onClick={toggleClose} className={`dropdown ${isOpen ? 'show' : ''}`}>
        <Link href={`/${lang}/about-us`}>{dictionary.aboutUs}</Link>
        <Link href={`/${lang}/delivery`}>{dictionary.delivery}</Link>
        <Link href={`/${lang}/pay`}>{dictionary.pay}</Link>
        <Link href={`/${lang}/return-goods`}>{dictionary.returnGoods}</Link>
        <Link href={`/${lang}/offer-agreement`}>
          {dictionary.offerAgreement}
        </Link>
        <Link href={`/${lang}/reviews`}>{dictionary.reviews}</Link>
      </div>
    </div>
  )
}

export default DroprownUrles
