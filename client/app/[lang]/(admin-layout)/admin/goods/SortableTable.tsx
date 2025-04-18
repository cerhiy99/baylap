'use client'

import { useEffect, useState, useMemo, useCallback, memo } from 'react'
import './Goods.scss'

import UppSVG from '@/app/assest/Admin/Up.svg'
import Pagination from '@/app/components/utils/Pagination'

const PRODUCTS_PER_PAGE = 15

// Определяем правильные типы для наших данных
interface Product {
  id: string | number
  name: string
  today: number
  week: number
  month: number
  year: number
  allTime: number
  [key: string]: any // Позволяет индексировать любой строкой
}

interface SortConfig {
  key: keyof Product | null
  direction: 'ascending' | 'descending' | null
}

// Мемоизированный компонент строки для предотвращения ненужных перерендеров
const ProductRow = memo(
  ({
    product,
    index,
    getSortDirection
  }: {
    product: Product
    index: number
    getSortDirection: (key: keyof Product) => 'ascending' | 'descending' | null
  }) => {
    return (
      <div
        className='review'
        style={{
          backgroundColor: index % 2 === 0 ? '#2695691A' : '#A5A1A100'
        }}
      >
        <div className='name'>
          <span className='mobile-label'>Название:</span>
          {product.name}
        </div>
        <div className='time today'>
          <span className='mobile-label'>Сегодня:</span>
          {product.today}
        </div>
        <div className='time week'>
          <span className='mobile-label'>Неделя:</span>
          {product.week}
        </div>
        <div className='time mouth'>
          <span className='mobile-label'>Месяц:</span>
          {product.month}
        </div>
        <div className='time year'>
          <span className='mobile-label'>Год:</span>
          {product.year}
        </div>
        <div className='time all-time'>
          <span className='mobile-label'>Весь период:</span>
          {product.allTime}
        </div>
      </div>
    )
  }
)

// Добавляем отображаемое имя для лучшей отладки
ProductRow.displayName = 'ProductRow'

export default function SortableTable({ goodsList }: { goodsList: Product[] }) {
  const [products, setProducts] = useState<Product[]>(goodsList || [])
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null
  })
  const [currentPage, setCurrentPage] = useState(1)

  // Мемоизируем отсортированные продукты, чтобы избежать пересчета при каждом рендере
  const sortedProducts = useMemo(() => {
    const sortableProducts = [...products]

    if (sortConfig.key && sortConfig.direction) {
      sortableProducts.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }

    return sortableProducts
  }, [products, sortConfig.key, sortConfig.direction])

  // Мемоизируем данные с пагинацией, чтобы избежать пересчета при каждом рендере
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
    return sortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE)
  }, [currentPage, sortedProducts])

  // Мемоизируем вычисление общего количества страниц
  const totalPages = useMemo(
    () => Math.ceil(products.length / PRODUCTS_PER_PAGE),
    [products.length]
  )

  // Мемоизируем обработчик запроса сортировки, чтобы избежать повторного создания при каждом рендере
  const requestSort = useCallback((key: keyof Product) => {
    setSortConfig(prevConfig => {
      let direction: 'ascending' | 'descending' | null = 'ascending'

      if (prevConfig.key === key) {
        if (prevConfig.direction === 'ascending') {
          direction = 'descending'
        } else if (prevConfig.direction === 'descending') {
          direction = null
        }
      }

      return { key, direction }
    })

    // Сброс на первую страницу при изменении сортировки
    setCurrentPage(1)
  }, [])

  // Используем стабильную функцию обратного вызова для пагинации
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  // Мемоизируем getSortDirection, чтобы избежать повторного создания при каждом рендере
  const getSortDirection = useCallback(
    (key: keyof Product) => {
      return sortConfig.key === key ? sortConfig.direction : null
    },
    [sortConfig.key, sortConfig.direction]
  )

  // Мемоизируем renderSortArrow, чтобы избежать повторного создания при каждом рендере
  const renderSortArrow = useCallback(
    (key: keyof Product) => {
      const direction = getSortDirection(key)
      if (!direction) return <UppSVG className='sort-icon' />
      return (
        <UppSVG
          className={`sort-icon ${direction === 'descending' ? 'rotated' : ''}`}
        />
      )
    },
    [getSortDirection]
  )

  // Обновляем состояние продуктов, когда изменяется свойство goodsList
  useEffect(() => {
    setProducts(goodsList || [])
    setCurrentPage(1) // Сброс на первую страницу при изменении данных
  }, [goodsList])

  return (
    <div className='list-reviews'>
      <div className='review-header'>
        <div className='name'>Название</div>
        <div
          className={`time today ${getSortDirection('today') ? `sorted-${getSortDirection('today')}` : ''}`}
          onClick={() => requestSort('today')}
        >
          Сегодня {renderSortArrow('today')}
        </div>
        <div
          className={`time week ${getSortDirection('week') ? `sorted-${getSortDirection('week')}` : ''}`}
          onClick={() => requestSort('week')}
        >
          Неделя {renderSortArrow('week')}
        </div>
        <div
          className={`time mouth ${getSortDirection('month') ? `sorted-${getSortDirection('month')}` : ''}`}
          onClick={() => requestSort('month')}
        >
          Месяц {renderSortArrow('month')}
        </div>
        <div
          className={`time year ${getSortDirection('year') ? `sorted-${getSortDirection('year')}` : ''}`}
          onClick={() => requestSort('year')}
        >
          Год {renderSortArrow('year')}
        </div>
        <div
          className={`time all-time ${getSortDirection('allTime') ? `sorted-${getSortDirection('allTime')}` : ''}`}
          onClick={() => requestSort('allTime')}
        >
          Весь период {renderSortArrow('allTime')}
        </div>
      </div>

      <div className='mobile-sort-controls'>
        <div className='mobile-sort-label'>Сортировать по:</div>
        <select
          onChange={e => requestSort(e.target.value as keyof Product)}
          value={(sortConfig.key as string) || ''}
        >
          <option value=''>Выберите поле</option>
          <option value='today'>Сегодня</option>
          <option value='week'>Неделя</option>
          <option value='month'>Месяц</option>
          <option value='year'>Год</option>
          <option value='allTime'>Весь период</option>
        </select>

        {sortConfig.key && (
          <select
            onChange={e =>
              setSortConfig({
                key: sortConfig.key,
                direction: e.target.value as 'ascending' | 'descending' | null
              })
            }
            value={sortConfig.direction || ''}
          >
            <option value='ascending'>По возрастанию</option>
            <option value='descending'>По убыванию</option>
          </select>
        )}
      </div>

      {paginatedData.length === 0 ? (
        <div className='review emptyMessage'>Данные отсутствуют</div>
      ) : (
        paginatedData.map((product, index) => (
          <ProductRow
            key={product.id}
            product={product}
            index={index}
            getSortDirection={getSortDirection}
          />
        ))
      )}
      <Pagination
        totalItems={products.length}
        itemsPerPage={PRODUCTS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
