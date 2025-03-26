import { Locale } from '@/i18n.config'
import Link from 'next/link'
import React from 'react'
import RightSVG from '../../assest/Goods/Right.svg'
import { getDictionary } from '@/lib/dictionary'
import './GoodsBreadCumbs.scss'

type Props = {
  lang: Locale
  listUrl: { url: string; name: string }[]
}

const GoodsBreadCumbs = async ({ lang, listUrl }: Props) => {
  const { urls } = await getDictionary(lang)
  return (
    <div className='goods-bread-crumbs-container'>
      <Link href={`/${lang}`}>{urls.main}</Link>
      {listUrl.map((x, idx) => (
        <div key={idx} className='list-urls'>
          <RightSVG /> <Link href={x.url}>{x.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default GoodsBreadCumbs
