'use client'
import React, { useState, useEffect, useRef } from 'react'
import './ContactWithUs.scss'
import { Locale } from '@/i18n.config'
import CallSVG from '../../assest/Header/Call.svg'
import DownSVG from '../../assest/Header/Down.svg'
import ViberSVG from '../../assest/Header/Viber.svg'
import TelegramSVG from '../../assest/Header/Telegram.svg'
import WhatccapSVG from '../../assest/Header/Whatccap.svg'
import PhoneSVG from '../../assest/Header/Phone.svg'

type Props = {
  lang: Locale
  dictionary: any
}

const ContactWithUs = ({ lang, dictionary }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdownOpen = () => {
    setIsOpen(true)
  }
  const toggleDropdownClose = () => {
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

  return (
    <div
      onMouseEnter={toggleDropdownOpen}
      onMouseLeave={toggleDropdownClose}
      className='header-contact'
      ref={dropdownRef}
    >
      <div className={`contactUs ${isOpen ? 'open' : ''}`}>
        <CallSVG />
        <p>{dictionary.title}</p>
        <DownSVG className='arrow' />
      </div>
      <div className={`dropdown ${isOpen ? 'show' : ''}`}>
        <p>{dictionary.timeWorkTitle}</p>
        <span>{dictionary.timeWorkDescription1}</span>
        <span>{dictionary.timeWorkDescription2}</span>
        <div className='list-icon'>
          <div className='list__item'>
            <ViberSVG />
            <p>Viber</p>
            <a href={process.env.NEXT_PUBLIC_VIBER}></a>
          </div>
          <div className='list__item'>
            <TelegramSVG />
            <p>Telegram</p>
            <a href={process.env.NEXT_PUBLIC_TELEGRAM}></a>
          </div>
          <div className='list__item'>
            <WhatccapSVG />
            <p>Whatsapp</p>
            <a href={process.env.NEXT_PUBLIC_WHATSAPP}></a>
          </div>
          <div className='icon2'>
            <PhoneSVG color={'#fe680a'} stroke={'white'} />
            <p>
              <a href={process.env.NEXT_PUBLIC_PHONE_URL_1}>
                {process.env.NEXT_PUBLIC_PHONE_1}
              </a>
              <a href={process.env.NEXT_PUBLIC_PHONE_URL_2}>
                {process.env.NEXT_PUBLIC_PHONE_2}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactWithUs
