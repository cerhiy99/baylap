'use client'
import React, { useEffect, useState } from 'react'
import CloseSVG from '../../assest/Goods/Close.svg'
import { MdOutlineChevronLeft } from 'react-icons/md'
import { MdOutlineChevronRight } from 'react-icons/md'
import Image from 'next/image'

type Props = {
  listImg: string[]
  name: string
  isDiscount: boolean
  isHit: boolean
  isFreeDelivery: boolean
}

const ImgContainer = ({
  listImg,
  name,
  isDiscount,
  isHit,
  isFreeDelivery
}: Props) => {
  const [selectUrl, setSelectUrl] = useState(listImg[0])
  const [showImg, setShowImg] = useState(false)
  const [indexShowImg, setIndexShowImg] = useState(0)

  const left = () => indexShowImg != 0 && setIndexShowImg(indexShowImg - 1)

  const right = () =>
    listImg.length - 1 != indexShowImg && setIndexShowImg(indexShowImg + 1)

  const close = () => {
    setShowImg(false)
    setIndexShowImg(0)
  }
  useEffect(() => {
    setSelectUrl(listImg[0])
  }, [listImg])

  return (
    <div className='select-goods-img-container'>
      <div className='discount-or-hit'>
        {isDiscount && <div className='discount'>Знижка</div>}
        {isHit && <div className='is-hit'>Хіт</div>}
        {isFreeDelivery && (
          <div className='is-free-delivery'>Безкоштовна доставка</div>
        )}
      </div>
      <div className='select-img'>
        <Image
          onClick={() => setShowImg(!showImg)}
          src={process.env.NEXT_PUBLIC_SERVER + selectUrl}
          width={500}
          height={500}
          alt={name}
        />
      </div>
      <div className='list-img'>
        {listImg.map(x => (
          <Image
            key={x}
            onClick={() => setSelectUrl(x)}
            className={selectUrl === x ? 'select-mini-img' : ''}
            width={60}
            height={60}
            alt={name}
            src={process.env.NEXT_PUBLIC_SERVER + x}
          />
        ))}
      </div>
      {showImg && (
        <div className='show-img' onClick={close}>
          <div className='show-img-container'>
            <div
              style={{ opacity: indexShowImg != 0 ? 1 : 0.2 }}
              onClick={e => {
                e.stopPropagation()
                left()
              }}
              className='arrow left'
            >
              <MdOutlineChevronLeft size={60} />
            </div>
            <img
              src={
                process.env.NEXT_PUBLIC_SERVER +
                [selectUrl, ...listImg.filter(x => x != selectUrl)][
                  indexShowImg
                ]
              }
            />
            <div
              style={{ opacity: listImg.length - 1 != indexShowImg ? 1 : 0.2 }}
              onClick={e => {
                e.stopPropagation()
                right()
              }}
              className='arrow right'
            >
              <MdOutlineChevronRight size={60} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImgContainer
