import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import { Locale } from '@/i18n.config'
import React from 'react'
import './AboutUs.scss'
import AboutForm from '@/app/components/AboutUs/AboutForm'

type Props = {
  params: { lang: Locale }
}

const page = ({ params: { lang } }: Props) => {
  return (
    <div className='about-us-cont'>
      <BreadCrumbs
        listUrles={[{ url: 'about-us', name: 'О нас' }]}
        lang={lang}
      />
      <div className='about-us'>
        <div className='main-title'>
          <h1>О нас</h1>
        </div>

        <div className='block'>
          Інтернет покупки в наш час стали звичними та дуже економлять час,
          кошти та нерви. Не потрібно виходити з дому, кудись їхати, та шукати
          необхідний товар. Краще заварити ароматний улюблений напій, ввести в
          пошуку браузера продукт, який Ви хочете придбати та натрапити на наш
          сайт BayLap, де найкращі ціни та асортимент, щоб задовольнити
          найвибагливіших клієнтів. Продукція має сертифікати та висновки СЕС,
          які підтверджують її оригінальність та якість. Ми працюємо лише з
          офіційними постачальниками, що дозволяє нам уникати посередників і
          саме через це давати нашим улюбленим клієнтам найкращі ціни, акційні
          пропозиції та безкоштовну доставку багато брендів, які представлені в
          нашому інтернет-магазині.
        </div>
        <AboutForm />

        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14305.607704842561!2d36.32473251826662!3d50.00029667712339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127095b05ed51b1%3A0x64ecb58c9f014bc6!2z0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvSBDb25zdGFudCBEZWxpZ2h0!5e0!3m2!1sru!2sua!4v1741710857286!5m2!1sru!2sua'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>{' '}
    </div>
  )
}

export default page
