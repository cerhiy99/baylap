'use client'

import type React from 'react'

import type { Locale } from '@/i18n.config'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './Admin.scss'
import HomeSVG from '@/app/assest/Admin/Home.svg'
import ExitSVG from '@/app/assest/Admin/Exit.svg'

type TypeofRole = 'admin' | 'manager'
const isRole: TypeofRole = 'admin'

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) footer.style.display = 'none'
    const header = document.querySelector('header')
    if (header) header.style.display = 'none'
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className='admin-container'>
      <div className='header-admin-cont'>
        <div className='header-admin'>
          <div className='left'>
            <Link href={`/${lang}`} className='header__link'>
              <HomeSVG />
            </Link>
            <div className='header__Button' onClick={toggleMobileMenu}>
              <HomeSVG />
            </div>
            <div className='desktop-menu'>
              {isRole === 'admin' && (
                <>
                  <div className='goods-dropdown-container'>
                    <Link href={`/${lang}/admin/goods`}>Товары</Link>
                    <div className='goods-dropdown'>
                      <Link href={`/${lang}/admin/add-product`}>
                        Добавить товар
                      </Link>
                    </div>
                  </div>

                  <Link href={`/${lang}/admin/category`}>Категории</Link>
                  <Link href={`/${lang}/admin/orders`}>Заказы</Link>
                </>
              )}
              <Link href={`/${lang}/admin/orders-for-manager`}>
                Заказы для менеджера
              </Link>
              {isRole === 'admin' && (
                <>
                  <Link href={`/${lang}/admin/reviews`}>Комментарии</Link>
                  <Link href={`/${lang}/admin/users`}>Пользователи</Link>
                </>
              )}
            </div>
          </div>

          <div className='right'>
            <Link href={'#'} className='admin-greeting'>
              Добрый день, {isRole === 'admin' ? 'Admin' : 'Manager'}
            </Link>
            <div className='right__wrapper'>
              <Link href={`/${lang}/admin/exit`}>Выход</Link>
              <ExitSVG color='white' />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-content'>
          {isRole === 'admin' && (
            <>
              <Link
                href={`/${lang}/admin`}
                onClick={toggleMobileMenu}
                className='mobile-menu-item'
              >
                Главная панель
              </Link>
              <Link
                href={`/${lang}/admin/goods`}
                onClick={toggleMobileMenu}
                className='mobile-menu-item'
              >
                Товары
              </Link>
              <Link
                href={`/${lang}/admin/add-product`}
                onClick={toggleMobileMenu}
                className='mobile-menu-item'
              >
                Добавить товар
              </Link>

              <Link
                href={`/${lang}/admin/category`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Категории
              </Link>
              <Link
                href={`/${lang}/admin/orders`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Заказы
              </Link>
            </>
          )}
          <Link
            href={`/${lang}/admin/orders-for-manager`}
            className='mobile-menu-item'
            onClick={toggleMobileMenu}
          >
            Заказы для менеджера
          </Link>

          {isRole === 'admin' && (
            <>
              <Link
                href={`/${lang}/admin/reviews`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Комментарии
              </Link>
              <Link
                href={`/${lang}/admin/users`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Пользователи
              </Link>
            </>
          )}
          <Link
            href={`/${lang}`}
            onClick={toggleMobileMenu}
            className='mobile-menu-item'
          >
            Перейти на сайт
          </Link>
          <div className='mobile-menu-footer'>
            <Link
              href={`/${lang}/admin/exit`}
              className='mobile-menu-item exit-link'
              onClick={toggleMobileMenu}
            >
              Выход <ExitSVG color='white' />
            </Link>
          </div>
        </div>
      </div>

      <div className='children'>{children}</div>
    </div>
  )
}
