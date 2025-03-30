import Filters from '@/app/components/goods/Filters/Filters'
import { Locale } from '@/i18n.config'
import React from 'react'
import '../Goods.scss'
import ListGoods from '@/app/components/goods/ListGoods'
import { getDictionary } from '@/lib/dictionary'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import Sort from '@/app/components/goods/Sort/Sort'

const page = async ({ params }: { params: { page: Locale; lang: Locale } }) => {
  const { miniGoods } = await getDictionary(params.lang)
  return (
    <div className='goods-container'>
      <BreadCrumbs
        lang={params.lang}
        listUrles={[{ name: 'товари', url: `goods/${params.page}` }]}
      />
      <div className='goods-main'>
        <Filters lang={params.lang} />
        <div className='sore-and-goods'>
          <Sort lang={params.lang} />
          <ListGoods
            isFilter={true}
            lang={params.lang}
            dictionary={miniGoods}
          />
        </div>
      </div>
    </div>
  )
}

export default page
