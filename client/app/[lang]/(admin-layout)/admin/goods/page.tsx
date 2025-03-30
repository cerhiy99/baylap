'use client'
import React from 'react'
import './Goods.scss'
import { Locale } from '@/i18n.config'
import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'
import SearchSVG from '@/app/assest/Admin/Search.svg'
import SortableTable from './SortableTable'

const orders = [
  {
    id: 1,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 22,
    week: 3993,
    month: 2939,
    year: 12,
    allTime: 1122
  },
  {
    id: 2,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 2,
    week: 1388,
    month: 321,
    year: 293,
    allTime: 839
  },
  {
    id: 3,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 39,
    week: 12,
    month: 11,
    year: 292,
    allTime: 1221
  },
  {
    id: 4,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 992,
    week: 218,
    month: 345,
    year: 2562,
    allTime: 3453
  },
  {
    id: 5,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 32,
    week: 657,
    month: 1023,
    year: 84,
    allTime: 345
  },
  {
    id: 6,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 345,
    week: 5,
    month: 1700,
    year: 1067,
    allTime: 34
  },
  {
    id: 7,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 38,
    week: 1939,
    month: 399,
    year: 301,
    allTime: 23
  },
  {
    id: 8,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 333,
    week: 23,
    month: 1123,
    year: 45,
    allTime: 1234
  },
  {
    id: 9,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 932,
    week: 34,
    month: 432,
    year: 34,
    allTime: 35
  },
  {
    id: 10,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 930,
    week: 24,
    month: 345,
    year: 1056,
    allTime: 30
  },
  {
    id: 11,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 1200,
    week: 1054,
    month: 23,
    year: 94,
    allTime: 239
  },
  {
    id: 12,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 1030,
    week: 1200,
    month: 1040,
    year: 334,
    allTime: 66
  },
  {
    id: 13,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 234,
    week: 1020,
    month: 56,
    year: 7,
    allTime: 1200
  },
  {
    id: 14,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 948,
    week: 775,
    month: 3,
    year: 34,
    allTime: 7
  },
  {
    id: 15,
    name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натуральним алое 1000 г',
    today: 585,
    week: 43,
    month: 1030,
    year: 45,
    allTime: 575
  }
]

const page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <AdminHeader url='reviews' name='Статистика товарів' lang={lang} />
      <div className='admin-goods-container'>
        <div className='filter-container'>
          <div className='filters'>
            <div className='select filter'>
              <p>Дата початку: </p>
              <input type='date' />
            </div>
            <div className='filter'>
              Дата кінця: <input type='date' />
            </div>

            <div className='admin-reviews-search'>
              <input type='text' placeholder='пошук товарів...' />
              <div className='search-svg'>
                <SearchSVG />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='list-reviews'>
          <div className='review review-header'>
            <div className='name'>Назва</div>
            <div className='time today'>
              Cьогодні <UppSVG />
            </div>
            <div className='time week'>
              Тиждень <UppSVG />
            </div>
            <div className='time mouth'>
              Місяць <UppSVG />
            </div>
            <div className='time year'>
              Рік <UppSVG />
            </div>
            <div className='time all-time'>
              Весь період <UppSVG />
            </div>
          </div>
          {orders.map((x, index) => (
            <div
              className='review'
              style={{
                backgroundColor: index % 2 == 0 ? '#2695691A' : '#A5A1A100'
              }}
              key={x.id}
            >
              <div className='name'>{x.productName}</div>
              <div className='time today'>{x.showToday}</div>
              <div className='time week'>{x.showForWeek}</div>
              <div className='time mouth'>{x.showForMouth}</div>
              <div className='time year'>{x.showForYear}</div>
              <div className='time all-time'>{x.showForAllTime}</div>
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
        </div> */}
        <SortableTable goodsList={orders} />
      </div>
    </>
  )
}

export default page
