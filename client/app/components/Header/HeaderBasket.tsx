'use client'
import React, { useState, useEffect, useRef } from 'react'
import './HeaderBasket.scss'
import BasketSVG from '../../assest/Header/Basket.svg'
import DelSVG from '../../assest/Header/Del.svg'
import { Locale } from '@/i18n.config'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import Image from 'next/image'
import {
  decrementItemCount,
  incrementItemCount,
  removeFromBasket
} from '@/app/store/reducers/cartReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Props = {
  lang: Locale
  dictionary: any
}

const HeaderBasket = ({ lang, dictionary }: Props) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  const { basket } = useSelector((state: RootState) => state.BasketAndLike)

  const toggleDropdownOpen = () => {
    setIsOpen(true)
  }
  const toggleDropdownClose = () => {
    setIsOpen(false)
  }

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
    setCount(basket.length)
  }, [basket])

  const delWithBasket = (id: number) => {
    dispatch(removeFromBasket(id))
  }

  const plus = (id: number) => {
    dispatch(incrementItemCount(id))
  }

  const minus = (id: number) => {
    dispatch(decrementItemCount(id))
  }

  const [sum, setSum] = useState(0)
  useEffect(() => {
    let tempSum = 0
    basket.forEach(x => (tempSum += x.volume.priceWithDiscount * x.count))
    setSum(tempSum)
  }, [basket])

  return (
    <div
      onMouseEnter={toggleDropdownOpen}
      onMouseLeave={toggleDropdownClose}
      className='header-basket-container'
      ref={dropdownRef}
    >
      <div className='title-container'>
        <div className={`title ${isOpen ? 'open' : ''}`}>
          <BasketSVG />
          {count > 0 && (
            <div className='count'>
              <span>{count}</span>
            </div>
          )}
        </div>
        <p>Корзина</p>
      </div>
      <div className={`dropdown ${isOpen ? 'show' : ''}`}>
        {basket.length == 0 ? (
          <>
            <p>{dictionary.emptyTitle}</p>
            <span>{dictionary.emptyDescription}</span>
          </>
        ) : (
          <div className='basket-list'>
            <p>Корзина</p>
            {basket.map(x => (
              <div key={x.id} className='itemWrapper'>
                <Link href={`/${lang}/select-goods/${x.id}`}>
                  <div className='basket-goods'>
                    <div className='basket-goods-img'>
                      {/* <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER}${x.volume.img}`}
                        width={82}
                        height={82}
                        alt={x.nameUA}
                      /> */}
                      <Image
                        src={`/images/adminProduct.jpg`}
                        width={82}
                        height={82}
                        alt={x.nameUA}
                      />
                    </div>
                    <div className='basket-goods-text'>
                      <h3>{x.nameUA}</h3>
                      <div className='add-or-minus-or-basket'>
                        <div className='add-or-minus'>
                          <div
                            className='arrow minus'
                            onClick={e => {
                              e.stopPropagation()
                              e.preventDefault()
                              if (x.count > 1) minus(x.id)
                            }}
                          >
                            <svg
                              width='14'
                              height='2'
                              viewBox='0 0 14 2'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M0 1H14'
                                stroke='white'
                                strokeWidth='2'
                              />
                            </svg>
                          </div>
                          <div className='count'>{x.count}</div>
                          <div
                            className='arrow plus'
                            onClick={e => {
                              e.stopPropagation()
                              e.preventDefault()
                              plus(x.id)
                            }}
                          >
                            <svg
                              width='14'
                              height='14'
                              viewBox='0 0 14 14'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M0 7L14 7'
                                stroke='white'
                                strokeWidth='2'
                              />
                              <path
                                d='M7 0L7 14'
                                stroke='white'
                                strokeWidth='2'
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                            delWithBasket(x.id)
                          }}
                          className='del'
                        >
                          <DelSVG />
                        </div>
                      </div>
                      <div className='price-count-volume'>
                        <div className='volume-and-count'>
                          <div className='count'>{x.volume.volume}</div>
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        {basket.length > 0 && (
          <div className='footer-basket'>
            <div className='text'>
              <span>Вместе, без доставки</span>
              <p>
                {sum} <span>₴</span>
              </p>
            </div>
            <div className='button-make-order'>
              <button
                onClick={() => {
                  setIsOpen(false)
                  router.push(`/${lang}/make-order`)
                }}
              >
                Оформити замовлення
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderBasket
