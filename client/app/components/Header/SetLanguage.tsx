import { Locale } from '@/i18n.config'
import React from 'react'
import './SetLanguage.scss'
import Link from 'next/link'

type Props = {
  lang: Locale
}

const SetLanguage = ({ lang }: Props) => {
  const select: React.CSSProperties = {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 650,
    lineHeight: '12px',
    textAlign: 'center',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#05172F',
    width: '50px',
    height: '25px'
  }
  const noSelect: React.CSSProperties = {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '12px',
    textAlign: 'center',
    widows: '50px',
    color: '#999',
    textDecoration: 'none'
  }

  const spanStyle: React.CSSProperties = {
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '15px',
    textAlign: 'left',
    color: '#a3aebd',
    textDecoration: 'none'
  }

  return (
    <div className='set-language-container'>
      <Link style={lang == 'ua' ? select : noSelect} href='/ua'>
        УКР
      </Link>
      <Link style={lang == 'ru' ? select : noSelect} href='/ru'>
        РУС
      </Link>
    </div>
  )
}

export default SetLanguage
