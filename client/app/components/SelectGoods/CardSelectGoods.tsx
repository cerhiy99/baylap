'use client'
import React, { useEffect, useRef, useState } from 'react'
import InBasket from './InBasket'
import Image from 'next/image'
import LikeSVG from '../../assest/Goods/LikeBig.svg'
import BasketBig from '../../assest/Goods/BasketBig.svg'
import MyRating from './MyRating'
import ReviewsSVG from '../../assest/Goods/Revies.svg'

type Props = {
  selectGoods: any
  dictionary: any
  selectVolume: number
}

const CardSelectGoods = ({ selectGoods, dictionary, selectVolume }: Props) => {
  const cardGoods = useRef<any>(null)
  const [topFatherElem, setTopFatherElem] = useState(0)

  useEffect(() => {
    const elem = document.querySelector('#aboutGoodsContainer')
    //console.log(43, elem?.getBoundingClientRect().y)
    setTopFatherElem(elem?.getBoundingClientRect().y || -32)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (cardGoods.current) {
        const elem = document.querySelector('#aboutGoodsContainer')
        if (elem) {
          const borderHeight = 0
          const topElem = elem.getBoundingClientRect().y
          const elemHeight = elem.getBoundingClientRect().height
          const heightSelectGoods =
            cardGoods.current.getBoundingClientRect().height
          const heightHeader = 110
          const heightMonitor = window.innerHeight
          if (
            topElem * -1 + heightHeader >
            elemHeight -
              heightMonitor / 2 -
              heightSelectGoods / 2 +
              heightHeader / 2
          ) {
            cardGoods.current.style.position = 'absolute'
            cardGoods.current.style.top = elemHeight - heightSelectGoods + 'px'
            cardGoods.current.style.right = 0
          } else if (
            topElem &&
            topElem <
              heightMonitor / 2 - heightSelectGoods / 2 + heightHeader / 2
          ) {
            /*cardGoods.current.style.top =
              (topElem * -1 + heightHeader).toString() + 'px'*/
            cardGoods.current.style.right = '3%'
            cardGoods.current.style.position = 'fixed'
            cardGoods.current.style.top = `${
              heightMonitor / 2 - heightSelectGoods / 2 + heightHeader / 2
            }px`
          } else {
            cardGoods.current.style.position = 'absolute'
            cardGoods.current.style.right = 0
            cardGoods.current.style.top = -borderHeight + 'px'
          }
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [cardGoods])

  return (
    <div ref={cardGoods} className='select-goods'>
      <div className='img-container'>
        <Image
          src={
            process.env.NEXT_PUBLIC_SERVER +
            selectGoods.listVolume[selectVolume].listImg[0]
          }
          alt={selectGoods.name}
          width={359}
          height={323}
        />
      </div>
      <div className='name'>{selectGoods.name}</div>
      <div className='additional-container'>
        <div className='additionall'>
          <MyRating rating={selectGoods.rating} />
          <div className='reviews'>
            <ReviewsSVG />
            <span>Відгуків: {selectGoods.listReviews.length}</span>
          </div>
          <div className='write-review'>написати відгук</div>
        </div>
        <div className='art'>{selectGoods.art}</div>
      </div>
      <div className='buy'>
        <div className='price'>
          <div className='price-no-discount-and-discount'>
            <div className='price-no-discount'>
              {selectGoods.listVolume[0].price}₴
            </div>
            <div className='discount'>
              -{selectGoods.listVolume[0].discount}%
            </div>
          </div>
          <div className='price-with-discount'>
            {selectGoods.listVolume[0].priceWithDiscount} <span>₴</span>
          </div>
        </div>
        <div className='button-buy'>
          <InBasket id={selectGoods.id}>
            <button>
              <BasketBig /> {dictionary.buy}
            </button>
          </InBasket>
        </div>
        <div className='like'>
          <LikeSVG />
        </div>
      </div>
    </div>
  )
}

export default CardSelectGoods
