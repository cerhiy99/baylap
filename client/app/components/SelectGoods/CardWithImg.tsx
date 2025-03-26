'use client'
import React, { useEffect, useState } from 'react'
import './CardWithImg.scss'
import ImgContainer from './ImgContainer'
import SelectGoodsTextContainer from './SelectGoodsTextContainer'
import SeeMore from './SeeMore'
import { Locale } from '@/i18n.config'
import AboutGoods from './AboutGoods'
import StaticListTitle from './StaticListTitle'

const CardWithImg = ({
  dictionary,
  selectGoods,
  lang
}: {
  dictionary: any
  selectGoods: any
  lang: Locale
}) => {
  const [selectVolume, setSelectVolume] = useState(0)
  const setVolume = (value: number) => {
    setSelectVolume(value)
  }
  useEffect(() => {}, [selectVolume])
  return (
    <>
      <div className='card-with-img-container'>
        <StaticListTitle
          selectVolume={selectVolume}
          selectGoods={selectGoods}
          dictionary={dictionary}
        />
        <div className='img-and-text-containers'>
          <div className='card-with-img-main'>
            <ImgContainer
              name={selectGoods.name}
              listImg={selectGoods.listVolume[selectVolume].listImg}
              isDiscount={selectGoods.listVolume[selectVolume].discount > 0}
              isHit={selectGoods.listVolume[selectVolume].isHit}
              isFreeDelivery={
                selectGoods.listVolume[selectVolume].isFreeDelivery
              }
            />
          </div>
          <SelectGoodsTextContainer
            lang={lang}
            setVolume={setVolume}
            selectVolume={selectVolume}
            dictionary={dictionary}
            selectGoods={selectGoods}
          />
        </div>
      </div>
      <SeeMore
        listGoods={selectGoods.listGoods}
        lang={lang}
        dictionary={dictionary.SeeMore}
      />
      <AboutGoods
        selectVolume={selectVolume}
        selectGoods={selectGoods}
        dictionary={dictionary.aboutProduct}
      />
    </>
  )
}

export default CardWithImg
