'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import '../editOrder.scss'

import type { Locale } from '@/i18n.config'
import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'

export default function CreateOrderPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const [articleInput, setArticleInput] = useState('')
  const [products, setProducts] = useState<
    Array<{
      id: number
      name: string
      article: string
      price: number
      quantity: number
    }>
  >([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const [formData, setFormData] = useState({
    phone: '',
    fullName: '',
    deliveryMethod: 'Нова пошта',
    city: '',
    department: '',
    comment: '',
    showBillingRecord: false,
    managerComment: '',
    managerApproved: false,
    managerBonus: 100,
    status: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleAddProduct = () => {
    if (!articleInput.trim()) return

    // In a real app, you would fetch product details from an API
    const newProduct = {
      id: Date.now(),
      name: `Товар ${articleInput}`,
      article: articleInput,
      price: 1000,
      quantity: 1
    }

    setProducts(prev => [...prev, newProduct])
    setArticleInput('')
  }

  const handleRemoveProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id))
  }

  const handleQuantityChange = (id: number, quantity: number) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, quantity } : product
      )
    )
  }

  const calculateTotal = (price: number, quantity: number) => {
    return price * quantity
  }

  const renderMobileProductList = () => {
    if (products.length === 0) {
      return (
        <div className='mobile-empty-message'>Позиции заказа не найдены.</div>
      )
    }

    return products.map(product => (
      <div className='mobile-product-card' key={product.id}>
        <div className='mobile-product-header'>
          <Link href={'#'} className='productLink'>
            {product.name}
          </Link>
          <button
            className='removeBtn'
            onClick={() => handleRemoveProduct(product.id)}
          >
            x
          </button>
        </div>
        <div className='mobile-product-details'>
          <div className='mobile-product-info'>
            <span className='mobile-label'>Статья:</span>
            <span>{product.article}</span>
          </div>
          <div className='mobile-product-info'>
            <span className='mobile-label'>Цена:</span>
            <span>{product.price} грн</span>
          </div>
          <div className='mobile-product-info'>
            <span className='mobile-label'>Кол-во:</span>
            <div className='mobile-quantity-input'>
              <input
                type='number'
                min='1'
                value={product.quantity}
                onChange={e =>
                  handleQuantityChange(
                    product.id,
                    Number.parseInt(e.target.value) || 1
                  )
                }
              />
            </div>
          </div>
          <div className='mobile-product-info'>
            <span className='mobile-label'>Вместе:</span>
            <span className='mobile-total'>
              {calculateTotal(product.price, product.quantity)} грн
            </span>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <>
      <AdminHeader url='new-order' name='Добавить заказ' lang={lang} />
      <div className='container'>
        <div className='content'>
          {isMobile ? (
            <div className='mobile-products-container'>
              {renderMobileProductList()}
            </div>
          ) : (
            <table className='table'>
              <thead>
                <tr>
                  <th>Удалить</th>
                  <th>Название товара</th>
                  <th>Артикул</th>
                  <th>Цена</th>
                  <th>Кол-во</th>
                  <th>Вместе</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className='emptyMessage'>
                      Позиции заказа не найдены.
                    </td>
                  </tr>
                ) : (
                  products.map(product => (
                    <tr key={product.id}>
                      <td className='centered'>
                        <button
                          className='removeBtn'
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          x
                        </button>
                      </td>
                      <td>
                        <Link href={'#'} className='productLink'>
                          {product.name}
                        </Link>
                      </td>
                      <td>{product.article}</td>
                      <td>{product.price} грн</td>
                      <td>
                        <input
                          type='number'
                          min='1'
                          value={product.quantity}
                          onChange={e =>
                            handleQuantityChange(
                              product.id,
                              Number.parseInt(e.target.value) || 1
                            )
                          }
                        />
                      </td>
                      <td>
                        {calculateTotal(product.price, product.quantity)} грн
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}

          <div className='articleInput'>
            <label className='label'>Артикул товара</label>
            <input
              type='text'
              value={articleInput}
              onChange={e => setArticleInput(e.target.value)}
              placeholder='Введите артикул товара'
            />
            <div className='description'>
              Введите артикул товара, чтобы добавить его к заказу.
            </div>
            <div className='buttons'>
              <button className='buttons__addBtn' onClick={handleAddProduct}>
                Добавить товар
              </button>
              <button
                className='buttons__cancelBtn'
                onClick={() => setArticleInput('')}
              >
                Отменить
              </button>
            </div>
          </div>
          <div className='section'>
            <div className='sectionHeader'>Информация о доставке</div>
            <div className='sectionContent'>
              <div className='formGroup'>
                <label className='label'>Телефон</label>
                <input
                  type='text'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder='+380991234567'
                />
              </div>

              <div className='formGroup'>
                <label className='label'>П.І.Б</label>
                <input
                  type='text'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Прізвище Ім'я По-батькові"
                />
              </div>

              <div className='formGroup'>
                <label className='label'>Вариант доставки</label>
                <select
                  name='deliveryMethod'
                  value={formData.deliveryMethod}
                  onChange={handleInputChange}
                >
                  <option value='Нова пошта'>Нова пошта</option>
                  <option value='Укрпошта'>Укрпошта</option>
                  <option value='Самовивіз'>Самовывоз</option>
                </select>
              </div>

              <div className='formGroup'>
                <label className='label'>Город</label>
                <input
                  type='text'
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder='Київ'
                />
              </div>

              <div className='formGroup'>
                <label className='label'>Отделение</label>
                <input
                  type='text'
                  name='department'
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder='1'
                />
              </div>

              <div className='formGroup'>
                <label className='label'>Комментарии</label>
                <textarea
                  name='comment'
                  value={formData.comment}
                  onChange={handleInputChange}
                />
              </div>

              <div className='formGroup'>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    id='showBillingRecord'
                    name='showBillingRecord'
                    checked={formData.showBillingRecord}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='showBillingRecord'>Удалить аккаунт</label>
                </div>
              </div>
            </div>
          </div>

          <div className='section managerSection'>
            <div className='sectionHeader'>Комментарий менеджера</div>
            <div className='sectionContent'>
              <div className='formGroup'>
                <label className='label'>Комментарий</label>
                <textarea
                  name='managerComment'
                  value={formData.managerComment}
                  onChange={handleInputChange}
                />
              </div>

              <div className='formGroup managerCheckbox'>
                <input
                  type='checkbox'
                  id='managerApproved'
                  name='managerApproved'
                  checked={formData.managerApproved}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor='managerApproved'>Да</label>
              </div>

              <div className='formGroup managerBonus'>
                <label className='label'>Бонус менеджера</label>
                <input
                  type='number'
                  name='managerBonus'
                  value={formData.managerBonus}
                  onChange={handleInputChange}
                />
                <span> грн.</span>
              </div>
            </div>
          </div>

          <div className='section'>
            <div className='sectionHeader'>Состояние заказа</div>
            <div className='sectionContent'>
              <div className='formGroup'>
                <label className='label'>Статус</label>
                <select
                  name='status'
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value=''>Выберите статус</option>
                  <option value='new'>Новый</option>
                  <option value='processing'>В обработке</option>
                  <option value='shipped'>Отправлено</option>
                  <option value='delivered'>Доставлено</option>
                  <option value='cancelled'>Отменено</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
