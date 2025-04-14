'use client'

import Image from 'next/image'
import './ordersPage.scss'
import { useState } from 'react'

interface OrderItem {
  id: string
  name: string
  code: string
  quantity: number
  price: number
  originalPrice: number
  discount: number
  image: string
}

interface Order {
  id: string
  date: string
  paymentMethod: string
  deliveryMethod: string
  totalAmount: number
  status: string
  items: OrderItem[]
}
const DeliverySvg = () => {
  return (
    <svg
      width='20'
      height='18'
      viewBox='0 0 20 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16.0272 5.32578C16.0868 5.30764 16.1663 5.34393 16.2459 5.44373C16.2459 5.44373 16.2459 5.44373 19.8449 8.63724C20.0537 8.82776 20.0537 9.11808 19.8449 9.26324C19.8449 9.26324 19.8449 9.26324 16.2459 12.5112C16.1663 12.6019 16.0868 12.6291 16.0272 12.6019C15.9675 12.5747 15.9277 12.484 15.9277 12.366V5.53445C15.9277 5.41651 15.9675 5.34393 16.0272 5.32578Z'
        fill='#ED1C24'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M9.87138 0H10.1299L10.3685 0.0907247C10.3685 0.0907247 10.3685 0.0907247 14.0769 3.43847C14.236 3.62899 14.1763 3.76508 13.9178 3.76508C13.9178 3.76508 13.9178 3.76508 12.3768 3.76508C12.1183 3.76508 11.8996 3.96467 11.8996 4.20055C11.8996 4.20055 11.8996 4.20055 11.8996 6.68641C11.8996 6.9223 11.6908 7.11282 11.3726 7.11282C11.3726 7.11282 11.3726 7.11282 8.67832 7.11282C8.40988 7.11282 8.20109 6.9223 8.20109 6.68641C8.20109 6.68641 8.20109 6.68641 8.20109 4.20055C8.20109 3.96467 7.99231 3.76508 7.72387 3.76508H6.08342C5.81498 3.76508 5.76527 3.62899 5.92434 3.43847C5.92434 3.43847 5.92434 3.43847 9.63276 0.0907247L9.87138 0Z'
        fill='#ED1C24'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.0738 5.25323C4.13345 5.28952 4.17322 5.37118 4.17322 5.48912V12.4568C4.17322 12.5838 4.13345 12.6564 4.0738 12.6745C4.0042 12.7017 3.91472 12.6745 3.80536 12.6019C3.80536 12.6019 3.80536 12.6019 0.156589 9.26327C-0.0521963 9.11811 -0.0521963 8.82779 0.156589 8.63727C0.156589 8.63727 0.156589 8.63727 3.80536 5.34396C3.91472 5.25323 4.0042 5.22602 4.0738 5.25323Z'
        fill='#ED1C24'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.67773 10.7422C8.67773 10.7422 8.67773 10.7422 11.3721 10.7422C11.6902 10.7422 11.9089 10.9327 11.9089 11.1777C11.9089 11.1777 11.9089 11.1777 11.9089 13.7996C11.9089 14.0899 12.1177 14.2805 12.3762 14.2805H13.8079C14.0763 14.2805 14.1757 14.4165 13.967 14.5617C13.967 14.5617 13.967 14.5617 10.3679 17.855C10.2585 17.9548 10.1293 18.0002 10 18.0002C9.87079 18.0002 9.7316 17.9548 9.63218 17.855C9.63218 17.855 9.63218 17.855 6.03312 14.5617C5.81439 14.4165 5.92376 14.2805 6.18225 14.2805C6.18225 14.2805 6.18225 14.2805 7.72329 14.2805C7.99173 14.2805 8.20051 14.0899 8.20051 13.7996C8.20051 13.7996 8.20051 13.7996 8.20051 11.1777C8.20051 10.9327 8.4093 10.7422 8.67773 10.7422Z'
        fill='#ED1C24'
      />
    </svg>
  )
}

const PaymentSvg = () => {
  return (
    <svg
      width='20'
      height='18'
      viewBox='0 0 20 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.92662 7.66797H2.14453V8.95407L3.92662 8.95402V7.66797Z'
        fill='#82BFAB'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.25038 9.69502H2.14453V10.9811H5.31866V7.66797H4.5741V9.32452C4.5741 9.52914 4.42908 9.69502 4.25038 9.69502Z'
        fill='#82BFAB'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.96484 7.66797L5.96489 10.9811H6.96233V7.66797H5.96484Z'
        fill='#82BFAB'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M17.2003 12.3726H10.0176V15.8858H17.2003V12.3726Z'
        fill='#82BFAB'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M17.48 9.69462H9.73748C9.55869 9.69462 9.41366 9.5288 9.41366 9.32418C9.41376 9.1195 9.55869 8.95373 9.73743 8.95373L17.48 8.95368C17.6587 8.95368 17.8037 9.11956 17.8037 9.32418C17.8037 9.5288 17.6587 9.69468 17.48 9.69462ZM7.61095 7.29718L7.611 11.3513C7.611 11.5558 7.46593 11.7218 7.28723 11.7217H5.64226H1.82045C1.64166 11.7217 1.49659 11.556 1.49659 11.3513V9.32429V7.29713C1.49659 7.09251 1.64162 6.92668 1.82036 6.92668H4.24998H5.64207H7.28718C7.46593 6.92668 7.61095 7.09256 7.61095 7.29718ZM18.808 5.30328L1.54349 5.30322L1.19186 5.30328C0.534593 5.30328 0 5.91489 0 6.6667L9.58641e-05 16.6361C9.58641e-05 17.3882 0.534593 17.9998 1.19186 17.9998H18.8082C19.4655 17.9998 20 17.3882 20 16.6362V6.66659C20 6.20615 19.7995 5.79828 19.493 5.55136C19.4858 5.54669 19.4787 5.54164 19.4717 5.53632C19.3045 5.40671 19.1137 5.32907 18.9144 5.30865C18.914 5.3086 18.9135 5.30855 18.9131 5.30855C18.8785 5.30509 18.8433 5.30328 18.808 5.30328ZM17.48 7.61747H9.73748C9.55869 7.61747 9.41366 7.45165 9.41366 7.24703C9.41376 7.04247 9.55869 6.87658 9.73743 6.87658L17.48 6.87653C17.6587 6.87653 17.8037 7.04247 17.8037 7.24703C17.8037 7.4516 17.6587 7.61753 17.48 7.61747ZM9.69359 11.6314H17.5238C17.7026 11.6314 17.8476 11.7972 17.8476 12.0018L17.8477 16.256C17.8477 16.4605 17.7026 16.6265 17.5238 16.6265H9.69364C9.5148 16.6265 9.36978 16.4606 9.36978 16.256V12.0017C9.36983 11.7972 9.51485 11.6314 9.69359 11.6314Z'
        fill='#616E7D'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16.699 0.0588476L3.72656 4.56246H18.8086C18.9232 4.56246 19.0366 4.57459 19.1479 4.59857L18.1851 0.967757C17.9945 0.248323 17.3275 -0.159381 16.699 0.0588476Z'
        fill='#616E7D'
      />
    </svg>
  )
}

const OrdersPage = () => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null)
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null)

  const orders: Order[] = [
    {
      id: '5030264',
      date: '2 січ. 2025 р., 02:06',
      paymentMethod: 'Накладений платіж',
      deliveryMethod: 'Нова пошта',
      totalAmount: 635.0,
      status: 'Скасоване',
      items: [
        {
          id: '1',
          name: 'KODI Пензлик №111 для тіней (ворс: поні)',
          code: '123456',
          quantity: 10,
          price: 59,
          originalPrice: 631,
          discount: 90,
          image: '/makeup-brush-set.png'
        },
        {
          id: '2',
          name: 'KODI Пензлик №111 для тіней (ворс: поні)',
          code: '123456',
          quantity: 10,
          price: 59,
          originalPrice: 631,
          discount: 90,
          image: '/makeup-brush-set.png'
        }
      ]
    }
  ]

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId)
    setMenuOpenId(null)
  }

  const toggleMenu = (orderId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setMenuOpenId(menuOpenId === orderId ? null : orderId)
  }

  const repeatOrder = (orderId: string) => {
    console.log(`Repeating order ${orderId}`)
    setMenuOpenId(null)
  }

  const getTotalSum = (items: OrderItem[]) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }
  return (
    <div className='PageOrders'>
      <div className='PageOrders__title'>Мої замовлення</div>
      <div className='PageOrders__container'>
        {orders.map(order => (
          <div key={order.id} className='order-card'>
            <div className='order-header'>
              <div className='order-info'>
                <div className='order-number'>#{order.id}</div>
                <div className='order-date'>{order.date}</div>
              </div>
              <div className='order-actions'>
                <button
                  className='menu-button'
                  onClick={e => toggleMenu(order.id, e)}
                  aria-label='Меню'
                >
                  <div className='menuDots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                  </div>
                </button>
                {menuOpenId === order.id && (
                  <div className='dropdown-menu'>
                    <button onClick={() => repeatOrder(order.id)}>
                      Повторити замовлення
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className='order-divider'></div>

            <div className='order-summary'>
              <div
                className='order-status'
                data-status={order.status.toLowerCase()}
              >
                {order.status}
              </div>
              <div className='order-payment'>
                <div className='payment-icon'>
                  <PaymentSvg />
                </div>
                <span>{order.paymentMethod}</span>
              </div>
              <div className='order-delivery'>
                <div className='delivery-icon'>
                  <DeliverySvg />
                </div>
                <span>{order.deliveryMethod}</span>
              </div>
              <div className='order-amount'>
                {order.totalAmount.toFixed(2)} ₴
              </div>
              <button
                className='details-button'
                onClick={() => toggleOrderDetails(order.id)}
              >
                {expandedOrderId === order.id ? 'Згорнути' : 'Детальніше'}
              </button>
            </div>

            {expandedOrderId === order.id && (
              <div className='order-details'>
                <div className='order-items-header'>
                  <div className='item-product'>Товар</div>
                  <div className='item-quantity'>Кількість</div>
                  <div className='item-price'>Підсумок</div>
                </div>

                <div className='order-divider'></div>
                {order.items.map(item => (
                  <div key={item.id} className='order-item'>
                    <div className='item-product'>
                      <div className='item-image'>
                        <Image
                          src={`/images/adminProduct.jpg`}
                          width={100}
                          height={100}
                          alt={'selected product'}
                        />
                      </div>
                      <div className='item-info'>
                        <div className='item-name'>{item.name}</div>
                        <div className='item-code'>Код: {item.code}</div>
                      </div>
                    </div>
                    <div className='item-quantity'>{item.quantity} шт.</div>
                    <div className='item-price'>
                      <div className='current-price'>{item.price} грн</div>
                      <div className='original-price'>
                        <div className='originalPrice'>
                          {item.originalPrice} грн
                        </div>
                        <div className='discount-badge'>-{item.discount}%</div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className='order-total'>
                  <span>Загалом:</span> {getTotalSum(order.items)} грн.
                </div>

                <div className='order-footer'>
                  <div className='footer-item'>
                    <span className='footer-label'>Дата замовлення:</span>
                    <span className='footer-value'>{order.date}</span>
                  </div>
                  <div className='footer-item'>
                    <span className='footer-label'>Спосіб оплати:</span>
                    <span className='footer-value'>{order.paymentMethod}</span>
                  </div>
                  <div className='footer-item'>
                    <span className='footer-label'>Спосіб доставки:</span>
                    <span className='footer-value'>{order.deliveryMethod}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrdersPage
