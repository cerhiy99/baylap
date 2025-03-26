'use client'
import React, { useState } from 'react'
import './MiniGoods.scss'
import DiscountOrFreeShippingOrOther from './DiscountOrFreeShippingOrOther'
import Like from './Like'
import { Rating } from '@mui/material'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import InBasket from './InBasket'

type Props = {
  goods: {
    id: number
    isDiscount: boolean
    isFreeShipping: boolean
    isBestseller: boolean //Хит продаж
    isNovetly: boolean
    name: string
    countStar: number
    countReview: number
    listVolume: [
      {
        id: number
        img: string
        price: number
        discount: number
        volume: string
        priceWithDiscount: number
      }
    ]
  }
  dictionary: any
  lang: Locale
}

const MiniGoods = ({ goods, dictionary, lang }: Props) => {
  const [selectVolumeIdx, setSelectVolumeIdx] = useState(0)

  const [clickedVolumeIdx, setClickedVolumeIdx] = useState(0)

  const clickToVolume = (idx: number) => {
    setSelectVolumeIdx(idx)
    setClickedVolumeIdx(idx)
  }

  const hoverVolume = (idx: number) => {
    setSelectVolumeIdx(idx)
  }

  const unHoverVolume = () => {
    setSelectVolumeIdx(clickedVolumeIdx)
  }

  return (
    <Link
      href={`/${lang}/select-goods/${goods.id}`}
      className='mini-goods-container'
    >
      <div className='mini-goods-main1'>
        <div className='like-and-discount-or-other'>
          <DiscountOrFreeShippingOrOther
            isNovetly={goods.isNovetly}
            isBestseller={goods.isBestseller}
            isFreeShipping={goods.isFreeShipping}
            isDiscount={goods.isDiscount}
          />
          <div className='like-svg-container'>
            <Like selectVolumeIdx={selectVolumeIdx} goods={goods} />
          </div>
        </div>
        <div className='img-container'>
          <img
            src={
              process.env.NEXT_PUBLIC_SERVER +
              goods.listVolume[selectVolumeIdx].img
            }
          />
        </div>
        <h3>{goods.name}</h3>
        <div className='rating-and-reviews'>
          <div className='rating'>
            <Rating
              name='half-rating-read'
              defaultValue={goods.countStar}
              precision={0.5}
              readOnly
            />
            <span>{goods.countStar}</span>
          </div>
          <div className='reviews'>
            {dictionary.reviews} ({goods.countReview})
          </div>
        </div>
        <div className='list-volume' onMouseLeave={() => unHoverVolume()}>
          {goods.listVolume.map((x, idx) => (
            <div
              key={x.id}
              onClick={e => {
                e.preventDefault()
                clickToVolume(idx)
              }}
              onMouseEnter={() => hoverVolume(idx)}
              className={
                selectVolumeIdx == idx ? 'volume select-volume' : 'volume'
              }
            >
              {x.volume}
            </div>
          ))}
        </div>
        <div className='price-and-basket'>
          <div className='price-container'>
            <div className='price-and-discount'>
              <div className='price'>
                {goods.listVolume[selectVolumeIdx].price} ₴
              </div>
              <div className='discount'>
                -{goods.listVolume[selectVolumeIdx].discount}%
              </div>
            </div>
            <div className='price-with-discount'>
              {goods.listVolume[selectVolumeIdx].priceWithDiscount}{' '}
              <span>₴</span>
            </div>
          </div>
          <InBasket selectGoods={goods} selectVolumeIdx={selectVolumeIdx} />
        </div>
      </div>
    </Link>
  )
}

export default MiniGoods
