'use client'
import React, { useEffect, useState } from 'react'
import './ListFromBasket.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import Link from 'next/link'

type Props = {
  isFinishFillDate: boolean
}

const ListFromBasket = ({ isFinishFillDate }: Props) => {
  const { basket } = useSelector((state: RootState) => state.BasketAndLike)
  const [count, setCount] = useState(0)
  const [sumNoDiscount, setSumNoDiscount] = useState(0)
  const [sumWithDiscount, setSumWithDiscount] = useState(0)
  const [discount, setDiscount] = useState(0)
  useEffect(() => {
    let sumCount = 0
    let sumForSumNoDiscount = 0
    let sumForSumWithDiscount = 0
    basket.forEach(x => {
      sumCount += x.count
      sumForSumNoDiscount += x.volume.price
      sumForSumWithDiscount += x.volume.priceWithDiscount
    })
    setCount(sumCount)
    setSumNoDiscount(sumForSumNoDiscount)
    setSumWithDiscount(sumForSumWithDiscount)
    setDiscount(sumForSumNoDiscount - sumForSumWithDiscount)
  }, [basket])

  return (
    <div className='list-from-basket-container'>
      <div className='list-from-basket'>
        <div className='title'>
          Замовлення <span>{count} товарів</span>
        </div>
        <div className='listBasket'>
          {basket.map(x => (
            <Link
              href={`/ua/select-goods/${x.id}`}
              key={x.id}
              className='goods-make-order'
            >
              <img
                width={90}
                height={90}
                src={process.env.NEXT_PUBLIC_SERVER + x.volume.img}
              />
              <div className='text'>
                <div className='name'>{x.nameUA}</div>
                <div className='count'>{x.count} товар</div>
                <div className='price'>
                  {x.volume.priceWithDiscount} <span>₴</span> /{' '}
                  {x.volume.volume}
                </div>
                {x.volume.discount != 0 && (
                  <div className='price-no-discount'>
                    {x.volume.price} <span>₴</span> / {x.volume.volume}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className='additional-info'>
          <ul>
            {discount > 0 && (
              <>
                <li>
                  <span>Вартість замовлення:</span>
                  <p>{sumNoDiscount} ₴</p>
                </li>
                <li>
                  <span>Знижка:</span>
                  <p>-{discount} ₴</p>
                </li>
              </>
            )}
            <li>
              <span>До оплати без доставки:</span>
              <p>{sumWithDiscount} ₴</p>
            </li>
          </ul>
        </div>
        <div className='button-form-order'>
          <button
            style={{
              cursor: isFinishFillDate ? 'pointer' : 'default',
              opacity: isFinishFillDate ? 1 : 0.3
            }}
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListFromBasket
