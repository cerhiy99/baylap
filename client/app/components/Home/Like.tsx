'use client'
import { RootState } from '@/app/store'
import { addToLike, removeFromLike } from '@/app/store/reducers/cartReducer'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
  goods: any
  selectVolumeIdx: number
}

const Like = ({ goods, selectVolumeIdx }: Props) => {
  const [isInLike, setisInLike] = useState(false)

  const { like } = useSelector((state: RootState) => state.BasketAndLike)

  const dispatch = useDispatch()

  useEffect(() => {
    setisInLike(like.findIndex(x => x.id == goods.id) != -1)
  }, [like])

  const inLike = (e: any) => {
    e.preventDefault()
    if (!isInLike) {
      dispatch(
        addToLike({
          id: goods.id,
          nameUA: goods.name,
          nameRU: goods.name,
          volume: goods.listVolume[selectVolumeIdx]
        })
      )
    } else {
      dispatch(removeFromLike(goods.id))
    }
  }

  return (
    <div
      onClick={inLike}
      className={`like-container ${isInLike ? 'liked' : ''}`}
    >
      <svg
        width='30'
        height='26'
        viewBox='0 0 30 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.5 2C4.9107 2 2 4.73373 2 8.10648C2 10.8291 3.1375 17.2909 14.3344 23.8229C14.535 23.9387 14.7652 24 15 24C15.2348 24 15.465 23.9387 15.6656 23.8229C26.8625 17.2909 28 10.8291 28 8.10648C28 4.73373 25.0893 2 21.5 2C17.9107 2 15 5.70089 15 5.70089C15 5.70089 12.0893 2 8.5 2Z'
          stroke='#D93A3F'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default Like
