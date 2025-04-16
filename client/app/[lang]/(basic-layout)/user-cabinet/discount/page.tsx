'use client'

import { Locale } from '@/i18n.config'
import './discountPage.scss'
import DiscountLevel from './components/discountComponent'
import TabNavigation from '../components/tabNavigation'

const SelectedProductsPage = ({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
  return (
    <div className='PageDiscount'>
      <div className='PageDiscount__title'>Персональна знижка</div>
      <div className='PageDiscount__container'>
        <DiscountLevel currentAmount={1000} lang={lang} />
      </div>
      <TabNavigation lang={lang} />
    </div>
  )
}
export default SelectedProductsPage
