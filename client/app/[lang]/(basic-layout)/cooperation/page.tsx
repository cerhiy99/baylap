import React from 'react'
import '../delivery/Delivery.scss'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import { Locale } from '@/i18n.config'
import FormCooperation from './FormCooperation'

type Props = {
  params: { lang: Locale }
}

const page = ({ params: { lang } }: Props) => {
  return (
    <div className='delivery-container'>
      <BreadCrumbs
        lang={lang}
        listUrles={[{ name: 'Сотрудничество', url: 'cooperation' }]}
      />
      <div className='delivery-main'>
        <div className='main-title'>
          <h1>Сотрудничество</h1>
        </div>
        <div className='block'>
          <h3>Вы хотите стать нашим поставщиком товаров?</h3>
          <p>
            Срок доставки зависит от ситуации в регионе.
            <span style={{ display: 'block', marginTop: '5px' }}>
              Отслеживайте статус посылки на сайте «Новая почта», или в
              мобильном приложении. После поступления посылки в пункт выдачи вы
              получите соответствующее уведомление.
            </span>
            <span style={{ display: 'block', marginTop: '5px' }}>
              Обязательное условие: продукция должна быть сертифицирована в
              Украине.
            </span>
          </p>
        </div>
        <FormCooperation />
      </div>
    </div>
  )
}

export default page
