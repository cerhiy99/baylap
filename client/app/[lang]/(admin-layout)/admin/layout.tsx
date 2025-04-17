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
              <Link href={`/${lang}/admin/orders-for-manager`}>
                Замовлення для менеджера
              </Link>
              {isRole === 'admin' && (
                <>
                  <Link href={`/${lang}/admin/reviews`}>Коментарі</Link>
                  <Link href={`/${lang}/admin/users`}>Користувачі</Link>
                </>
              )}
            </div>
          </div>

          <div className='right'>
            <Link href={'#'} className='admin-greeting'>
              Добрий день, {isRole === 'admin' ? 'Admin' : 'Manager'}
            </Link>
            <div className='right__wrapper'>
              <Link href={`/${lang}/admin/exit`}>Вихід</Link>
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
              {/* <div className='mobile-menu-item'>
                <Link href={`/${lang}/admin/goods`} onClick={toggleMobileMenu}>
                  Товари
                </Link>
                <div className='mobile-submenu'>
                  <Link
                    href={`/${lang}/admin/add-product`}
                    onClick={toggleMobileMenu}
                  >
                    Добавити товар
                  </Link>
                </div>
              </div> */}

              <Link
                href={`/${lang}/admin`}
                onClick={toggleMobileMenu}
                className='mobile-menu-item'
              >
                Головна панель
              </Link>
              <Link
                href={`/${lang}/admin/goods`}
                onClick={toggleMobileMenu}
                className='mobile-menu-item'
              >
                Товари
              </Link>
              <Link
                href={`/${lang}/admin/add-product`}
                onClick={toggleMobileMenu}
                className='mobile-menu-item'
              >
                Добавити товар
              </Link>

              <Link
                href={`/${lang}/admin/category`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Категорії
              </Link>
              <Link
                href={`/${lang}/admin/orders`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Замовлення
              </Link>
              <Link
                href={`/${lang}`}
                onClick={toggleMobileMenu}
                className='mobile-menu-item'
              >
                Перейти на сайт
              </Link>
            </>
          )}
          <Link
            href={`/${lang}/admin/orders-for-manager`}
            className='mobile-menu-item'
            onClick={toggleMobileMenu}
          >
            Замовлення для менеджера
          </Link>
          {isRole === 'admin' && (
            <>
              <Link
                href={`/${lang}/admin/reviews`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Коментарі
              </Link>
              <Link
                href={`/${lang}/admin/users`}
                className='mobile-menu-item'
                onClick={toggleMobileMenu}
              >
                Користувачі
              </Link>
            </>
          )}
          <div className='mobile-menu-footer'>
            <Link
              href={`/${lang}/admin/exit`}
              className='mobile-menu-item exit-link'
              onClick={toggleMobileMenu}
            >
              Вихід <ExitSVG color='white' />
            </Link>
          </div>
        </div>
      </div>

      <div className='children'>{children}</div>
    </div>
  )
}
