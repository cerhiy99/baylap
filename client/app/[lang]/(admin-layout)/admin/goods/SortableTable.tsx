'use client'

import { useState } from 'react'
import './Goods.scss'
import LeftSVG from '@/app/assest/Admin/Left.svg'
import RightSVG from '@/app/assest/Admin/Right.svg'
import UppSVG from '@/app/assest/Admin/Up.svg'

export default function SortableTable({ goodsList }: { goodsList: any }) {
  const [products, setProducts] = useState(goodsList)

  const [sortConfig, setSortConfig] = useState<{
    key: string | null
    direction: 'ascending' | 'descending' | null
  }>({
    key: null,
    direction: null
  })

  const sortedProducts = [...products]

  if (sortConfig.key && sortConfig.direction) {
    sortedProducts.sort((a: any, b: any) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === 'ascending' ? 1 : -1
      }
      return 0
    })
  }

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' | null = 'ascending'

    if (sortConfig.key === key) {
      if (sortConfig.direction === 'ascending') {
        direction = 'descending'
      } else if (sortConfig.direction === 'descending') {
        direction = null
      }
    }

    setSortConfig({ key, direction: direction })
  }

  const getSortDirection = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction
    }
    return null
  }

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 15
  const totalPages = Math.ceil(products.length / productsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='list-reviews'>
      <div className='review review-header'>
        <div className='name'>Назва</div>
        <div
          //   className='time today'
          className={`time today ${
            getSortDirection('today')
              ? `sorted-${getSortDirection('today')}`
              : ''
          }`}
          onClick={() => requestSort('today')}
        >
          Cьогодні <UppSVG />
        </div>
        <div
          //   className='time week'
          className={`time week ${
            getSortDirection('week') ? `sorted-${getSortDirection('week')}` : ''
          }`}
          onClick={() => requestSort('week')}
        >
          Тиждень <UppSVG />
        </div>
        <div
          //   className='time mouth'
          className={`time mouth ${
            getSortDirection('month')
              ? `sorted-${getSortDirection('month')}`
              : ''
          }`}
          onClick={() => requestSort('month')}
        >
          Місяць <UppSVG />
        </div>
        <div
          //   className='time year'
          className={`time year ${
            getSortDirection('year') ? `sorted-${getSortDirection('year')}` : ''
          }`}
          onClick={() => requestSort('year')}
        >
          Рік <UppSVG />
        </div>
        <div
          //   className='time all-time'
          className={`time all-time ${
            getSortDirection('allTime')
              ? `sorted-${getSortDirection('allTime')}`
              : ''
          }`}
          onClick={() => requestSort('allTime')}
        >
          Весь період <UppSVG />
        </div>
      </div>
      {sortedProducts.map((x, index) => (
        <div
          className='review'
          style={{
            backgroundColor: index % 2 == 0 ? '#2695691A' : '#A5A1A100'
          }}
          key={x.id}
        >
          <div className='name'>{x.name}</div>
          <div className='time today'>{x.today}</div>
          <div className='time week'>{x.week}</div>
          <div className='time mouth'>{x.month}</div>
          <div className='time year'>{x.year}</div>
          <div className='time all-time'>{x.allTime}</div>
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
  )
}
