import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import '../delivery/Delivery.scss'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import ReturnSVG from '../../assest/DeliveryCookiesAndOther/Return.svg'
//import BreadCrumbs from '@/app/components/utils/BreadCrumbs'

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { returnGoods, urls } = await getDictionary(lang)
  return (
    <div className='delivery-container'>
      <BreadCrumbs
        listUrles={[{ url: `return-goods`, name: returnGoods.name }]}
        lang={lang}
      />
      <div className='delivery-main'>
        <div className='main-title'>
          <ReturnSVG />
          <h1>{returnGoods.title}</h1>
        </div>
        <div className='block'>
          <p dangerouslySetInnerHTML={{ __html: returnGoods.description1 }} />
        </div>
        <div className='block'>
          <h3>{returnGoods.minititle2}</h3>
          <ul>
            {returnGoods.ul.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>{' '}
        <div className='block'>
          <h3>{returnGoods.minititle3}</h3>
          <p dangerouslySetInnerHTML={{ __html: returnGoods.description3 }} />
          <ul>
            {returnGoods.ul2.map((x, idx) => (
              <li key={idx}>{x}</li>
            ))}
          </ul>
        </div>
        <div className='block'>
          <div className='add-info'>{returnGoods.additionalInfo}</div>
        </div>
      </div>
    </div>
  )
}

export default page
