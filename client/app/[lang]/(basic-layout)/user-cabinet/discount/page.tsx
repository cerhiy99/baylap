'use client'

import { Locale } from '@/i18n.config'
import './discountPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import Image from 'next/image'

import { Rating } from '@mui/material'
import ReviewsSVG from '@/app/assest/Goods/Revies.svg'
import BasketSVG from '@/public/svgs/userNavigation/Del.svg'
import Link from 'next/link'
import { removeFromBasket } from '@/app/store/reducers/cartReducer'
import DiscountLevel from './components/discountComponent'

const lang = 'ru'
const SelectedProductsPage = () => {
  const dispatch = useDispatch()
  const { basket } = useSelector((state: RootState) => state.BasketAndLike)

  const delWithBasket = (id: number) => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className='PageDiscount'>
      <div className='PageDiscount__title'>Персональна знижка</div>
      <div className='PageDiscount__container'>
        <DiscountLevel currentAmount={1000} lang={lang} />
      </div>
    </div>
  )
}
export default SelectedProductsPage
