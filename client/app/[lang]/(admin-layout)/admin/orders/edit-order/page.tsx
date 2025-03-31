'use client'

import type React from 'react'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import '../editOrder.scss'
import { Locale } from '@/i18n.config'
import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'

interface OrderPageProps {
  params: {
    id: string
    lang: Locale
  }
}

export default function EditOrderPage({ params }: OrderPageProps) {
  const { id, lang } = params

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

  // Simulate fetching order data
  useEffect(() => {
    // In a real app, you would fetch order data from an API
    const mockOrderData = {
      id: id,
      products: [
        {
          id: 1,
          name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
          article: '12345',
          price: 2000,
          quantity: 1
        }
      ],
      phone: '+380991234567',
      fullName: 'Зеленська Наталя Сергіївна',
      deliveryMethod: 'Нова пошта',
      city: 'Калинівка Київська обл',
      department: '1',
      comment: '',
      showBillingRecord: false,
      managerComment: '',
      managerApproved: true,
      managerBonus: 100,
      status: 'processing'
    }

    setProducts(mockOrderData.products)
    setFormData({
      phone: mockOrderData.phone,
      fullName: mockOrderData.fullName,
      deliveryMethod: mockOrderData.deliveryMethod,
      city: mockOrderData.city,
      department: mockOrderData.department,
      comment: mockOrderData.comment,
      showBillingRecord: mockOrderData.showBillingRecord,
      managerComment: mockOrderData.managerComment,
      managerApproved: mockOrderData.managerApproved,
      managerBonus: mockOrderData.managerBonus,
      status: mockOrderData.status
    })
  }, [id])

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

  return (
    <>
      <AdminHeader url='new-order' name='Редагування замовлення' lang={lang} />
      <div className='container'>
        <div className='content'>
          <table className='table'>
            <thead>
              <tr>
                <th>Видалити</th>
                <th>Назва товару</th>
                <th>Артикул</th>
                <th>Ціна</th>
                <th>К-сть</th>
                <th>Разом</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className='emptyMessage'>
                    Позиції замовлення не знайдені.
                  </td>
                </tr>
              ) : (
                products.map(product => (
                  <tr key={product.id}>
                    <td className='centered'>
                      {/* <input
                        type='checkbox'
                        onChange={() => handleRemoveProduct(product.id)}
                      /> */}
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

          <div className='articleInput'>
            <label className='label'>Артикул товару</label>
            <input
              type='text'
              value={articleInput}
              onChange={e => setArticleInput(e.target.value)}
              placeholder='Введіть артикул товару'
            />
            <div className='description'>
              Введіть артикул товару, щоб додавити його до замовлення.
            </div>
            <div className='buttons'>
              <button className='buttons__addBtn' onClick={handleAddProduct}>
                Додати товар
              </button>
              <button
                className='buttons__cancelBtn'
                onClick={() => setArticleInput('')}
              >
                Скасувати
              </button>
            </div>
          </div>

          <div className='section'>
            <div className='sectionHeader'>Інформація о доставке</div>
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
                <label className='label'>Варіант доставки</label>
                <select
                  name='deliveryMethod'
                  value={formData.deliveryMethod}
                  onChange={handleInputChange}
                >
                  <option value='Нова пошта'>Нова пошта</option>
                  <option value='Укрпошта'>Укрпошта</option>
                  <option value='Самовивіз'>Самовивіз</option>
                </select>
              </div>

              <div className='formGroup'>
                <label className='label'>Місто</label>
                <input
                  type='text'
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder='Київ'
                />
              </div>

              <div className='formGroup'>
                <label className='label'>Відділення</label>
                <input
                  type='text'
                  name='department'
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder='1'
                />
              </div>

              <div className='formGroup'>
                <label className='label'>Коментарій</label>
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
                  <label htmlFor='showBillingRecord'>
                    Видалити обліковий запис
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='section managerSection'>
            <div className='sectionHeader'>Коментарій менеджера</div>
            <div className='sectionContent'>
              <div className='formGroup'>
                <label className='label'>Коментарій</label>
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
                <label htmlFor='managerApproved'>Так</label>
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
            <div className='sectionHeader'>Стан замовлення</div>
            <div className='sectionContent'>
              <div className='formGroup'>
                <label className='label'>Статус</label>
                <select
                  name='status'
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value=''>Виберіть статус</option>
                  <option value='new'>Новий</option>
                  <option value='processing'>В обробці</option>
                  <option value='shipped'>Відправлено</option>
                  <option value='delivered'>Доставлено</option>
                  <option value='cancelled'>Скасовано</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
