'use client'

import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'
import { Locale } from '@/i18n.config'
import React from 'react'
import './Orders.scss'
import LeftSVG from '@/app/assest/Admin/Left.svg'
import RightSVG from '@/app/assest/Admin/Right.svg'
import SearchSVG from '@/app/assest/Admin/Search.svg'
import Link from 'next/link'

const orders = [
  {
    id: 1,
    date: '04.17.2024 | 23:00',
    name: 'Людмила',
    email: 'ludamdfkr@gmail.com',
    phone: '+38(098)821-96-88',
    pib: 'Костенко Наталія Анатоліївна',
    deliveryType: 'Новая Почта',
    oblast: 'Дніпропетровська область',
    city: 'Дніпро',
    department: '58',
    coment:
      'Перезаоните для уточнения заказа Нужны цвет синий 12 номер Зеленый 15 номер Ред 10 номер Фиолетовый',
    sum: '1000',
    status: 'В очікуванні',
    isMenedher: true,
    author: 'admin',
    comentMeneger: '100 грн.'
  },
  {
    id: 2,
    date: '04.17.2024 | 23:00',
    name: 'Людмила',
    email: 'ludamdfkr@gmail.com',
    phone: '+38(098)821-96-88',
    pib: 'Костенко Наталія Анатоліївна',
    deliveryType: 'Новая Почта',
    oblast: 'Дніпропетровська область',
    city: 'Дніпро',
    department: '58',
    coment:
      'Перезаоните для уточнения заказа Нужны цвет синий 12 номер Зеленый 15 номер Ред 10 номер Фиолетовый',
    sum: '1000',
    status: 'В очікуванні',
    isMenedher: true,
    author: 'admin',
    comentMeneger: '100 грн.'
  },
  {
    id: 3,
    date: '04.17.2024 | 23:00',
    name: 'Людмила',
    email: 'ludamdfkr@gmail.com',
    phone: '+38(098)821-96-88',
    pib: 'Костенко Наталія Анатоліївна',
    deliveryType: 'Новая Почта',
    oblast: 'Дніпропетровська область',
    city: 'Дніпро',
    department: '58',
    coment:
      'Перезаоните для уточнения заказа Нужны цвет синий 12 номер Зеленый 15 номер Ред 10 номер Фиолетовый',
    sum: '1000',
    status: 'В очікуванні',
    isMenedher: true,
    author: 'admin',
    comentMeneger: '100 грн.'
  },
  {
    id: 4,
    date: '04.17.2024 | 23:00',
    name: 'Людмила',
    email: 'ludamdfkr@gmail.com',
    phone: '+38(098)821-96-88',
    pib: 'Костенко Наталія Анатоліївна',
    deliveryType: 'Новая Почта',
    oblast: 'Дніпропетровська область',
    city: 'Дніпро',
    department: '58',
    coment:
      'Перезаоните для уточнения заказа Нужны цвет синий 12 номер Зеленый 15 номер Ред 10 номер Фиолетовый',
    sum: '1000',
    status: 'В очікуванні',
    isMenedher: true,
    author: 'admin',
    comentMeneger: '100 грн.'
  },
  {
    id: 5,
    date: '04.17.2024 | 23:00',
    name: 'Людмила',
    email: 'ludamdfkr@gmail.com',
    phone: '+38(098)821-96-88',
    pib: 'Костенко Наталія Анатоліївна',
    deliveryType: 'Новая Почта',
    oblast: 'Дніпропетровська область',
    city: 'Дніпро',
    department: '58',
    coment:
      'Перезаоните для уточнения заказа Нужны цвет синий 12 номер Зеленый 15 номер Ред 10 номер Фиолетовый',
    sum: '1000',
    status: 'В очікуванні',
    isMenedher: true,
    author: 'admin',
    comentMeneger: '100 грн.'
  }
]

const page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className='orders-container'>
      <AdminHeader url='orders' name='Замовлення' lang={lang} />
      <div className='orders-header-container'>
        <div className='order-header'>
          <h3>Всього замовлень: 2560</h3>
          <div className='filters'>
            <div className='start'>
              Дата початку: <input type='date' />
            </div>
            <div className='finish'>
              Дата закінчення: <input type='date' />
            </div>
            <div className='status'>
              Статус замовлення:{' '}
              <select>
                <option value='1'>всі замолення</option>
                <option value='2'>в очікуванні</option>
                <option value='3'>відправлено</option>
              </select>
            </div>
            <div className='add' style={{ position: 'relative' }}>
              <Link
                href={`orders/new-order`}
                style={{ position: 'absolute', inset: 0 }}
              ></Link>
              Додати замовлення
            </div>
            <div className='search'>
              <input
                type='text'
                placeholder='Пошук по назві/артикулу товару, номеру телефону, E-mail'
              />
              <div className='search-svg'>
                <SearchSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='list-reviews'>
        <div className='review review-header'>
          <input type='checkbox' onChange={e => (e.target.checked = false)} />
          <div className='id'>ID</div>
          <div className='date'>Дата</div>
          <div className='name'>Ім&apos;я</div>
          <div className='email'>E-mail</div>
          <div className='contact-info'>Контактна інформація</div>
          <div className='order-list-basket'>Позиції замовлення</div>
          <div className='status'>Статус</div>
          <div className='meneger'>Менеджер</div>
          <div className='coment-meneger'>Коментар менеджера</div>
        </div>
        {orders.map((x, index) => (
          <div
            className='review'
            style={{
              backgroundColor: index % 2 == 0 ? '#2695691A' : '#A5A1A100'
            }}
            key={x.id}
          >
            <input type='checkbox' />
            <div className='id'>{x.id}</div>
            <div className='date'>{x.date}</div>
            <div className='name'>{x.name}</div>
            <div className='email'>{x.email}</div>
            <div className='contact-info'>
              <div className='info'>
                <p>Телефон:</p>
                <span>{x.phone}</span>
              </div>
              <div className='info'>
                <p>П.І.Б.:</p>
                <span>{x.pib}</span>
              </div>
              <div className='info'>
                <p>Вариант доставки:</p>
                <span>{x.deliveryType}</span>
              </div>
              <div className='info'>
                <p>Область:</p>
                <span>{x.oblast}</span>
              </div>
              <div className='info'>
                <p>Населений пункт:</p>
                <span>{x.city}</span>
              </div>
              <div className='info'>
                <p>Коментар:</p>
                <span>{x.coment}</span>
              </div>
            </div>
            <div className='order-list-basket'>
              <div className='order-list-basket-header'>
                <div className='title'>Заголовок</div>
                <div className='price-with-one'>Ціна з шт.</div>
                <div className='count'>Кол-во</div>
                <div className='sum'>Сумма</div>
              </div>
              <div className='list-basket'>
                <div className='title'>
                  Полуперманентные красители прямого действия Elgon I-Light 100
                  ml (100 ml) (28926)
                </div>

                <div className='price-with-one'>250 грн.</div>
                <div className='count'>4 шт.</div>
                <div className='sum'>1000 грн.</div>
              </div>
            </div>
            <div className='status'>{x.status}</div>
            <div className='meneger'>
              <input
                type='checkbox'
                onChange={e => (e.target.checked = false)}
              />
            </div>
            <div className='coment-meneger'>{x.comentMeneger}</div>
          </div>
        ))}
        <div className='selects-adn-input'>
          <select>
            <option value='1'>Масові операції</option>
          </select>
          <button>Застосувати</button>
        </div>
        <div className='pagination'>
          <div className='left'>
            <LeftSVG />
          </div>
          <div className='number select'>1</div>
          <div className='number'>2</div>
          <div className='number'>3</div>
          <div className='number'>4</div>
          <div className='number'>5</div>
          <div className='number'>6</div>
          <div className='right'>
            <RightSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
