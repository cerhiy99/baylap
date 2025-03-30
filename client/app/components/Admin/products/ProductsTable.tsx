'use client'

import { useState } from 'react'
import Image from 'next/image'
import './ProductsTable.scss'

export default function ProductsTable() {
  const [products] = useState([
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',

      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    },
    {
      id: 12345,
      name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
      price: '1000 грн.',
      manufacturer: 'Ashley',
      category: 'Косметика для волос',
      image: '/images/adminProduct.png'
    }
  ])
  return (
    <div className='product-table-container'>
      <table className='product-table'>
        <thead>
          <tr>
            <th>Артикул</th>
            <th>Фото товару</th>
            <th>Назва товару</th>
            <th>Ціна</th>
            <th>Виробник</th>
            <th>Категорія</th>
            <th>ДІЇ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={index % 2 === 1 ? 'alternate-row' : ''}>
              <td>{product.id}</td>
              <td className='product-image'>
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  width={80}
                  height={80}
                />
              </td>
              <td className='product-name'>
                <a href='#'>{product.name}</a>
              </td>
              <td>{product.price}</td>
              <td>{product.manufacturer}</td>
              <td>{product.category}</td>
              <td>
                <button className='edit-button'>Редагувати</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
