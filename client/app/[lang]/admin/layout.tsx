'use client'

import { Locale } from '@/i18n.config'
import Link from 'next/link'
import { useEffect } from 'react'
import './Admin.scss'
import HomeSVG from '../../assest/Admin/Home.svg'
import ExitSVG from '../../assest/Admin/Exit.svg'

type TypeofRole = 'admin' | 'manager'
const isRole: TypeofRole = 'admin'

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) footer.style.display = 'none'
    const header = document.querySelector('header')
    if (header) header.style.display = 'none'
  }, [])

  return (
    <div className='admin-container'>
      <div className='header-admin-cont'>
        <div className='header-admin'>
          <div className='left'>
            <Link href={`/${lang}`}>
              <HomeSVG />
            </Link>
            {isRole === 'admin' && (
              <>
                <div className='goods-dropdown-container'>
                  <Link href={`/${lang}/admin/goods`}>Товари</Link>
                  <div className='goods-dropdown'>
                    <Link href={`/${lang}/admin/add-product`}>
                      Добавити товар
                    </Link>
                  </div>
                </div>

                <Link href={`/${lang}/admin/category`}>Категорії</Link>
                <Link href={`/${lang}/admin/orders`}>Замовлення</Link>
              </>
            )}
            <Link href={`/${lang}/admin/orders-for-meneger`}>
              Замовлення для менеджера
            </Link>
            {isRole === 'admin' && (
              <>
                <Link href={`/${lang}/admin/reviews`}>Коментарі</Link>
                <Link href={`/${lang}/admin/users`}>Користувачі</Link>
              </>
            )}
          </div>

          <div className='right'>
            <Link href={'#'}>
              Добрий день, {isRole === 'admin' ? 'Admin' : 'Manager'}
            </Link>
            <div className='right__wrapper'>
              <Link href={`/${lang}/admin/exit`}>Вихід</Link>
              <ExitSVG />
            </div>
          </div>
        </div>
      </div>
      <div className='children'>{children}</div>
    </div>
  )
}
