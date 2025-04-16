'use client'

import '../Cabinet.scss'
import PersonalData from '@/public/svgs/posters/personal.svg'
import Discounts from '@/public/svgs/posters/discount.svg'
import Shopping from '@/public/svgs/posters/shopping.svg'
import Favorities from '@/public/svgs/posters/favorities.svg'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const TabNavigation = ({ lang }: { lang: Locale }) => {
  const [isNavigation, setNavigation] = useState<boolean>(false)
  const pathName = usePathname()

  useEffect(() => {
    const resizeWindow = () => {
      const width = window.innerWidth
      return setNavigation(width < 1024)
    }
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  if (
    isNavigation ||
    pathName === '/ua/user-cabinet' ||
    pathName === '/ru/user-cabinet'
  )
    return (
      <>
        <div className='tabs__container'>
          <div className='tab__item'>
            <Link href={`/${lang}/user-cabinet/personal-info`}></Link>
            <div className='tab__svg'>
              <PersonalData />
            </div>
            <div className='tab-content'>
              <div className='tab__title'>Редагування персональних даних</div>
              <div className='tab__text'>
                Змініть Ваші персональні дані зараз
              </div>
            </div>
          </div>
          <div className='tab__item'>
            <Link href={`/${lang}/user-cabinet/orders`}></Link>

            <div className='tab__svg'>
              <Shopping />
            </div>
            <div className='tab-content'>
              <div className='tab__title'>Ваша історія покупок</div>
              <div className='tab__text'>Дізнайтеся історію Ваших покупок</div>
            </div>
          </div>
          <div className='tab__item'>
            <Link href={`/${lang}/user-cabinet/discount`}></Link>
            <div className='tab__svg'>
              <Discounts />
            </div>
            <div className='tab-content'>
              <div className='tab__title'>Ваша персональна знижка</div>
              <div className='tab__text'>Дізнайтеся про Ваші накопичення</div>
            </div>
          </div>
          <div className='tab__item'>
            <Link href={`/${lang}/user-cabinet/selected-products`}></Link>
            <div className='tab__svg'>
              <Favorities />
            </div>
            <div className='tab-content'>
              <div className='tab__title'>Ваші обрані товари</div>
              <div className='tab__text'>Перегляньте Ваші вподобані товари</div>
            </div>
          </div>
        </div>
      </>
    )
}

export default TabNavigation
