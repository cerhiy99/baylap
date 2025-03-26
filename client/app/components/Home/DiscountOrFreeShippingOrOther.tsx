import React from 'react'
import './DiscountOrFreeShippingOrOther.scss'

type Props = {
  isDiscount: boolean
  isFreeShipping: boolean
  isBestseller: boolean //Хит продаж
  isNovetly: boolean
}

const DiscountOrFreeShippingOrOther = (props: Props) => {
  return (
    <div className='discount-or-free-container'>
      <div style={{ backgroundColor: 'red' }} className='discount'>
        Акция
      </div>
      <div style={{ backgroundColor: 'red' }} className='discount'>
        Хит
      </div>
    </div>
  )
}

export default DiscountOrFreeShippingOrOther
