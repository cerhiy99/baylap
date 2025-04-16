'use client'

import { Locale } from '@/i18n.config'
import './selectedPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import Image from 'next/image'
import MyRating from '@/app/components/SelectGoods/MyRating'
import { Rating } from '@mui/material'
import ReviewsSVG from '@/app/assest/Goods/Revies.svg'
import BasketSVG from '@/public/svgs/userNavigation/Del.svg'
import Link from 'next/link'
import { removeFromBasket } from '@/app/store/reducers/cartReducer'

const SelectedProductsPage = ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  const dispatch = useDispatch()
  const { basket } = useSelector((state: RootState) => state.BasketAndLike)

  const delWithBasket = (id: number) => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className='selectedProducts'>
      <div className='selectedProducts__title'>Обрані товари</div>
      <div className='selectedProducts__container'>
        {basket.length === 0 ? (
          <div className='selectedProducts__item'>
            <div className='selectedProducts__noneWrapper'>
              <div className='selectedProducts__none'>Ваше обране пусте</div>
              <div className='selectedProducts__none--link'>
                Перейти на <Link href={`/${lang}`}>головну</Link>
              </div>
            </div>
          </div>
        ) : (
          basket.map(product => (
            <div className='selectedProducts__item' key={product.id}>
              <div className='item-image'>
                <Image
                  src={`/images/adminProduct.jpg`}
                  width={91}
                  height={129}
                  alt={'selected product'}
                />
              </div>
              <div className='itemInfo'>
                <div className='itemInfo__description'>
                  {product.nameRU ||
                    'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г '}
                </div>
                <div className='itemInfo__rating'>
                  <div className='rating'>
                    <Rating
                      name='half-rating-read'
                      defaultValue={4.5}
                      precision={0.1}
                      readOnly
                      sx={{
                        fontSize: '20px',
                        color: '#D93A3F'
                      }}
                    />
                  </div>
                  <div className='rewiev'>
                    <ReviewsSVG />
                    <span>Відгуків : 23</span>
                  </div>
                </div>
                <div className='itemInfo__discount'>
                  <div className='prevPrice'>250₴</div>
                  <div className='discount'>25%</div>
                </div>
                <div className='itemInfo__currentPrice'>{'104₴'}</div>
              </div>
              <div className='itemDelete'>
                <button onClick={() => delWithBasket(product.id)}>
                  <BasketSVG color={'red'} width={21} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
export default SelectedProductsPage
