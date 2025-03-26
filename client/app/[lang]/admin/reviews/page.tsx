'use client'
import React from 'react'
import './Reviews.scss'
import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'
import SearchSVG from '../../../assest/Admin/Search.svg'
import { Locale } from '@/i18n.config'
import LeftSVG from '../../../assest/Admin/Left.svg'
import RightSVG from '../../../assest/Admin/Right.svg'

const orders = [
  {
    id: 1,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    date: '04.17.2024 | 23:00'
  },
  {
    id: 2,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    date: '04.17.2024 | 23:00'
  },
  {
    id: 3,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    date: '04.17.2024 | 23:00'
  },
  {
    id: 4,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    date: '04.17.2024 | 23:00'
  },
  {
    id: 5,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    date: '04.17.2024 | 23:00'
  },
  {
    id: 6,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    date: '04.17.2024 | 23:00'
  },
  {
    id: 7,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цен. Больше спасибо, очень рекомендую',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aperiam tempora animi, similique laborum eos amet iste ipsa, nesciunt hic reiciendis autem ullam, ratione molestias nisi voluptas sed labore?...',
    date: '04.17.2024 | 23:00'
  }
]

const page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <AdminHeader url='reviews' name='Коментарі' lang={lang} />
      <div className='admin-reviews-container'>
        <div className='filter-container'>
          <div className='filters'>
            <div className='select filter'>Опубліковані коментарі</div>
            <div className='filter'>Несхвалені коментарі (1)</div>
            <div className='admin-reviews-search'>
              <input type='text' />.
              <div className='search-svg'>
                <SearchSVG />
              </div>
            </div>
          </div>
        </div>
        <div className='list-reviews'>
          <div className='review review-header'>
            <input type='checkbox' onChange={e => (e.target.checked = false)} />
            <div className='tema'>Тема</div>
            <div className='author'>Автор</div>
            <div className='published'>Опубліковано</div>
            <div className='date'>Дата оновлення</div>
            <div className='operations'>Операції</div>
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
              <div className='tema'>{x.text}</div>
              <div className='author'>{x.author}</div>
              <div className='published'>{x.published}</div>
              <div className='date'>{x.date}</div>
              <div className='operations'>Редагувати</div>
            </div>
          ))}
          <div className='selects-adn-input'>
            <select>
              <option value='0'>Масові операції</option>
              <option value='1'>Видалити коментарій</option>
              <option value='2'>Опублікувати коментарій</option>
              <option value='3'>Зняти з публікації коментарій</option>
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
    </>
  )
}

export default page
