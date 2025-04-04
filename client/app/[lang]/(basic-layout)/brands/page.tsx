import React from 'react'
import { notFound } from 'next/navigation'
import './Brands.scss'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import Link from 'next/link'

// Функція для отримання даних
// const getData = async () => {
//   const res = await fetch(process.env.NEXT_PUBLIC_API_SERVER + 'brend/getFirst')
//   if (!res.ok) return notFound()
//   const data = await res.json()
//   return data.res
// }

// Алфавіти для різних мов
const alphabets: Record<Locale, string[]> = {
  ua: 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'.split(''),
  ru: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')
}

const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').concat(['0-9'])

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  // const brends = await getData()
  const { listBrends } = await getDictionary(lang)

  // Вибір українського або російського алфавіту
  const selectedAlphabet = alphabets[lang] || alphabets.ua

  return (
    <div className='list-brands-container'>
      <div className='list-brands-title'>
        <BreadCrumbs
          listUrles={[{ url: `brands`, name: listBrends.title }]}
          lang={lang}
        />
        <h1>{listBrends.title}</h1>
      </div>
      <div className='list-letter-Brand-container'>
        <div className='list-letter-Brand'>
          {[...englishAlphabet, ...alphabets[lang]].map(x => (
            <Link className='list-url' key={x} href={`/${lang}/brands/${x}`}>
              {x}
            </Link>
          ))}
        </div>
      </div>
      <div className='list-brands'>
        {/* {brends.map((x: any, index: number) => (
          <div key={x.id} className='brands-and-title-letter'>
            <p>{x.startWith}</p>
            <div className='brands'>
              {x.brends.map((brend: any) => (
                <div key={brend.id} className='brand'>
                  {brend.name}
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default page
