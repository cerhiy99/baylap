'use client'
import React, { useEffect, useState } from 'react'
import './Subcategory.scss'
import {
  Button,
  Alert,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material'
import { $authHost } from '@/app/http'
import {
  CategoryInterface,
  CategoryTitleInterface
} from '@/app/interfaces/Category'

const AddSubcategory = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>([])
  const [categoryId, setCategoryId] = useState<string | ''>('')
  const [titleCategories, setTitleCategories] = useState<
    CategoryTitleInterface[]
  >([])
  const [categoryTitleId, setCategoryTitleId] = useState<string | ''>('')
  const [nameua, setNameua] = useState<string>('')
  const [nameru, setNameru] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [error, setError] = useState<null | string>(null)
  const [success, setSuccess] = useState<null | string>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await $authHost.get('category/get')
        if (res.status === 200) {
          setCategories(res.data.res)
        } else {
          setError('Помилка завантаження категорій.')
        }
      } catch (err) {
        setError('Помилка сервера при завантаженні категорій.')
      }
    }
    fetchCategories()
  }, [])

  const fetchTitleCategories = async (id: string) => {
    try {
      const res = await $authHost.get(
        `category/getTitleCategories?categoryId=${id}`
      )
      if (res.status === 200) {
        setTitleCategories(res.data.res)
        setError(null)
      } else {
        setError('Помилка завантаження титулів категорій.')
      }
    } catch (err) {
      setError('Помилка сервера при завантаженні титулів категорій.')
    }
  }

  const addSubcategory = async () => {
    if (!nameua || !nameru || !categoryId || !categoryTitleId) {
      setError('Всі поля повинні бути заповнені.')
      setSuccess(null)
      return
    }

    try {
      const res = await $authHost.post('subcategory/add', {
        nameua,
        nameru,
        url,
        categoryId,
        categoryTitleId
      })

      setSuccess('Підкатегорія успішно додана.')
      setError(null)
    } catch (err) {
      setError('Помилка сервера при додаванні підкатегорії.')
      setSuccess(null)
    }
  }

  return (
    <div className='admin-category'>
      <div className='add-category'>
        <h1>Додати підкатегорію</h1>
        {error && <Alert severity='error'>{error}</Alert>}
        {success && <Alert severity='success'>{success}</Alert>}
        <div className='text-with-input'>
          <FormControl fullWidth>
            <InputLabel id='category-select-label'>Категорія</InputLabel>
            <Select
              labelId='category-select-label'
              id='category-select'
              value={categoryId}
              onChange={e => {
                const selectedId = e.target.value
                setCategoryId(selectedId)
                fetchTitleCategories(selectedId)
              }}
            >
              {categories.map(category => (
                <MenuItem key={category.id} value={category.id}>
                  {category.nameua}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='text-with-input'>
          <FormControl fullWidth>
            <InputLabel id='title-category-select-label'>Титул</InputLabel>
            <Select
              labelId='title-category-select-label'
              id='title-category-select'
              value={categoryTitleId}
              onChange={e => setCategoryTitleId(e.target.value)}
              disabled={!categoryId}
            >
              {titleCategories.map(title => (
                <MenuItem key={title.id} value={title.id}>
                  {title.nameua}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='text-with-input'>
          <label htmlFor='nameua'>Назва українською</label>
          <input
            id='nameua'
            type='text'
            value={nameua}
            onChange={e => setNameua(e.target.value)}
          />
        </div>
        <div className='text-with-input'>
          <label htmlFor='nameru'>Назва російською</label>
          <input
            id='nameru'
            type='text'
            value={nameru}
            onChange={e => setNameru(e.target.value)}
          />
        </div>
        <div className='text-with-input'>
          <label htmlFor='nameru'>посилання</label>
          <input
            id='url'
            type='text'
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
        <Button variant='contained' color='primary' onClick={addSubcategory}>
          Додати
        </Button>
      </div>
    </div>
  )
}

export default AddSubcategory
