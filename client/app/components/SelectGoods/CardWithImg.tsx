'use client'
import React, { RefObject, useEffect, useState } from 'react'
import './CardWithImg.scss'
import ImgContainer from './ImgContainer'
import SelectGoodsTextContainer from './SelectGoodsTextContainer'
import SeeMore from './SeeMore'
import { Locale } from '@/i18n.config'
import AboutGoods from './AboutGoods'
import StaticListTitle from './StaticListTitle'
import ListGoodsLeft from '../Home/ListGoodsLeft'

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
  const [activeSection, setActiveSection] = useState<
    | 'about'
    | 'description'
    | 'characteristics'
    | 'reviews'
    | 'video'
    | 'similar'
  >('about')

  return (
    <>
      <div className='card-with-img-container'>
        <StaticListTitle
          selectVolume={selectVolume}
          selectGoods={selectGoods}
          dictionary={dictionary}
          onChanegeSection={setActiveSection}
          sectionName={activeSection}
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
      <div className='card-with-image__text_h2'>
        <h2>Подивіться ще</h2>
      </div>
      <ListGoodsLeft type='' lang={lang} dictionary={dictionary.SeeMore} />
      {/* <SeeMore
        listGoods={selectGoods.listGoods}
        lang={lang}
        dictionary={dictionary.SeeMore}
      /> */}
      <AboutGoods
        selectVolume={selectVolume}
        selectGoods={selectGoods}
        dictionary={dictionary.aboutProduct}
        sectionName={activeSection}
      />
    </>
  )
}

export default CardWithImg
