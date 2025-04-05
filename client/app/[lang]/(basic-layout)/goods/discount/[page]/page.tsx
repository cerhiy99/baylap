import { Locale } from '@/i18n.config'
import React from 'react'
import './Discount.scss'
import ListGoods from '@/app/components/goods/ListGoods'
import { getDictionary } from '@/lib/dictionary'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import PaginationMain from '@/app/components/paginationMain/paginationMain'

const page = async ({ params }: { params: { page: Locale; lang: Locale } }) => {
  const { miniGoods } = await getDictionary(params.lang)
  return (
    <div className='goods-container-discount'>
      <BreadCrumbs
        lang={params.lang}
        listUrles={[{ name: 'акції', url: `goods/${params.page}` }]}
      />
      <h1>Акції</h1>
      <div className='goods-main'>
        <div className='sore-and-goods'>
          <ListGoods
            isFilter={false}
            lang={params.lang}
            dictionary={miniGoods}
          />
        </div>
      </div>
      <div className='discount-pagination'>
        <PaginationMain
          totalPages={8}
          url={`/${params.lang}/goods/discount/`}
          showPages={3}
          queryParams=''
          currentPage={parseInt(params.page)}
        />
      </div>
    </div>
  )
}

export default page
