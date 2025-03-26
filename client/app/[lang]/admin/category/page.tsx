import React from 'react'
import './Category.scss'
import AddCategory from '@/app/components/Admin/Category/AddCategory'
import AddTitleCategory from '@/app/components/Admin/Category/AddTitleCategory'

const Page = () => {
  return (
    <div className='admin-category'>
      <AddCategory />
      <AddTitleCategory />
    </div>
  )
}

export default Page
