import AdminHeader from '@/app/components/Admin/AdminHeader/AdminHeader'
import { Locale } from '@/i18n.config'
import React from 'react'
import SearchSVG from '@/app/assest/Admin/Search.svg'
import ProductsTable from '@/app/components/Admin/products/ProductsTable'
import LeftSVG from '@/app/assest/Admin/Left.svg'
import RightSVG from '@/app/assest/Admin/Right.svg'

const page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div>
      <AdminHeader url='/' name='Товари' lang={lang} />
      <div className='admin-items-container'>
        <div className='filter-container'>
          <div className='filters'>
            <div className='select filter'>
              <p>Категорії: </p>
              <input type='date' />
            </div>
            <div className='filter'>
              Виробник: <input type='date' />
            </div>

            <div className='admin-items-search'>
              <input type='text' placeholder='Пошук товарів...' />
              <div className='search-svg'>
                <SearchSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsTable />
      <div className='pagination'>
        <div className='left'>
          <LeftSVG />
        </div>
        <div className='number select'>1</div>
        <div className='number'>2</div>
        <div className='number'>3</div>
        <div className='number'>4</div>
        <div className='number'>5</div>
        <div className='number'>6</div>
        <div className='right'>
          <RightSVG />
        </div>
      </div>
    </div>
  )
}

export default page
