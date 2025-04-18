'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import './ProductsTable.scss'

// Типы для props компонента
interface Product {
  id: number
  name: string
  price: string
  manufacturer: string
  category: string
  image: string
}

interface EnhancedProductsTableProps {
  categoryFilter: string
  manufacturerFilter: string
  searchTerm: string
  sortConfig: {
    key: string
    direction: 'ascending' | 'descending'
  } | null
  setSortConfig: (
    config: { key: string; direction: 'ascending' | 'descending' } | null
  ) => void
  currentPage: number
  itemsPerPage: number
  selectedProductIds: number[]
  setSelectedProductIds: (ids: number[]) => void
  updateTotalPages: (count: number) => void
}

export default function EnhancedProductsTable({
  categoryFilter,
  manufacturerFilter,
  searchTerm,
  sortConfig,
  setSortConfig,
  currentPage,
  itemsPerPage,
  selectedProductIds,
  setSelectedProductIds,
  updateTotalPages
}: EnhancedProductsTableProps) {
  // Исходные данные о товарах
  const [allProducts] = useState<Product[]>([
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 23456,
      name: 'Шампунь Garnier Fructis для сухого волосся',
      price: '850 грн.',
      manufacturer: 'Garnier',
      category: 'Шампуни',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 34567,
      name: "Кондиціонер L'Oreal Professionnel",
      price: '1200 грн.',
      manufacturer: "L'Oreal",
      category: 'Кондиционеры',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 45678,
      name: 'Маска для обличчя DALAS',
      price: '750 грн.',
      manufacturer: 'DALAS',
      category: 'Уход за кожей',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 56789,
      name: 'Крем для рук Ashley',
      price: '500 грн.',
      manufacturer: 'Ashley',
      category: 'Уход за кожей',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 67890,
      name: "Шампунь против выпадения L'Oreal",
      price: '1100 грн.',
      manufacturer: "L'Oreal",
      category: 'Шампуни',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 78901,
      name: 'Кондиціонер для волосся Garnier',
      price: '900 грн.',
      manufacturer: 'Garnier',
      category: 'Кондиционеры',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 89012,
      name: 'Маска для волосся DALAS',
      price: '1300 грн.',
      manufacturer: 'DALAS',
      category: 'Косметика для волос',
      image: '/images/adminProduct.jpg'
    },
    {
      id: 90123,
      name: 'Шампунь жіночий Ashley Premium',
      price: '1500 грн.',
      manufacturer: 'Ashley',
      category: 'Шампуни',
      image: '/images/adminProduct.jpg'
    }
  ])

  // Состояние для отфильтрованных и отсортированных товаров
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  // Состояние для товаров на текущей странице
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([])

  // Функция для применения фильтрации и сортировки
  useEffect(() => {
    let result = [...allProducts]

    if (categoryFilter) {
      result = result.filter(product => product.category === categoryFilter)
    }

    if (manufacturerFilter) {
      result = result.filter(
        product => product.manufacturer === manufacturerFilter
      )
    }

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(searchTermLower) ||
          product.id.toString().includes(searchTermLower) ||
          product.manufacturer.toLowerCase().includes(searchTermLower) ||
          product.category.toLowerCase().includes(searchTermLower)
      )
    }

    if (sortConfig) {
      result.sort((a, b) => {
        // This is now properly typed because sortConfig.key is restricted to keyof Product
        if (
          a[sortConfig.key as keyof Product] <
          b[sortConfig.key as keyof Product]
        ) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (
          a[sortConfig.key as keyof Product] >
          b[sortConfig.key as keyof Product]
        ) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }

    setFilteredProducts(result)
    updateTotalPages(result.length)
  }, [
    allProducts,
    categoryFilter,
    manufacturerFilter,
    searchTerm,
    sortConfig,
    updateTotalPages
  ])

  // Обновление отображаемых товаров при изменении страницы или отфильтрованного списка
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedProducts(filteredProducts.slice(startIndex, endIndex))
  }, [filteredProducts, currentPage, itemsPerPage])

  // Функция для сортировки по клику на заголовок колонки
  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending'

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }

    setSortConfig({ key, direction })
  }

  // Получение класса для иконки сортировки
  const getSortDirectionIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null
    }
    return sortConfig.direction === 'ascending' ? '↑' : '↓'
  }

  // Функция для выбора/отмены выбора всех товаров
  const toggleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      const currentPageIds = displayedProducts.map(product => product.id)
      setSelectedProductIds(currentPageIds)
    } else {
      setSelectedProductIds([])
    }
  }

  // Проверка, выбраны ли все товары на текущей странице
  const areAllProductsSelected = () => {
    return (
      displayedProducts.length > 0 &&
      displayedProducts.every(product =>
        selectedProductIds.includes(product.id)
      )
    )
  }

  return (
    <div className='product-table-container'>
      <div className='table-responsive'>
        <table className='product-table'>
          <thead className='desktop-only'>
            <tr>
              <th onClick={() => requestSort('id')}>
                Артикул {getSortDirectionIcon('id')}
              </th>
              <th>Фото товара</th>
              <th onClick={() => requestSort('name')}>
                Название товара {getSortDirectionIcon('name')}
              </th>
              <th onClick={() => requestSort('price')}>
                Цена {getSortDirectionIcon('price')}
              </th>
              <th onClick={() => requestSort('manufacturer')}>
                Производитель {getSortDirectionIcon('manufacturer')}
              </th>
              <th onClick={() => requestSort('category')}>
                Категория {getSortDirectionIcon('category')}
              </th>
              <th>ДЕЙСТВИЯ</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product, index) => (
              <tr
                key={product.id}
                className={`${index % 2 === 1 ? 'alternate-row' : ''} ${
                  selectedProductIds.includes(product.id) ? 'selected-row' : ''
                }`}
              >
                <td data-label='Артикул'>{product.id}</td>
                <td className='product-image' data-label='Фото товара'>
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    width={80}
                    height={80}
                  />
                </td>
                <td className='product-name' data-label='Название товара'>
                  <a href='#'>{product.name}</a>
                </td>
                <td data-label='Цена'>{product.price}</td>
                <td data-label='Производитель'>{product.manufacturer}</td>
                <td data-label='Категория'>{product.category}</td>
                <td data-label='Действия'>
                  <button className='edit-button'>Редактировать</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
