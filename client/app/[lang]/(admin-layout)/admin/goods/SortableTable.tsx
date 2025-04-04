'use client'

import { useEffect, useState, useMemo, useCallback, memo } from 'react'
import './Goods.scss'

import UppSVG from '@/app/assest/Admin/Up.svg'
import Pagination from '@/app/components/utils/Pagination'

const PRODUCTS_PER_PAGE = 15

// Define proper types for our data
interface Product {
  id: string | number
  name: string
  today: number
  week: number
  month: number
  year: number
  allTime: number
  [key: string]: any // Allow indexing with any string
}

interface SortConfig {
  key: keyof Product | null
  direction: 'ascending' | 'descending' | null
}

// Memoized row component to prevent unnecessary re-renders
const ProductRow = memo(
  ({ product, index }: { product: Product; index: number }) => {
    return (
      <div
        className='review'
        style={{
          backgroundColor: index % 2 === 0 ? '#2695691A' : '#A5A1A100'
        }}
      >
        <div className='name'>{product.name}</div>
        <div className='time today'>{product.today}</div>
        <div className='time week'>{product.week}</div>
        <div className='time mouth'>{product.month}</div>
        <div className='time year'>{product.year}</div>
        <div className='time all-time'>{product.allTime}</div>
      </div>
    )
  }
)

// Add display name for better debugging
ProductRow.displayName = 'ProductRow'

export default function SortableTable({ goodsList }: { goodsList: Product[] }) {
  const [products, setProducts] = useState<Product[]>(goodsList || [])
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null
  })
  const [currentPage, setCurrentPage] = useState(1)

  // Memoize sorted products to avoid recomputing on every render
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

  // Memoize paginated data to avoid recalculating on every render
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
    return sortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE)
  }, [currentPage, sortedProducts])

  // Memoize total pages calculation
  const totalPages = useMemo(
    () => Math.ceil(products.length / PRODUCTS_PER_PAGE),
    [products.length]
  )

  // Memoize request sort handler to avoid recreation on every render
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

    // Reset to first page when sorting changes
    setCurrentPage(1)
  }, [])

  // Use a stable callback function for pagination
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  // Memoize getSortDirection to avoid recreation on every render
  const getSortDirection = useCallback(
    (key: keyof Product) => {
      return sortConfig.key === key ? sortConfig.direction : null
    },
    [sortConfig.key, sortConfig.direction]
  )

  // Memoize renderSortArrow to avoid recreation on every render
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

  // Update products state when goodsList prop changes
  useEffect(() => {
    setProducts(goodsList || [])
    setCurrentPage(1) // Reset to first page when data changes
  }, [goodsList])

  return (
    <div className='list-reviews'>
      <div className='review review-header'>
        <div className='name'>Назва</div>
        <div
          className={`time today ${
            getSortDirection('today')
              ? `sorted-${getSortDirection('today')}`
              : ''
          }`}
          onClick={() => requestSort('today')}
        >
          Cьогодні {renderSortArrow('today')}
        </div>
        <div
          className={`time week ${
            getSortDirection('week') ? `sorted-${getSortDirection('week')}` : ''
          }`}
          onClick={() => requestSort('week')}
        >
          Тиждень {renderSortArrow('week')}
        </div>
        <div
          className={`time mouth ${
            getSortDirection('month')
              ? `sorted-${getSortDirection('month')}`
              : ''
          }`}
          onClick={() => requestSort('month')}
        >
          Місяць {renderSortArrow('month')}
        </div>
        <div
          className={`time year ${
            getSortDirection('year') ? `sorted-${getSortDirection('year')}` : ''
          }`}
          onClick={() => requestSort('year')}
        >
          Рік {renderSortArrow('year')}
        </div>
        <div
          className={`time all-time ${
            getSortDirection('allTime')
              ? `sorted-${getSortDirection('allTime')}`
              : ''
          }`}
          onClick={() => requestSort('allTime')}
        >
          Весь період {renderSortArrow('allTime')}
        </div>
      </div>
      {paginatedData.length === 0 ? (
        <div className='review emptyMessage'>No data available</div>
      ) : (
        paginatedData.map((product, index) => (
          <ProductRow key={product.id} product={product} index={index} />
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
