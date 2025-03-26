'use client'
import { Rating } from '@mui/material'
import React from 'react'
import './MyRating.scss'

type Props = {
  rating: number
}

const MyRating = ({ rating }: Props) => {
  return (
    <div className='my-rating'>
      <Rating
        name='half-rating-read'
        defaultValue={rating}
        precision={0.1}
        readOnly
        sx={{
          fontSize: '20px', // Задання конкретного розміру
          color: '#ff671f'
        }}
      />
      <p>{rating}</p>
    </div>
  )
}

export default MyRating
