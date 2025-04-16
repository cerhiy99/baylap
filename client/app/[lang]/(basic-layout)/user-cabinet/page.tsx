import './Cabinet.scss'
import MainImage from '@/public/svgs/userNavigation/mainImage.svg'
import { Locale } from '@/i18n.config'
import TabNavigation from './components/tabNavigation'

export default function page({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <div className='mainContent__wrapper'>
      <div className='image__svg'>
        <MainImage />
      </div>
      <div className='mainContnent'>
        <h2 className='mainContnent__title'>
          Вітаємо Вас в особистому кабінеті! 🙂
        </h2>
        <p className='mainContnent__text'>
          Тут знайдете всю інформацію про ваші покупки та замовлення. А також
          зможете змінити особисті дані і купувати вигідніше з персональною
          знижкою.
        </p>
      </div>
      <TabNavigation lang={lang} />
    </div>
  )
}
