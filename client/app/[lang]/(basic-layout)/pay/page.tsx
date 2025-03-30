import { Locale } from '@/i18n.config'
import React from 'react'
import '../delivery/Delivery.scss'
import { getDictionary } from '@/lib/dictionary'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import PaySVG from '@/app/assest/DeliveryCookiesAndOther/Pay.svg'

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { pay } = await getDictionary(lang)
  return (
    <div className='delivery-container'>
      <BreadCrumbs lang={lang} listUrles={[{ name: pay.title, url: 'pay' }]} />
      <div className='delivery-main'>
        <div className='main-title'>
          <PaySVG />
          <h1>{pay.title}</h1>
        </div>
        <div className='block'>
          <h3>{pay.miniTitle2}</h3>
          <p>{pay.description2}</p>
        </div>
        <div className='block'>
          <h3>{pay.miniTitle3}</h3>
          <p>{pay.description3}</p>
        </div>
        <div className='block'>
          <h3>{pay.miniTitle4}</h3>
          <p>{pay.description4}</p>
        </div>
      </div>
    </div>
  )
}

export default Page
