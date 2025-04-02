'use client'
import React, { useEffect, useState } from 'react'
import './SelectGoodsTextContainer.scss'
import ReviewsSVG from '../../assest/Goods/Revies.svg'
import BasketSVG from '../../assest/Goods/BasketBig.svg'
import LikeSVG from '../../assest/Goods/LikeBig.svg'
import NewPostSVG from '../../assest/Goods/NewPost.svg'
import UkrPostSVG from '../../assest/Goods/UkrPost.svg'
import MyRating from './MyRating'
import { Locale } from '@/i18n.config'
import Link from 'next/link'
import AvailabilityTrue from '../../assest/Goods/AvailubutlyTrue.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import {
  addToBasket,
  addToLike,
  removeFromLike
} from '@/app/store/reducers/cartReducer'

type Props = {
  selectGoods: any
  dictionary: any
  setVolume: any
  selectVolume: number
  lang: Locale
}

const SelectGoodsTextContainer = ({
  selectGoods,
  dictionary,
  setVolume,
  selectVolume,
  lang
}: Props) => {
  const [selectVolumeIdx, setSelectVolumeIdx] = useState(0)
  const [clickedVolumeIdx, setClickedVolumeIdx] = useState(0)
  const [isInLike, setisInLike] = useState(false)
  const { like } = useSelector((state: RootState) => state.BasketAndLike)
  const dispatch = useDispatch()
  useEffect(() => {
    setisInLike(like.findIndex(x => x.id == selectGoods.id) != -1)
  }, [like])

  const inLike = (e: any) => {
    e.preventDefault()
    if (!isInLike) {
      dispatch(
        addToLike({
          id: selectGoods.id,
          nameUA: selectGoods.name,
          nameRU: selectGoods.name,
          volume: {
            id: selectGoods.listVolume[selectVolume].id,
            img: selectGoods.listVolume[selectVolume].listImg[0],
            price: selectGoods.listVolume[selectVolume].price,
            volume: selectGoods.listVolume[selectVolume].volume,
            discount: selectGoods.listVolume[selectVolume].discount,
            priceWithDiscount:
              selectGoods.listVolume[selectVolume].priceWithDiscount
          }
        })
      )
    } else {
      dispatch(removeFromLike(selectGoods.id))
    }
  }
  const [isInBasket, setIsInBasket] = useState(false) //тимчасово
  const { basket } = useSelector((state: RootState) => state.BasketAndLike)

  useEffect(() => {
    setIsInBasket(basket.findIndex(x => x.id == selectGoods.id) != -1)
  }, [basket])

  const inBasket = (e: any) => {
    e.preventDefault()
    if (!isInBasket) {
      dispatch(
        addToBasket({
          id: selectGoods.id,
          nameUA: selectGoods.name,
          nameRU: selectGoods.name,
          volume: {
            id: selectGoods.listVolume[selectVolume].id,
            img: selectGoods.listVolume[selectVolume].listImg[0],
            price: selectGoods.listVolume[selectVolume].price,
            volume: selectGoods.listVolume[selectVolume].volume,
            discount: selectGoods.listVolume[selectVolume].discount,
            priceWithDiscount:
              selectGoods.listVolume[selectVolume].priceWithDiscount
          },
          count: 1
        })
      )
    }
  }

  const clickToVolume = (idx: number) => {
    setSelectVolumeIdx(idx)
    setVolume(idx)
    setClickedVolumeIdx(idx)
  }

  const hoverVolume = (idx: number) => {
    setSelectVolumeIdx(idx)
    setVolume(idx)
  }

  const unHoverVolume = () => {
    setSelectVolumeIdx(clickedVolumeIdx)
    setVolume(clickedVolumeIdx)
  }

  return (
    <div className='text-container'>
      <div className='text-container-card rating-reviews-and-other-and-art'>
        <div className='rating-and-reviews'>
          <MyRating rating={selectGoods.rating} />
          <div className='reviews'>
            <ReviewsSVG />
            <span>
              {dictionary.reviews} {selectGoods.listReviews.length}
            </span>
          </div>
          <div className='write-review'>{dictionary.writeReview}</div>
          <div className='is-availability'>
            <AvailabilityTrue /> <p>В наявності</p>
          </div>
        </div>
        <div className='art'>{selectGoods.art}</div>
      </div>
      <div className='text-container-card list-info-for-made'>
        <div className='info-for-made producer'>
          <div className='title'>{dictionary.producer}</div>
          <div className='line' />
          <div className='info'>
            <Link href={`/${lang}/goods/1?producer=${selectGoods.producer.id}`}>
              {selectGoods.producer.name}
            </Link>
          </div>
        </div>
        <div className='info-for-made country'>
          <div className='title'>{dictionary.countryProducer}</div>
          <div className='line' />
          <div className='info'>{selectGoods.countryMade}</div>
        </div>
        <div className='info-for-made list-masa'>
          <div className='title'>{dictionary.masa}</div>
          <div className='line' />
          <div className='info' onMouseLeave={() => unHoverVolume()}>
            {selectGoods.listVolume.map(
              (
                x: {
                  id: number
                  img: string
                  price: number
                  discount: number
                  volume: string
                  priceWithDiscount: number
                },
                idx: number
              ) => (
                <div
                  key={x.id}
                  onMouseEnter={() => hoverVolume(idx)}
                  onClick={e => {
                    e.preventDefault()
                    clickToVolume(idx)
                  }}
                  className={`masa ${selectVolumeIdx == idx && 'masa-select'}`}
                >
                  {x.volume}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div id='selectGoodsText' className='text-container-card buy'>
        <div className='price-container-with-width'>
          <div className='price-container'>
            <div className='price-no-discount-and-discount'>
              <div className='price-no-discount'>
                {selectGoods.listVolume[selectVolumeIdx].price} <span>₴</span>
              </div>
              <div className='discount'>
                -{selectGoods.listVolume[selectVolumeIdx].discount}%
              </div>
            </div>
            <div className='price-with-discount'>
              {selectGoods.listVolume[selectVolumeIdx].priceWithDiscount}{' '}
              <span>₴</span>
            </div>
          </div>
        </div>
        <div className='button-buy'>
          <button onClick={inBasket}>
            <BasketSVG /> {dictionary.buy}
          </button>
        </div>
        <div className='fast-buy'>
          <button>{dictionary.fastBuy}</button>
        </div>
        <div className={`like ${isInLike ? 'isLike' : ''}`} onClick={inLike}>
          <LikeSVG />
        </div>
      </div>
      <div className='text-container-card delivery'>
        <h4>{dictionary.delivery}</h4>
        <div className='list-post'>
          <div className='title'>
            <NewPostSVG />
            <h4>{dictionary.newPost}</h4>
          </div>
          <ul>
            <li>{dictionary.department}</li>
            <li>{dictionary.inPostmat}</li>
            <li>{dictionary.curuer}</li>
          </ul>
        </div>
        <div className='list-post'>
          <div className='title'>
            <UkrPostSVG />
            <h4>{dictionary.urkPost}</h4>
          </div>
          <ul>
            <li>{dictionary.deliveryUrkPost}</li>
          </ul>
        </div>
        <div className='info'>{dictionary.deliveryInfo}</div>
      </div>
      <div className='pay'>
        <h4>{dictionary.pay}</h4>
        <div className='info'>{dictionary.payInfo}</div>
      </div>
    </div>
  )
}

export default SelectGoodsTextContainer
