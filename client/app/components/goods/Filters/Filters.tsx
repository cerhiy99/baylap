'use client'
import React from 'react'
import Categories from './Categories'
import './Filters.scss'
import Brends from './Brends'
import VolumeSelector from './VolumeOption'
import GenderSelector from './GenderSelector'
import PriceSelector from './PriceSelector'
import Appointment from './Appointment'
import { Locale } from '@/i18n.config'

type Category = {
  id: number
  name: string
}

type Props = {
  lang: Locale
}

const categoriesList: Category[] = [
  { id: 1, name: 'Автомобілі' },
  { id: 2, name: 'Будинок' },
  { id: 3, name: 'Відпочинок' },
  { id: 4, name: 'Ґаджети' },
  { id: 5, name: 'Дитячі товари' },
  { id: 6, name: 'Електроніка' },
  { id: 7, name: 'Європейські продукти' },
  { id: 8, name: 'Жіночий одяг' },
  { id: 9, name: 'Засоби для догляду' },
  { id: 10, name: 'Інструменти' },
  { id: 11, name: 'Їжа' },
  { id: 12, name: 'Йога-товари' },
  { id: 13, name: 'Косметика' },
  { id: 14, name: 'Книги' },
  { id: 15, name: 'Меблі' },
  { id: 16, name: 'Одяг' },
  { id: 17, name: 'Посуд' },
  { id: 18, name: 'Спорттовари' },
  { id: 19, name: 'Текстиль' },
  { id: 20, name: 'Фільми та серіали' },
  { id: 21, name: 'Фотоапарати' },
  { id: 22, name: 'Чоловічий одяг' },
  { id: 23, name: 'Шкільне приладдя' },
  { id: 24, name: 'Щоденники' },
  { id: 25, name: 'Ювелірні вироби' },
  { id: 26, name: '0-3 роки дитині' },
  { id: 27, name: '1-квартирні товари' }
]

const Filters = ({ lang }: Props) => {
  return (
    <div className='filters-container'>
      <Categories listCategories={categoriesList} />
      <Brends lang={lang} />
      <VolumeSelector />
      <Appointment />
      <GenderSelector />
      <PriceSelector />
    </div>
  )
}

export default Filters
