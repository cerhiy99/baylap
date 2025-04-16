'use client'
import Link from 'next/link'
import OrdersSVG from '@/public/svgs/userNavigation/orders.svg'
import FavoritiesSVG from '@/public/svgs/userNavigation/favorite.svg'
import CartSVG from '@/public/svgs/userNavigation/cart.svg'
import ImageSvg from '@/public/svgs/userNavigation/img.svg'
import HomeSvg from '@/public/svgs/userNavigation/home.svg'
import DataSvg from '@/public/svgs/userNavigation/personalData.svg'
import WatchedSvg from '@/public/svgs/userNavigation/wathced.svg'
import ExitSVG from '@/app/assest/Admin/Exit.svg'
import { Locale } from '@/i18n.config'

const UserDashboard = ({ lang }: { lang: Locale }) => {
  const userData = {
    name: 'Владислав',
    discount: 0,
    orders: 0,
    favorites: 0,
    cart: 0
  }
  const handlerLogOut = () => {
    console.log('LogOut')
  }
  return (
    <>
      <div className='cabinetLayout__header'>
        <div className='header--avatar'>
          <div className='avatarWrapper'>
            <span>{userData.name[0].toUpperCase()}</span>
          </div>
          <div className='userDetails'>
            <div>
              <span>{userData.name}</span>
            </div>
            <div>
              <Link href='#'>Редагувати інформацію</Link>
            </div>
          </div>
        </div>
        <div className='header--discount'>
          <div className='userDiscount__title'>
            <span>Персональна знижка</span>
          </div>
          <div className='userDiscount__total'>{userData.discount}</div>
        </div>
        <div className='header--stats'>
          <div className='inline--stat'>
            <OrdersSVG width={20} />
            <p>Мої замовлення</p>
            <div className='stat--num'>{userData.orders}</div>
          </div>
          <div className='inline--stat'>
            <FavoritiesSVG width={20} />
            <p>Мої обрані</p>
            <div className='stat--num'>{userData.orders}</div>
          </div>
          <div className='inline--stat'>
            <CartSVG />
            <p>Моя корзина</p>
            <div className='stat--num'>{userData.orders}</div>
          </div>
        </div>
        <div className='header--title'>
          <div className='user__hashtag'>
            Будьте <Link href={'#'}>#НАМБЕРВАН </Link>з BAYLAP У{' '}
            <Link href={'#'}>каталозі </Link>
            знайдете всі товари. А найвигідніше - у
            <Link href={'#'}> акційних пропозиціях.</Link>
          </div>
        </div>
        <div className='header--image'>
          <ImageSvg />
        </div>
      </div>
      <div className='cabinetLayout--navigation'>
        <div className='inline--nav'>
          <HomeSvg width={30} />
          <div className='nav__item'>
            <div className='nav__text'>
              <Link href={`/${lang}/user-cabinet`}>Мій кабінет</Link>
            </div>
          </div>
        </div>
        <div className='inline--nav'>
          <DataSvg />
          <div className='nav__item'>
            <div className='nav__text'>
              <Link href={`/${lang}/user-cabinet/personal-info`}>
                Персональні дані
              </Link>
            </div>
          </div>
        </div>
        <div className='inline--nav'>
          <OrdersSVG width={27} />
          <div className='nav__item'>
            <div className='nav__text'>
              <Link href={`/${lang}/user-cabinet/orders`}>Мої замовлення</Link>
            </div>
          </div>
        </div>
        <div className='inline--nav'>
          <FavoritiesSVG width={28} />
          <div className='nav__item'>
            <div className='nav__text'>
              <Link href={`/${lang}/user-cabinet/selected-products`}>
                Обрані товари
              </Link>
            </div>
          </div>
        </div>
        <div className='inline--nav'>
          <FavoritiesSVG width={28} />
          <div className='nav__item'>
            <div className='nav__text'>
              <Link href={`/${lang}/user-cabinet/discount`}>
                Персональна знижка
              </Link>
            </div>
          </div>
        </div>
        <div className='inline--nav'>
          <WatchedSvg width={28} />
          <div className='nav__item'>
            <div className='nav__text'>
              <Link
                href='#listGoodsLeft'
                scroll={false}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('listGoodsLeft')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                Переглянуті товари
              </Link>
            </div>
          </div>
        </div>
        <div className='logout__user'>
          <button className='logout__wrapper' onClick={handlerLogOut}>
            <ExitSVG color='black' />
            <span>Вийти з облікового запису</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
