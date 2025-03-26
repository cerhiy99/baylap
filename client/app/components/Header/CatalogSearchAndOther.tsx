'use client'
import React, { useEffect, useState } from 'react'
import Catalog from './Catalog'
import Search from './Search'
import AuthHeader from './AuthHeader'
import HeaderLike from './HeaderLike'
import HeaderBasket from './HeaderBasket'
import Burger from './Burger/Burger'
import { Locale } from '@/i18n.config'

type Props = {
  dictionary: any
  lang: Locale
}

const heightHeader = 60

const CatalogSearchAndOther = ({ dictionary, lang }: Props) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= heightHeader)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className='catalog-search-and-other-container-static'>
      <div
        className={`catalog-search-and-other-container ${
          scrolled ? 'fixed' : ''
        }`}
      >
        <div className='catalog-search-and-other'>
          <div className='catalog'>
            <Catalog lang={lang} dictionary={dictionary.catalog} />
          </div>
          <div className='burger'>
            <Burger />
          </div>
          <div className='search-with-list-icon'>
            <Search dictionary={dictionary.search} lang={lang} />
            <div className='list-icon-header'>
              <AuthHeader dictionary={dictionary.Auth} lang={lang} />
              <div className='line-vertically' />
              <HeaderLike dictionary={dictionary.Like} lang={lang} />
              <div className='line-vertically' />
              <HeaderBasket dictionary={dictionary.Basket} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogSearchAndOther
