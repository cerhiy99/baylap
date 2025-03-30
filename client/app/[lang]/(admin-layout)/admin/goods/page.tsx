'use client'
import React from 'react'
import './Goods.scss'
import { Locale } from '@/i18n.config'
import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'
import SearchSVG from '@/app/assest/Admin/Search.svg'
import LeftSVG from '@/app/assest/Admin/Left.svg'
import RightSVG from '@/app/assest/Admin/Right.svg'
import UppSVG from '@/app/assest/Admin/Up.svg'

const orders = [
  {
    id: 1,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },
  {
    id: 2,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },
  {
    id: 3,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },
  {
    id: 4,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },
  {
    id: 5,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },
  {
    id: 6,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },
  {
    id: 7,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },

  {
    id: 8,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
  },
  {
    id: 9,
    productName:
      'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    showToday: 100,
    showForWeek: 100,
    showForMouth: 100,
    showForYear: 100,
    showFor:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    showForAllTime: 100
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
              Дата початку: <input type='date' />
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
        <div className='list-reviews'>
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
        </div>
      </div>
    </>
  )
}

export default page
