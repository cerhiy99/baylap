import React from 'react'
import './BreadCrumbs.scss'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import MainSVG from '../../assest/BreadCrumbs/Main.svg'
import NextSVG from '../../assest/BreadCrumbs/Next.svg'
import Link from 'next/link'

type Props = {
  listUrles: { url: string; name: string }[]
  lang: Locale
}

const BreadCrumbs = async ({ listUrles, lang }: Props) => {
  const { urls } = await getDictionary(lang)
  return (
    <div className='bread-crumbs-container'>
      <div className='bread-crumb'>
        <Link href={`/${lang}`}>
          <MainSVG /> {urls.main}
        </Link>
        {listUrles.map(x => (
          <Link key={x.url} href={`/${lang}/${x.url}`}>
            <NextSVG /> {x.name[0].toUpperCase() + x.name.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BreadCrumbs
