'use client'
import React from 'react'
import './User.scss'
import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'
import { Locale } from '@/i18n.config'
import LeftSVG from '../../../assest/Admin/Left.svg'
import RightSVG from '../../../assest/Admin/Right.svg'
import UppSVG from '../../../assest/Admin/Up.svg'

const users = [
  {
    id: 1,
    name: 'Людмила',
    email: 'ludamdfkt@gmail.com',
    stayActive: '04.17.2024 | 23:00',
    dateRegister: '11.03.2025',
    countOrders: 4,
    sumOrders: 5436
  },
  {
    id: 2,
    name: 'Людмила',
    email: 'ludamdfkt@gmail.com',
    stayActive: '04.17.2024 | 23:00',
    dateRegister: '11.03.2025',
    countOrders: 4,
    sumOrders: 5436
  },
  {
    id: 3,
    name: 'Людмила',
    email: 'ludamdfkt@gmail.com',
    stayActive: '04.17.2024 | 23:00',
    dateRegister: '11.03.2025',
    countOrders: 4,
    sumOrders: 5436
  },
  {
    id: 4,
    name: 'Людмила',
    email: 'ludamdfkt@gmail.com',
    stayActive: '04.17.2024 | 23:00',
    dateRegister: '11.03.2025',
    countOrders: 4,
    sumOrders: 5436
  },
  {
    id: 5,
    name: 'Людмила',
    email: 'ludamdfkt@gmail.com',
    stayActive: '04.17.2024 | 23:00',
    dateRegister: '11.03.2025',
    countOrders: 4,
    sumOrders: 5436
  },
  {
    id: 6,
    name: 'Людмила',
    email: 'ludamdfkt@gmail.com',
    stayActive: '04.17.2024 | 23:00',
    dateRegister: '11.03.2025',
    countOrders: 4,
    sumOrders: 5436
  }
]

const page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <AdminHeader url='reviews' name='Користувачі' lang={lang} />
      <div className='admin-user-container'>
        <div className='filter-container'>
          <div className='filters'>
            <div className='select filter'></div>
          </div>
        </div>
        <div className='list-reviews'>
          <div className='review review-header'>
            <div className='tema'>Імя</div>
            <div className='date'>E-mail</div>
            <div className='up operations'>Остання активність</div>
            <div className='up date-register'>Дата реєстрації</div>
            <div className='up count-orders'>К-ть замовленнь</div>
            <div className='up operations'>Сума витрат</div>
          </div>
          {users.map((x, index) => (
            <div
              className='review'
              style={{
                backgroundColor: index % 2 == 0 ? '#2695691A' : '#A5A1A100'
              }}
              key={x.id}
            >
              <div className='tema'>{x.name}</div>
              <div className='date'>{x.email}</div>
              <div className='operations'>{x.stayActive}</div>
              <div className='date-register'>{x.dateRegister}</div>
              <div className='count-orders'>{x.countOrders}</div>
              <div className='operations'>{x.sumOrders}</div>
            </div>
          ))}
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
    </>
  )
}

export default page
