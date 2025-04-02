'use client'

import React, { useState, useMemo, useCallback, memo } from 'react'
import './Reviews.scss'
import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'
import SearchSVG from '@/app/assest/Admin/Search.svg'
import { Locale } from '@/i18n.config'
import Pagination from '@/app/components/utils/Pagination'

// Demo review data
const initialReviews = [
  {
    id: 1,
    text: 'Лучший магазин косметики! Только тут есть серия Lisap Ultimate, особенно маска для волос, которой нет просто нигде. Быстрая отправка, вежливые и честные сотрудники, адекватные цены. Большое спасибо, очень рекомендую!',
    author: 'admin',
    published:
      'Маска для волос с маслами баобаба и семени льна Dott. Solari Olea...',
    date: '04.17.2024 | 23:00'
  },
  {
    id: 2,
    text: 'Заказывала крем для лица, пришел быстро, упаковка целая. Консистенция приятная, запах нейтральный. Пока использую неделю, но уже вижу эффект!',
    author: 'Анна К.',
    published: 'Увлажняющий крем для лица с гиалуроновой кислотой...',
    date: '05.02.2024 | 14:30'
  },
  {
    id: 3,
    text: 'Очень довольна покупкой! Тональное средство идеально подошло по тону, не скатывается и держится весь день. Буду заказывать еще!',
    author: 'Марина',
    published: 'Тональный крем с матирующим эффектом...',
    date: '06.15.2024 | 10:45'
  },
  {
    id: 4,
    text: 'Первый раз заказала здесь, и не пожалела! Доставка быстрая, все аккуратно упаковано. Парфюм соответствует описанию, аромат просто волшебный!',
    author: 'Ольга',
    published: 'Туалетная вода Chanel Chance Eau Tendre...',
    date: '07.22.2024 | 18:20'
  },
  {
    id: 5,
    text: 'Шампунь просто супер! Волосы после него мягкие и блестящие. Буду брать еще, тем более цена приятная.',
    author: 'Ирина',
    published: 'Шампунь для поврежденных волос с кератином...',
    date: '08.10.2024 | 11:15'
  },
  {
    id: 6,
    text: 'Заказала тушь, но получила не тот оттенок. Однако служба поддержки быстро решила вопрос, отправили замену без лишних вопросов. Спасибо!',
    author: 'Катерина',
    published: 'Тушь для ресниц объемная L’Oréal Paris...',
    date: '09.05.2024 | 16:40'
  },
  {
    id: 7,
    text: 'Пользуюсь сывороткой уже месяц – кожа стала заметно лучше, морщинки разгладились. Однозначно рекомендую!',
    author: 'Наталия',
    published: 'Омолаживающая сыворотка с ретинолом...',
    date: '03.14.2024 | 20:25'
  },
  {
    id: 8,
    text: 'Очень понравился крем для рук. Быстро впитывается, не липкий, запах приятный. Теперь это мой must-have!',
    author: 'Юлия',
    published: 'Питательный крем для рук с маслом ши...',
    date: '07.05.2024 | 13:50'
  },
  {
    id: 9,
    text: 'Парфюм пришел в оригинальной упаковке, аромат стойкий и именно такой, как в магазине. Очень доволен!',
    author: 'Андрей',
    published: 'Туалетная вода Dior Sauvage...',
    date: '05.28.2024 | 10:30'
  },
  {
    id: 10,
    text: 'Заказывала помаду – цвет просто потрясающий! Держится долго, не сушит губы. Обязательно куплю еще что-то из этой серии.',
    author: 'Тетяна',
    published: 'Матовая помада NYX Soft Matte Lip Cream...',
    date: '06.19.2024 | 19:15'
  },
  {
    id: 11,
    text: 'Бальзам для губ – спасение зимой! Увлажняет моментально, нет раздражения. Пользуюсь уже второй тюбик.',
    author: 'Алина',
    published: 'Бальзам для губ с медом и прополисом...',
    date: '04.30.2024 | 08:45'
  },
  {
    id: 12,
    text: 'Заказала набор кистей – качество на высоте! Все кисти мягкие, не осыпаются. Отличное соотношение цены и качества.',
    author: 'Оксана',
    published: 'Набор макияжных кистей из синтетики...',
    date: '08.11.2024 | 17:20'
  },
  {
    id: 13,
    text: 'Первый раз покупала здесь – осталась в восторге! Все пришло быстро, упаковка целая, товар соответствует описанию. Теперь буду постоянным клиентом!',
    author: 'Виктория',
    published: 'Палетка теней для век Huda Beauty...',
    date: '09.05.2024 | 21:10'
  },
  {
    id: 14,
    text: 'Сыворотка для роста ресниц реально работает! Уже через 3 недели заметила разницу. Очень рада покупке!',
    author: 'Марина',
    published: 'Сыворотка для роста ресниц с биматопростом...',
    date: '07.24.2024 | 14:55'
  },
  {
    id: 15,
    text: 'Крем для лица – просто бомба! Кожа стала мягкой и сияющей. Пользуюсь две недели, и уже вижу эффект.',
    author: 'Анжелика',
    published: 'Ночной крем с гиалуроновой кислотой...',
    date: '05.15.2024 | 12:30'
  },
  {
    id: 16,
    text: 'Парфюм пришел быстро, запах просто божественный! Держится весь день. Буду заказывать еще!',
    author: 'Светлана',
    published: 'Туалетная вода Lancôme La Vie Est Belle...',
    date: '06.28.2024 | 23:40'
  },
  {
    id: 17,
    text: 'Маска для волос – просто спасение! Волосы после нее как шелк. Уже купила вторую баночку.',
    author: 'Анна',
    published: 'Восстанавливающая маска для волос...',
    date: '08.03.2024 | 16:15'
  },
  {
    id: 18,
    text: 'Заказывала крем для век – консистенция легкая, быстро впитывается. Пока эффект незначительный, но надеюсь на лучшее.',
    author: 'Людмила',
    published: 'Крем для век против морщин...',
    date: '04.22.2024 | 19:50'
  },
  {
    id: 19,
    text: 'Тени для век – отличная палитра! Пигментация супер, не осыпаются. Очень довольна покупкой.',
    author: 'Яна',
    published: 'Палетка теней Morphe 35O...',
    date: '09.12.2024 | 10:25'
  },
  {
    id: 20,
    text: 'Пудра матирующая – просто находка для жирной кожи! Держится весь день, не скатывается. Рекомендую!',
    author: 'Карина',
    published: 'Матирующая пудра Rimmel Stay Matte...',
    date: '07.08.2024 | 13:20'
  }
]

// Define types
interface Review {
  id: number
  text: string
  author: string
  published: string
  date: string
}

interface SortConfig {
  key: keyof Review | null
  direction: 'ascending' | 'descending' | null
}

const REVIEWS_PER_PAGE = 10

// Memoized review row component
const ReviewRow = memo(
  ({
    review,
    index,
    isSelected,
    onSelect
  }: {
    review: Review
    index: number
    isSelected: boolean
    onSelect: (id: number) => void
  }) => {
    return (
      <div
        className={`review ${isSelected ? 'selected' : ''}`}
        style={{
          backgroundColor: index % 2 === 0 ? '#2695691A' : '#A5A1A100'
        }}
      >
        <input
          type='checkbox'
          checked={isSelected}
          onChange={() => onSelect(review.id)}
        />
        <div className='tema'>{review.text}</div>
        <div className='author'>{review.author}</div>
        <div className='published'>{review.published}</div>
        <div className='date'>{review.date}</div>
        <div className='operations'>Редагувати</div>
      </div>
    )
  }
)

ReviewRow.displayName = 'ReviewRow'

const ReviewsPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  // State for reviews and UI
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('published')
  const [selectedReviews, setSelectedReviews] = useState<number[]>([])
  const [bulkAction, setBulkAction] = useState('0')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null
  })

  // Filter reviews by search term and selected filter
  const filteredReviews = useMemo(() => {
    return reviews.filter(review => {
      const matchesSearch =
        searchTerm === '' ||
        review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.published.toLowerCase().includes(searchTerm.toLowerCase())

      if (selectedFilter === 'published') return matchesSearch
      if (selectedFilter === 'unapproved') return false // In a real app, filter by approval status

      return matchesSearch
    })
  }, [reviews, searchTerm, selectedFilter])

  // Sort reviews based on sort config
  const sortedReviews = useMemo(() => {
    const sortableReviews = [...filteredReviews]

    if (sortConfig.key && sortConfig.direction) {
      sortableReviews.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }

    return sortableReviews
  }, [filteredReviews, sortConfig.key, sortConfig.direction])

  // Calculate paginated data
  const paginatedReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE
    return sortedReviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE)
  }, [sortedReviews, currentPage])

  // Calculate total pages
  const totalPages = useMemo(
    () => Math.ceil(sortedReviews.length / REVIEWS_PER_PAGE),
    [sortedReviews.length]
  )

  // Handlers with useCallback for better performance
  const handleRequestSort = useCallback((key: keyof Review) => {
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

    setCurrentPage(1) // Reset to first page when sorting changes
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const handleSelectReview = useCallback((id: number) => {
    setSelectedReviews(prev => {
      if (prev.includes(id)) {
        return prev.filter(reviewId => reviewId !== id)
      } else {
        return [...prev, id]
      }
    })
  }, [])

  const handleSelectAll = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelectedReviews(paginatedReviews.map(review => review.id))
      } else {
        setSelectedReviews([])
      }
    },
    [paginatedReviews]
  )

  const handleBulkActionChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setBulkAction(e.target.value)
    },
    []
  )

  const handleApplyBulkAction = useCallback(() => {
    if (bulkAction === '0' || selectedReviews.length === 0) return

    // In a real app, these actions would call an API
    switch (bulkAction) {
      case '1': // Delete
        setReviews(prev =>
          prev.filter(review => !selectedReviews.includes(review.id))
        )
        break
      case '2': // Publish
        // Logic to publish selected reviews
        break
      case '3': // Unpublish
        // Logic to unpublish selected reviews
        break
    }

    setSelectedReviews([])
    setBulkAction('0')
  }, [bulkAction, selectedReviews])

  const handleFilterChange = useCallback((filter: string) => {
    setSelectedFilter(filter)
    setCurrentPage(1)
  }, [])

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
      setCurrentPage(1)
    },
    []
  )

  // Determine if all reviews on current page are selected
  const allSelected = useMemo(() => {
    return (
      paginatedReviews.length > 0 &&
      paginatedReviews.every(review => selectedReviews.includes(review.id))
    )
  }, [paginatedReviews, selectedReviews])

  // Get sort direction for a column
  const getSortDirection = useCallback(
    (key: keyof Review) => {
      return sortConfig.key === key ? sortConfig.direction : null
    },
    [sortConfig]
  )

  return (
    <>
      <AdminHeader url='reviews' name='Коментарі' lang={lang} />
      <div className='admin-reviews-container'>
        <div className='filter-container'>
          <div className='filters'>
            <div
              className={`filter ${selectedFilter === 'published' ? 'select' : ''}`}
              onClick={() => handleFilterChange('published')}
            >
              Опубліковані коментарі
            </div>
            <div
              className={`filter ${selectedFilter === 'unapproved' ? 'select' : ''}`}
              onClick={() => handleFilterChange('unapproved')}
            >
              Несхвалені коментарі (1)
            </div>
            <div className='admin-reviews-search'>
              <input
                type='text'
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder='Пошук...'
              />
              <div className='search-svg'>
                <SearchSVG />
              </div>
            </div>
          </div>
        </div>

        <div className='list-reviews'>
          <div className='review review-header'>
            <input
              type='checkbox'
              checked={allSelected}
              onChange={handleSelectAll}
            />
            <div
              className={`tema ${
                getSortDirection('text')
                  ? `sorted-${getSortDirection('text')}`
                  : ''
              }`}
              onClick={() => handleRequestSort('text')}
            >
              Тема
            </div>
            <div
              className={`author ${
                getSortDirection('author')
                  ? `sorted-${getSortDirection('author')}`
                  : ''
              }`}
              onClick={() => handleRequestSort('author')}
            >
              Автор
            </div>
            <div
              className={`published ${
                getSortDirection('published')
                  ? `sorted-${getSortDirection('published')}`
                  : ''
              }`}
              onClick={() => handleRequestSort('published')}
            >
              Опубліковано
            </div>
            <div
              className={`date ${
                getSortDirection('date')
                  ? `sorted-${getSortDirection('date')}`
                  : ''
              }`}
              onClick={() => handleRequestSort('date')}
            >
              Дата оновлення
            </div>
            <div className='operations'>Операції</div>
          </div>

          {paginatedReviews.length === 0 ? (
            <div className='review emptyMessage'>
              Немає коментарів для відображення
            </div>
          ) : (
            paginatedReviews.map((review, index) => (
              <ReviewRow
                key={review.id}
                review={review}
                index={index}
                isSelected={selectedReviews.includes(review.id)}
                onSelect={handleSelectReview}
              />
            ))
          )}

          <div className='selects-adn-input'>
            <select value={bulkAction} onChange={handleBulkActionChange}>
              <option value='0'>Масові операції</option>
              <option value='1'>Видалити коментарій</option>
              <option value='2'>Опублікувати коментарій</option>
              <option value='3'>Зняти з публікації коментарій</option>
            </select>
            <button
              onClick={handleApplyBulkAction}
              disabled={bulkAction === '0' || selectedReviews.length === 0}
            >
              Застосувати
            </button>
          </div>

          {totalPages > 1 && (
            <Pagination
              totalItems={sortedReviews.length}
              itemsPerPage={REVIEWS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default ReviewsPage
