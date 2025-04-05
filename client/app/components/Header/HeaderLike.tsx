'use client'
import React, { useState, useEffect, useRef } from 'react'
import './HeaderLike.scss'
import LikeSVG from '../../assest/Header/Like.svg'
import { Locale } from '@/i18n.config'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import Image from 'next/image'
import DelSVG from '../../assest/Header/Del.svg'
import { addToBasket, removeFromLike } from '@/app/store/reducers/cartReducer'
import Link from 'next/link'

type Props = {
  dictionary: any
  lang: Locale
}

const HeaderLike = ({ dictionary, lang }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  const { like } = useSelector((state: RootState) => state.BasketAndLike)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    setCount(like.length)
  }, [like])

  const delWithLike = (id: number) => {
    dispatch(removeFromLike(id))
  }

  const [price, setPrice] = useState(0)

  useEffect(() => {
    let sum = 0
    like.forEach(x => (sum += x.volume.priceWithDiscount))
    setPrice(sum)
  }, [like])

  const handlerAddToCart = (id: number) => {
    const currentLike = like.filter(currentItem => currentItem.id === id)
    dispatch(addToBasket({ ...currentLike[0], count: 1 }))
    dispatch(removeFromLike(id))
    setIsOpen(false)
  }

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className='header-like-container'
      ref={dropdownRef}
    >
      <div className={`title ${isOpen ? 'open' : ''}`}>
        <LikeSVG />

        {count > 0 && (
          <div className='count'>
            <span>{count}</span>
          </div>
        )}
      </div>
      <div className={`dropdown ${isOpen ? 'show' : ''}`}>
        {like.length == 0 ? (
          <>
            <p className='empty-title'>{dictionary.emptyTitle}</p>
            <span>{dictionary.emptyDescription}</span>
          </>
        ) : (
          <div className='liked-container'>
            <p>Обране</p>
            {like.map(x => (
              <>
                <div className='itemWrapper' key={x.id}>
                  <Link href={`/${lang}/select-goods/${x.id}`}> </Link>
                  <div className='liked-basket'>
                    <div className='basket-goods-img'>
                      <Image
                        src={`/images/adminProduct.jpg`}
                        width={82}
                        height={82}
                        alt={x.nameUA}
                      />
                      {/* <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER}${x.volume.img}`}
                        width={82}
                        height={82}
                        alt={x.nameUA}
                      /> */}
                    </div>
                    <div className='basket-goods-text'>
                      <h3>{x.nameUA}</h3>
                      <div className='price-count-volume'>
                        <div className='volume-and-count'>
                          <div className='volume'>{x.volume.volume}</div>
                        </div>
                        <div className='price-container'>
                          <div className='price-no-discount'>
                            {x.volume.price} ₴
                          </div>
                          <div className='price-with-discount'>
                            {x.volume.priceWithDiscount} ₴
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={e => {
                        e.preventDefault()
                        delWithLike(x.id)
                      }}
                      className='del'
                    >
                      <DelSVG />
                    </div>
                  </div>

                  <div className='button-with-price'>
                    <div className='price'>
                      <p>Вместе, без доставки</p>
                      <div className='price-grn'>
                        {price} <span className='grn'>₴</span>
                      </div>
                    </div>
                    <div className='in-basket'>
                      <button onClick={() => handlerAddToCart(x.id)}>
                        Добавити в корзину
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
        {/* {like.length > 0 && ( */}

        {/* )} */}
      </div>
    </div>
  )
}

export default HeaderLike
