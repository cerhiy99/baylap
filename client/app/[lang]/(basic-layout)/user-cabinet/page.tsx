import './Cabinet.scss'
import MainImage from '@/public/svgs/userNavigation/mainImage.svg'
import PersonalData from '@/public/svgs/posters/personal.svg'
import Discounts from '@/public/svgs/posters/discount.svg'
import Shopping from '@/public/svgs/posters/shopping.svg'
import Favorities from '@/public/svgs/posters/favorities.svg'

export default function page() {
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
      <div className='tabs__container'>
        <div className='tab__item'>
          <div className='tab__svg'>
            <PersonalData />
          </div>
          <div className='tab-content'>
            <div className='tab__title'>Редагування персональних даних</div>
            <div className='tab__text'>Змініть Ваші персональні дані зараз</div>
          </div>
        </div>
        <div className='tab__item'>
          <div className='tab__svg'>
            <Shopping />
          </div>
          <div className='tab-content'>
            <div className='tab__title'>Ваша історія покупок</div>
            <div className='tab__text'>Дізнайтеся історію Ваших покупок</div>
          </div>
        </div>
        <div className='tab__item'>
          <div className='tab__svg'>
            <Discounts />
          </div>
          <div className='tab-content'>
            <div className='tab__title'>Ваша персональна знижка</div>
            <div className='tab__text'>Дізнайтеся про Ваші накопичення</div>
          </div>
        </div>
        <div className='tab__item'>
          <div className='tab__svg'>
            <Favorities />
          </div>
          <div className='tab-content'>
            <div className='tab__title'>Ваші обрані товари</div>
            <div className='tab__text'>Перегляньте Ваші вподобані товари</div>
          </div>
        </div>
      </div>
    </div>
  )
}
