import { Locale } from '@/i18n.config'
import React from 'react'
import './Sort.scss'

type Props = {
  lang: Locale
}

const Sort = (props: Props) => {
  return (
    <div className='sort-container'>
      <p>Сортувати по:</p>
      <div className='list-sort-for'>
        <span className='active'>популярності</span>
        <span>ціні</span>
        <span>назві</span>
        <span>кількістю запитів</span>
        <span>рейтингу</span>
      </div>
    </div>
  )
}

export default Sort
