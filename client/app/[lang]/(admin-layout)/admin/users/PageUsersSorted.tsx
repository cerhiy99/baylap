'use client'

import { useEffect, useState, useMemo, useCallback, memo } from 'react'
import './Goods.scss'

import UppSVG from '@/app/assest/Admin/Up.svg'
import Pagination from '@/app/components/utils/Pagination'

const PRODUCTS_PER_PAGE = 15

// Define proper types for our data
interface User {
  id: number
  name: string
  email: string
  stayActive: string
  dateRegister: string
  countOrders: number
  sumOrders: number
}

interface SortConfig {
  key: keyof User | null
  direction: 'ascending' | 'descending' | null
}

// Memoized row component to prevent unnecessary re-renders
const UserRow = memo(({ user, index }: { user: User; index: number }) => {
  return (
    <div
      className='review'
      style={{
        backgroundColor: index % 2 == 0 ? '#2695691A' : '#A5A1A100'
      }}
    >
      <div className='tema'>{user.name}</div>
      <div className='date'>{user.email}</div>
      <div className='operations'>{user.stayActive}</div>
      <div className='date-register'>{user.dateRegister}</div>
      <div className='count-orders'>{user.countOrders}</div>
      <div className='operations'>{user.sumOrders} грн.</div>
    </div>
  )
})

// Add display name for better debugging
UserRow.displayName = 'UserRow'

export default function UserSortableTable({
  usersList
}: {
  usersList: User[]
}) {
  const [products, setProducts] = useState<User[]>(usersList || [])
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
  const requestSort = useCallback((key: keyof User) => {
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
    (key: keyof User) => {
      return sortConfig.key === key ? sortConfig.direction : null
    },
    [sortConfig.key, sortConfig.direction]
  )

  // Memoize renderSortArrow to avoid recreation on every render
  const renderSortArrow = useCallback(
    (key: keyof User) => {
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
    setProducts(usersList || [])
    setCurrentPage(1) // Reset to first page when data changes
  }, [usersList])

  return (
    <div className='list-reviews'>
      <div className='review review-header'>
        <div
          className={`tema ${
            getSortDirection('name') ? `sorted-${getSortDirection('name')}` : ''
          }`}
          onClick={() => requestSort('name')}
        >
          Імя {renderSortArrow('name')}
        </div>
        <div
          className={`date ${
            getSortDirection('email')
              ? `sorted-${getSortDirection('email')}`
              : ''
          }`}
          onClick={() => requestSort('email')}
        >
          E-mail {renderSortArrow('email')}
        </div>
        <div
          className={`up operations ${
            getSortDirection('stayActive')
              ? `sorted-${getSortDirection('stayActive')}`
              : ''
          }`}
          onClick={() => requestSort('stayActive')}
        >
          Остання активність {renderSortArrow('stayActive')}
        </div>
        <div
          className={`up date-register ${
            getSortDirection('dateRegister')
              ? `sorted-${getSortDirection('dateRegister')}`
              : ''
          }`}
          onClick={() => requestSort('dateRegister')}
        >
          Дата реєстрації {renderSortArrow('dateRegister')}
        </div>
        <div
          className={`up count-orders ${
            getSortDirection('countOrders')
              ? `sorted-${getSortDirection('countOrders')}`
              : ''
          }`}
          onClick={() => requestSort('countOrders')}
        >
          К-ть замовленнь {renderSortArrow('countOrders')}
        </div>
        <div
          className={`up operations ${
            getSortDirection('sumOrders')
              ? `sorted-${getSortDirection('sumOrders')}`
              : ''
          }`}
          onClick={() => requestSort('sumOrders')}
        >
          Сума витрат {renderSortArrow('sumOrders')}
        </div>
      </div>
      {paginatedData.length === 0 ? (
        <div className='review emptyMessage'>No data available</div>
      ) : (
        paginatedData.map((user, index) => (
          <UserRow key={user.id} user={user} index={index} />
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
