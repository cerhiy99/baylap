import React from 'react'
import './MakeOrder.scss'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import { Locale } from '@/i18n.config'
import MakeOrder from '@/app/components/MakeOrder/MakeOrder'

type Props = {
  params: { lang: Locale }
}

const page = ({ params: { lang } }: Props) => {
  return (
    <div className='make-order-container'>
      <BreadCrumbs
        lang={lang}
        listUrles={[{ url: 'make-order', name: 'Оформлення замовлення' }]}
      />
      <MakeOrder lang={lang} />
    </div>
  )
}

export default page
