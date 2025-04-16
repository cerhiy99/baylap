'use client'
import React, { useState, useEffect, useRef } from 'react'
import './AuthHeader.scss'
import AuthSVG from '../../assest/Header/Auth.svg'
import { Locale } from '@/i18n.config'
import LogIn, { FormLoginProps } from './LogIn'
import Register, { FormRegisterProps } from './Register'
import { useRouter } from 'next/navigation'

type Props = {
  iconColor?: string
  dictionary: any
  lang: Locale
  onFormClose?: () => void
}

const AuthHeader = ({
  iconColor = 'white',
  dictionary,
  lang,
  onFormClose
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [logIsOpen, setLogIsOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const router = useRouter()
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

  const submitRegister = (e: React.FormEvent, formData: FormRegisterProps) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    if (onFormClose) onFormClose()
    // Add your registration logic here
  }
  const submitLogin = (formData: FormLoginProps) => {
    console.log('Form submitted:', formData)
    if (onFormClose) onFormClose()
    // Add your registration logic here
    router.push(`/${lang}/user-cabinet`)
  }

  useEffect(() => {
    if (logIsOpen || isRegisterOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [logIsOpen, isRegisterOpen])

  return (
    <>
      <div
        onMouseLeave={toggleDropdownClose}
        onMouseEnter={toggleDropdownOpen}
        className='auth-header-container'
        ref={dropdownRef}
      >
        <div className='title-container' onClick={() => setLogIsOpen(true)}>
          <div className={`title ${isOpen ? 'open' : ''}`}>
            <AuthSVG color={iconColor} />
          </div>
          <p>{dictionary.logIn}</p>
        </div>
        {/* <div className={`dropdown ${isOpen ? 'show' : ''}`}>
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
        </div> */}
      </div>
      {logIsOpen && (
        <LogIn
          onSubmit={submitLogin}
          onRegisterModal={handleLogin}
          close={closeLogIn}
          lang={lang}
        />
      )}
      {isRegisterOpen && (
        <Register
          onSubmit={submitRegister}
          onClose={closeRegister}
          lang={lang}
        />
      )}
    </>
  )
}

export default AuthHeader
