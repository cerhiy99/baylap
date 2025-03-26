import { Locale } from '@/i18n.config'
import React from 'react'
import Logo from '../../assest/Logo.svg'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import DroprownUrles from './DroprownUrles'
import './Header.scss'
import ContactWithUs from './ContactWithUs'
import SetLanguage from './SetLanguage'
import CatalogSearchAndOther from './CatalogSearchAndOther'
import Update from './Update'

type Props = {
  lang: Locale
}

const Header = async ({ lang }: Props) => {
  const { header } = await getDictionary(lang)
  return (
    <div className='header-container'>
      <div className='list-url-and-logo-container'>
        <div className='list-url-and-logo'>
          <div className='logo-container'>
            <Link href={`/${lang}`}>
              <Logo />
            </Link>
          </div>
          <div className='list-url'>
            <div className='discount'>
              <Link href={`/${lang}/goods/discount/1`}>{header.discount}</Link>
            </div>
            <DroprownUrles lang={lang} dictionary={header.aboutShop} />
            <Link href={`/${lang}/brands`}>{header.brands}</Link>
            <Link href={`/${lang}/cooperation`}>{header.cooperation}</Link>
          </div>
          <div className='list-url-and-language-and-contact'>
            <ContactWithUs lang={lang} dictionary={header.contact} />
            <SetLanguage lang={lang} />
          </div>
        </div>
      </div>
      <CatalogSearchAndOther dictionary={header} lang={lang} />
      <Update />
    </div>
  )
}

export default Header
