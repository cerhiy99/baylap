'use client'
import React, { useState, useEffect, useRef } from 'react'
import './AuthHeader.scss'
import AuthSVG from '../../assest/Header/Auth.svg'
import { Locale } from '@/i18n.config'
import LogIn from './LogIn'
import Register from './Register'

type Props = {
  dictionary: any
  lang: Locale
}

const AuthHeader = ({ dictionary, lang }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [logIsOpen, setLogIsOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

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
  const handleLogin = () => {
    setLogIsOpen(false)
    setIsRegisterOpen(true)
  }
  const handleRegister = () => {
    setLogIsOpen(true)
    setIsRegisterOpen(false)
  }

  const closeLogIn = () => {
    setLogIsOpen(false)
  }
  const closeRegister = () => {
    setIsRegisterOpen(false)
  }

  return (
    <>
      <div
        onMouseLeave={toggleDropdownClose}
        onMouseEnter={toggleDropdownOpen}
        className='auth-header-container'
        ref={dropdownRef}
      >
        <div className='title-container'>
          <div className={`title ${isOpen ? 'open' : ''}`}>
            <AuthSVG />
          </div>
          <p>{dictionary.logIn}</p>
        </div>
        <div className={`dropdown ${isOpen ? 'show' : ''}`}>
          <div
            className='log-in dropdownBtn'
            onClick={() => setLogIsOpen(true)}
          >
            {dictionary.logIn}
          </div>
          <div
            className='register dropdownBtn'
            onClick={() => setIsRegisterOpen(true)}
          >
            {dictionary.register}
          </div>
        </div>
      </div>
      {logIsOpen && <LogIn onRegisterModal={handleLogin} close={closeLogIn} />}
      {isRegisterOpen && <Register onClose={closeRegister} />}
    </>
  )
}

export default AuthHeader
