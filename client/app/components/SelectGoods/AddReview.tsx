'use client'
import React, { useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import './AddReview.scss'

type Props = {
  dictionary: any
}

const AddReview = ({ dictionary }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const togglePanel = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      alert('Будь ласка, підтвердіть, що ви не робот!')
      return
    }
    alert('Відгук відправлено!')
  }

  return (
    <div className='leave-review'>
      <div className='leave-review-title'>
        <p>{dictionary.leaveReviesText}</p>
        <button onClick={togglePanel}>{dictionary.leaveRevies}</button>
      </div>
      {/* Панелька з формою */}
      <div className={`review-panel ${isOpen ? 'open' : ''}`}>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder='Напишіть свій відгук тут...'
            required
            className='review-input'
          ></textarea>
          <HCaptcha
            sitekey='YOUR_HCAPTCHA_SITEKEY'
            onVerify={token => setCaptchaToken(token)}
          />
          <button type='submit' className='submit-btn'>
            Надіслати відгук
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddReview
