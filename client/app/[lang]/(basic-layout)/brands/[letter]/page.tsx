import React from 'react'
import './BrendLetter.scss'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const getData = async (lang: Locale) => {
  //return [{ id: 1, name: `Oава` }]
}

const page = async ({
  params: { lang, letter }
}: {
  params: { lang: Locale; letter: string }
}) => {
  const normalizedLetter = decodeURIComponent(letter).toUpperCase()
  const brends = [
    { id: 1, name: `${normalizedLetter}vflsc` },
    { id: 2, name: `${normalizedLetter}ovsxw` },
    { id: 3, name: `${normalizedLetter}goezc` },
    { id: 4, name: `${normalizedLetter}kpsd` },
    { id: 5, name: `${normalizedLetter}htca` },
    { id: 6, name: `${normalizedLetter}vflsc` },
    { id: 7, name: `${normalizedLetter}ovsxw` },
    { id: 8, name: `${normalizedLetter}goezc` },
    { id: 9, name: `${normalizedLetter}kpsd` },
    { id: 10, name: `${normalizedLetter}htca` },
    { id: 11, name: `${normalizedLetter}vflsc` },
    { id: 12, name: `${normalizedLetter}ovsxw` },
    { id: 13, name: `${normalizedLetter}goezc` },
    { id: 14, name: `${normalizedLetter}kpsd` },
    { id: 15, name: `${normalizedLetter}htca` },
    { id: 16, name: `${normalizedLetter}vflsc` },
    { id: 17, name: `${normalizedLetter}ovsxw` },
    { id: 18, name: `${normalizedLetter}goezc` },
    { id: 19, name: `${normalizedLetter}kpsd` },
    { id: 20, name: `${normalizedLetter}htca` }
  ]
  const { listBrends } = await getDictionary(lang)

  return (
    <div className='brend-letter-container'>
      <BreadCrumbs
        lang={lang}
        listUrles={[
          { url: 'brands', name: listBrends.title },
          {
            url: `brands/${letter}`,
            name: normalizedLetter
          }
        ]}
      />
      <div className='current-brend'>
        <h1>
          {listBrends.titleLetter}
          {normalizedLetter}
        </h1>
        <div className='brends-letter'>
          <p>{normalizedLetter}</p>
          <div className='brends'>
            {brends.map((brend: any) => (
              <div key={brend.id} className='brend'>
                {brend.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
