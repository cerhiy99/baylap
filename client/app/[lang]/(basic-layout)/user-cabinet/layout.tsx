import { Locale } from '@/i18n.config'
import '@/app/[lang]/(basic-layout)/App.scss'
import './userCabinet.scss'
import { getDictionary } from '@/lib/dictionary'
import ListGoodsLeft from '@/app/components/Home/ListGoodsLeft'
import { ReactNode } from 'react'
import Image from 'next/image'
import UserDashboard from './components/userDashboard'

export default async function CabinetLayout({
  children,
  params: { lang }
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  const { home, miniGoods } = await getDictionary(lang)
  return (
    <div className='cabinetLayout'>
      <div className='cabinetLayout__wrapper'>
        <UserDashboard lang={lang} />
        <div className='cabinetLayout--contnet'>{children}</div>
      </div>
      <div className='home-goods'>
        <h2>{home.youWatching}</h2>
        <ListGoodsLeft lang={lang} dictionary={miniGoods} type='' />
      </div>
    </div>
  )
}
