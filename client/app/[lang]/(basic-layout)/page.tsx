import React from 'react'
import './App.scss'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import MySlider from '@/app/components/Home/MySlider'
import ListArticle from '@/app/components/Home/ListGoods'
import './Home.scss'
import ListGoodsLeft from '@/app/components/Home/ListGoodsLeft'

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { home, miniGoods } = await getDictionary(lang)
  return (
    <div className='home-container'>
      <MySlider
        images={[
          `${process.env.NEXT_PUBLIC_SERVER}main.png`,
          `${process.env.NEXT_PUBLIC_SERVER}main.png`,
          `${process.env.NEXT_PUBLIC_SERVER}main.png`,
          `${process.env.NEXT_PUBLIC_SERVER}main.png`
        ]}
      />
      <div className='home-goods'>
        <h2>{home.title1}</h2>
        <ListArticle lang={lang} dictionary={miniGoods} type='discount' />
        <h2>{home.title2}</h2>
        <ListArticle lang={lang} dictionary={miniGoods} type='top' />
        <h2>{home.title3}</h2>
        <ListArticle lang={lang} dictionary={miniGoods} type='novetly' />
        <h2>{home.title4}</h2>
        <ListArticle lang={lang} dictionary={miniGoods} type='reviews' />
        <h2>{home.youWatching}</h2>
        <ListGoodsLeft lang={lang} dictionary={miniGoods} type='' />
      </div>
    </div>
  )
}

export default page
