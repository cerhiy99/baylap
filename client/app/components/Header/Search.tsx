'use client'
import { Locale } from '@/i18n.config'
import React, { useState } from 'react'
import './Search.scss'
import SearchSVG from '../../assest/Header/Search.svg'

type Props = {
  lang: Locale
  dictionary: any
}

const Search = ({ lang, dictionary }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('')
  return (
    <div className='header-search'>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder={dictionary.placeholder}
      />
      <div className='search-svg'>
        <SearchSVG />
      </div>
    </div>
  )
}

export default Search
