import React from 'react'
import MainSVG from '../../../assest/BreadCrumbs/Main.svg'
import NextSVG from '../../../assest/Admin/Next.svg'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import './AdminHeader.scss'

type Props = {
  lang: Locale
  url: string
  name: string
}

const AdminHeader = ({ lang, url, name }: Props) => {
  return (
    <div className='admin-header-container'>
      <div className='admin-header'>
        <div className='bread-crumb'>
          <Link href={`/${lang}`}>
            <MainSVG /> Главная
          </Link>
          <Link href={`/${lang}/admin`}>
            <NextSVG /> Администрирование
          </Link>
          <Link href={`/${lang}/admin/${url}`}>
            <NextSVG /> {name}
          </Link>
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default AdminHeader
