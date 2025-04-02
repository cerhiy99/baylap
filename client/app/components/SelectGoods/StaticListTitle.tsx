'use client'
import React, { useEffect, useRef, useState } from 'react'
import InBasket from './InBasket'
import BasketSVG from '../../assest/Goods/Basket.svg'
import LikeSVG from '../../assest/Goods/Like.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { addToLike, removeFromLike } from '@/app/store/reducers/cartReducer'

const heightHeader = 60 // Висота хедера

const StaticListTitle = ({
  dictionary,
  selectGoods,
  selectVolume
}: {
  dictionary: any
  selectGoods: any
  selectVolume: number
}) => {
  const [selectTitle, setSelectTitle] = useState<number | null>(1)
  const [isSticky, setIsSticky] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  const [isInLike, setisInLike] = useState(false)
  const { like } = useSelector((state: RootState) => state.BasketAndLike)
  const dispatch = useDispatch()

  useEffect(() => {
    const selectGoodsText = document.getElementById('selectGoodsText')

    if (!selectGoodsText) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Перевіряємо, чи елемент знаходиться в зоні хедера
        if (
          entry.boundingClientRect.top < heightHeader &&
          !entry.isIntersecting
        ) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      },
      {
        root: null, // Вікно браузера
        threshold: 0, // Триггер при будь-якому перетині
        rootMargin: `-${heightHeader}px 0px 0px 0px` // Враховує висоту хедера
      }
    )

    observer.observe(selectGoodsText)

    return () => observer.disconnect()
  }, [])

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

  return (
    <div className='list-title-info-header-static'>
      <div
        style={{
          position: 'relative',
          width: '100%',
          boxShadow: 'none',
          transition: 'box-shadow 0.3s ease',
          backgroundColor: 'white'
        }}
        className='list-title-info-header'
      >
        <ul>
          <li className={selectTitle === 1 ? 'select' : ''}>
            {dictionary['list-title-info'][1]}
          </li>
          <li className={selectTitle === 2 ? 'select' : ''}>
            {dictionary['list-title-info'][2]}
          </li>
          <li className={selectTitle === 3 ? 'select' : ''}>
            {dictionary['list-title-info'][3]}
          </li>
          <li className={selectTitle === 4 ? 'select' : ''}>
            {dictionary['list-title-info'][4]}
          </li>
          <li className={selectTitle === 5 ? 'select' : ''}>
            {dictionary['list-title-info'][5]}
          </li>
          <li className={selectTitle === 6 ? 'select' : ''}>
            {dictionary['list-title-info'][6]}
          </li>
        </ul>
      </div>
      <div
        ref={listRef}
        style={{
          position: isSticky ? 'fixed' : 'relative',
          top: isSticky ? `${heightHeader}px` : 'auto',
          zIndex: 9,
          width: isSticky ? 'calc(100% - 5% - 19px)' : '100%',
          boxShadow: isSticky ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
          opacity: isSticky ? 1 : 0,
          transform: isSticky ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          backgroundColor: 'white',
          pointerEvents: isSticky ? 'auto' : 'none'
        }}
        className='list-title-info-header list-title-info-header-none'
      >
        <ul>
          <li className={selectTitle === 1 ? 'select' : ''}>
            {dictionary['list-title-info'][1]}
          </li>
          <li className={selectTitle === 2 ? 'select' : ''}>
            {dictionary['list-title-info'][2]}
          </li>
          <li className={selectTitle === 3 ? 'select' : ''}>
            {dictionary['list-title-info'][3]}
          </li>
          <li className={selectTitle === 4 ? 'select' : ''}>
            {dictionary['list-title-info'][4]}
          </li>
          <li className={selectTitle === 5 ? 'select' : ''}>
            {dictionary['list-title-info'][5]}
          </li>
          <li className={selectTitle === 6 ? 'select' : ''}>
            {dictionary['list-title-info'][6]}
          </li>
        </ul>
        <div className='list-title-info-header-goods'>
          <div className='info-goods'>
            <img
              height={'33px'}
              width={'auto'}
              src={
                process.env.NEXT_PUBLIC_SERVER +
                selectGoods.listVolume[selectVolume].listImg[0]
              }
            />
            <div className='name'>{selectGoods.name}</div>
          </div>
          <div className='sum-container'>
            <div className='sum'>
              <p>{dictionary.sum}</p>
              <span>
                {selectGoods.sum} <div className='grn'>₴</div>
              </span>
            </div>
          </div>
          <div className='button-container2'>
            <InBasket id={selectGoods.id}>
              <button>
                <BasketSVG />
                {dictionary.buy}
              </button>
            </InBasket>
          </div>
          <div className='like-container' onClick={inLike}>
            <LikeSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticListTitle
