import AddCategory from '@/app/components/Admin/Category/AddCategory'
import React from 'react'
import './AddProduct.scss'
import AddSubcategory from '@/app/components/Admin/Subcategory/AddSubcategory'
import AddCategoryFilter from '@/app/components/Admin/add-product/AddCategoryFilter'
import AddCountryMade from '@/app/components/Admin/add-product/AddCountryMade'
import AddBrand from '@/app/components/Admin/add-product/AddBrend'
import AddGoodsPage from '@/app/components/Admin/add-product/AddProduct'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='add-product-container'>
      <AddBrand />
      <AddCountryMade />
      <AddCategory />
      <AddCategoryFilter />
      <AddSubcategory />
      <AddGoodsPage />
    </div>
  )
}

export default page
