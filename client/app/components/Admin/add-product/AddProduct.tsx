'use client'
import React, { useState, useEffect } from 'react'
import { $authHost } from '@/app/http'
import './AddProduct.scss'
import ReactQuill from 'react-quill' // Імпортуємо ReactQuill
import 'react-quill/dist/quill.snow.css' // Імпортуємо стилі для редактора

interface Category {
  id: string
  nameuk: string
}

interface Subcategory {
  id: number
  nameuk: string
}

interface FilterCategory {
  id: number
  nameuk: string
  nameru: string
}

interface FilterValue {
  filterCategoryId: number
  valueuk: string
  valueru: string
}

interface Brend {
  id: string
  name: string
}

interface Country {
  id: string
  nameuk: string
}

interface VolumeItem {
  volume: string
  price: string
  discount: string
  priceWithDiscount: string
  images: File[] // Вказуємо, що images — це масив File
}

const getCategoryUrl = 'category/get'
const getSubcategoryUrl = 'subcategory/get'
const getFilterUrl = 'filterCategory/getCategoryFilter'
const getBrendUrl = 'brend/get'
const getCountryUrl = 'countryMade/getCountryMade'

const AddGoodsPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [subcategories, setSubcategories] = useState<Subcategory[]>([])
  const [filters, setFilters] = useState<FilterCategory[]>([])
  const [brends, setBrends] = useState<Brend[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [nameuk, setNameuk] = useState('')
  const [nameru, setNameru] = useState('')
  const [art, setArt] = useState('')
  const [descriptionuk, setDescriptionuk] = useState('')
  const [descriptionru, setDescriptionru] = useState('')
  const [characteristicsuk, setCharacteristicsuk] = useState<
    { ukTitle: string; ukDescription: string }[]
  >([])

  const [characteristicsru, setCharacteristicsru] = useState<
    { ruTitle: string; ruDescription: string }[]
  >([])

  const [selectedBrend, setSelectedBrend] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [subcategoryId, setSubcategoryId] = useState<number>(0)
  const [volume, setVolume] = useState<VolumeItem[]>([]) // Стан для volume

  const [video, setVideo] = useState<File | null>(null)
  const [images, setImages] = useState<FileList | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<FilterValue[]>(
    filters.map(filter => ({
      filterCategoryId: filter.id,
      valueuk: '', // Початково порожній рядок
      valueru: '' // Початково порожній рядок
    }))
  )
  const handleFilterChange = (
    categoryId: number,
    value: string,
    lang: 'uk' | 'ru'
  ) => {
    setSelectedFilters(prevFilters => {
      const newFilters = [...prevFilters]
      const filter = newFilters.find(f => f.filterCategoryId === categoryId)
      if (filter) {
        if (lang === 'uk') {
          filter.valueuk = value
        } else {
          filter.valueru = value
        }
      }
      return newFilters
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, brendsRes, countriesRes]: any = await Promise.all(
          [
            $authHost.get(getCategoryUrl),
            $authHost.get(getBrendUrl),
            $authHost.get(getCountryUrl)
          ]
        )
        setCategories(categoriesRes.data.res)
        setBrends(brendsRes.data)
        setCountries(countriesRes.data.res)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const fetchSubcategoriesAndFilters = async (categoryId: string) => {
    try {
      const [subcategoriesRes, filtersRes]: any = await Promise.all([
        $authHost.get(`${getSubcategoryUrl}?categoryId=${categoryId}`),
        $authHost.get(`${getFilterUrl}?categoryId=${categoryId}`)
      ])
      setSubcategories(subcategoriesRes.data.res)
      setFilters(filtersRes.data.res)

      // ініціалізація filterValues з правильними індексами
      setSelectedFilters(
        filtersRes.data.res.map((filter: FilterCategory) => ({
          filterCategoryId: filter.id,
          valueuk: '',
          valueru: ''
        }))
      )
    } catch (error) {
      console.error('Error fetching subcategories or filters:', error)
    }
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    if (value) fetchSubcategoriesAndFilters(value)
  }

  const handleVolumeChange = (
    index: number,
    key: keyof VolumeItem,
    value: string
  ) => {
    const newVolume: any = [...volume]
    newVolume[index][key] = value
    setVolume(newVolume)
  }

  const addVolumeField = () => {
    setVolume([
      ...volume,
      {
        volume: '',
        price: '',
        discount: '',
        priceWithDiscount: '',
        images: [] // Замінили null на порожній масив
      }
    ])
  }

  const handleImageChange = (index: number, files: FileList) => {
    const newVolume = [...volume]
    const fileArray = Array.from(files) // Перетворюємо FileList на масив

    // Перезаписуємо зображення для конкретної варіації
    newVolume[index].images = fileArray // Перезаписуємо, а не додаємо

    setVolume(newVolume) // Оновлюємо стейт
  }

  const handleCharacteristicChange = (
    index: number,
    value: string,
    lang: 'uk' | 'ru',
    field: 'title' | 'description'
  ) => {
    if (lang === 'uk') {
      const newCharacteristicsuk = [...characteristicsuk]
      if (field === 'title') {
        newCharacteristicsuk[index].ukTitle = value
      } else {
        newCharacteristicsuk[index].ukDescription = value
      }
      setCharacteristicsuk(newCharacteristicsuk)
    } else {
      const newCharacteristicsru = [...characteristicsru]
      if (field === 'title') {
        newCharacteristicsru[index].ruTitle = value
      } else {
        newCharacteristicsru[index].ruDescription = value
      }
      setCharacteristicsru(newCharacteristicsru)
    }
  }

  const generateCharacteristicHTMLuk = () => {
    return (
      '<ul>' +
      characteristicsuk
        .map(
          char =>
            `<li><p>${char.ukTitle}</p><span>${char.ukDescription}</span></li>`
        )
        .join('') +
      '</ul>'
    )
  }

  const generateCharacteristicHTMLru = () => {
    return (
      '<ul>' +
      characteristicsru
        .map(
          char =>
            `<li><p>${char.ruTitle}</p><span>${char.ruDescription}</span></li>`
        )
        .join('') +
      '</ul>'
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('nameuk', nameuk)
    formData.append('nameru', nameru)
    formData.append('art', art)
    formData.append('descriptionuk', descriptionuk)
    formData.append('descriptionru', descriptionru)
    formData.append('characteristicuk', generateCharacteristicHTMLuk())
    formData.append('characteristicru', generateCharacteristicHTMLru())

    formData.append('brendId', selectedBrend)
    formData.append('categoryId', selectedCategory)
    formData.append('countryMadeId', selectedCountry)
    formData.append('subcategoryId', subcategoryId.toString())
    // Масив всіх зображень
    let allImages: any = []

    // Перебір варіацій і додавання зображень у загальний масив
    volume.forEach(vol => {
      vol.images.forEach(img => {
        allImages.push(img) // Додаємо зображення в загальний масив
      })
    })

    // Формуємо новий volume з індексами зображень, скидаючи індекси на 0, 1, 2...
    const updatedVolume = volume.map(vol => {
      const imageIndexes: any = []

      // Просто присвоюємо індекси від 0 для кожного зображення в масиві
      vol.images.forEach((img, index) => {
        imageIndexes.push(index) // Додаємо індекс як просто порядковий номер
      })

      return {
        ...vol,
        images: imageIndexes // Замість зображень, передаємо їх індекси від 0, 1, 2...
      }
    })

    formData.append('volume', JSON.stringify(updatedVolume))

    formData.append('filters', JSON.stringify(selectedFilters))
    console.log(images)
    if (video) formData.append('video', video)
    // Додаємо файли для кожної варіації
    volume.forEach((vol, index) => {
      vol.images.forEach((img, i) => {
        // Використовуємо індекс варіації (index) та індекс картинки (i)
        // Для кожного нового volume скидаємо індекс зображення (i) до 0
        formData.append(`imgs[${index}][${i}]`, img) // Передаємо індекс варіації і індекс зображення
      })
    })

    try {
      await $authHost.post('goods/add', formData)
      alert('Товар додано успішно!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Сталася помилка при додаванні товару.')
    }
  }

  console.log(filters)

  return (
    <div className='add-product-form'>
      <h2 className='add-product-title'>Додати товар</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          placeholder='Назва товару (укр)'
          value={nameuk}
          onChange={e => setNameuk(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Назва товару (рос)'
          value={nameru}
          onChange={e => setNameru(e.target.value)}
          className='input'
        />
        <input
          type='text'
          placeholder='Артикул'
          value={art}
          onChange={e => setArt(e.target.value)}
          className='input'
        />

        <ReactQuill
          value={descriptionuk} // Відображаємо введений текст
          onChange={value => setDescriptionuk(value)} // Функція для обробки змін
          modules={{
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }],
              ['bold', 'italic', 'underline'],
              ['link', 'image'],
              ['clean']
            ]
          }} // Параметри панелі інструментів (вибір шрифтів, товщина, кольори, вставка зображень)
          formats={[
            'header',
            'font',
            'size',
            'bold',
            'italic',
            'underline',
            'align',
            'list',
            'bullet',
            'link',
            'image'
          ]}
          placeholder='Опис товару (укр)'
          className='quill-editor' // Якщо хочете додатково стилізувати через клас
        />
        <br />
        <ReactQuill
          value={descriptionru} // Відображаємо введений текст
          onChange={value => setDescriptionru(value)} // Функція для обробки змін
          modules={{
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }],
              ['bold', 'italic', 'underline'],
              ['link', 'image'],
              ['clean']
            ]
          }} // Параметри панелі інструментів (вибір шрифтів, товщина, кольори, вставка зображень)
          formats={[
            'header',
            'font',
            'size',
            'bold',
            'italic',
            'underline',
            'align',
            'list',
            'bullet',
            'link',
            'image'
          ]}
          placeholder='Опис товару (рос)'
          className='quill-editor' // Якщо хочете додатково стилізувати через клас
        />

        <h3 className='sub-title'>Характеристики (укр)</h3>
        {characteristicsuk.map((_, index) => (
          <div key={index} className='characteristics'>
            <input
              type='text'
              placeholder='Заголовок (укр)'
              value={characteristicsuk[index].ukTitle}
              onChange={e =>
                handleCharacteristicChange(index, e.target.value, 'uk', 'title')
              }
              className='input'
            />
            <input
              type='text'
              placeholder='Опис (укр)'
              value={characteristicsuk[index].ukDescription}
              onChange={e =>
                handleCharacteristicChange(
                  index,
                  e.target.value,
                  'uk',
                  'description'
                )
              }
            />
          </div>
        ))}
        <button
          type='button'
          onClick={() =>
            setCharacteristicsuk([
              ...characteristicsuk,
              { ukTitle: '', ukDescription: '' }
            ])
          }
        >
          Додати характеристику (укр)
        </button>

        <h3 className='sub-title'>Характеристики (рос)</h3>
        {characteristicsru.map((_, index) => (
          <div key={index} className='characteristics'>
            <input
              type='text'
              placeholder='Заголовок (рос)'
              value={characteristicsru[index].ruTitle}
              onChange={e =>
                handleCharacteristicChange(index, e.target.value, 'ru', 'title')
              }
              className='input'
            />
            <input
              type='text'
              placeholder='Опис (рос)'
              value={characteristicsru[index].ruDescription}
              onChange={e =>
                handleCharacteristicChange(
                  index,
                  e.target.value,
                  'ru',
                  'description'
                )
              }
              className='input'
            />
          </div>
        ))}
        <button
          type='button'
          onClick={() =>
            setCharacteristicsru([
              ...characteristicsru,
              { ruTitle: '', ruDescription: '' }
            ])
          }
        >
          Додати характеристику (рос)
        </button>
        <br />
        <br />

        {/* Поля для вибору категорій, брендів і т. д. */}
        <select
          value={selectedCategory}
          onChange={e => handleCategoryChange(e.target.value)}
          className='input'
        >
          <option value=''>Виберіть категорію</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.nameuk}
            </option>
          ))}
        </select>
        <select
          value={subcategoryId}
          onChange={e => setSubcategoryId(Number(e.target.value))}
          className='input'
        >
          <option value=''>Виберіть підкатегорію</option>
          {subcategories.map(subcategory => (
            <option key={subcategory.id} value={subcategory.id}>
              {subcategory.nameuk}
            </option>
          ))}
        </select>

        <select
          value={selectedBrend}
          onChange={e => setSelectedBrend(e.target.value)}
          className='input'
        >
          <option value=''>Виберіть бренд</option>
          {brends.map(brend => (
            <option key={brend.id} value={brend.id}>
              {brend.name}
            </option>
          ))}
        </select>

        <select
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
          className='input'
        >
          <option value=''>Виберіть країну виробника</option>
          {countries.map(country => (
            <option key={country.id} value={country.id}>
              {country.nameuk}
            </option>
          ))}
        </select>

        {filters.map(filter => (
          <div key={filter.id}>
            <h3>{filter.nameuk}</h3>
            <div>
              <input
                type='text'
                placeholder={`Значення для ${filter.nameuk}`}
                value={
                  selectedFilters.find(f => f.filterCategoryId === filter.id)
                    ?.valueuk || ''
                }
                onChange={e =>
                  handleFilterChange(filter.id, e.target.value, 'uk')
                }
              />
              <input
                type='text'
                placeholder={`Значення для ${filter.nameru}`}
                value={
                  selectedFilters.find(f => f.filterCategoryId === filter.id)
                    ?.valueru || ''
                }
                onChange={e =>
                  handleFilterChange(filter.id, e.target.value, 'ru')
                }
              />
            </div>
          </div>
        ))}
        <br />
        <br />

        {/* Volume */}
        {volume.map((_, index) => (
          <div key={index}>
            <input
              type='text'
              placeholder='Обсяг (мл)'
              value={volume[index].volume}
              onChange={e =>
                handleVolumeChange(index, 'volume', e.target.value)
              }
              className='input'
            />
            <input
              type='text'
              placeholder='Ціна'
              value={volume[index].price}
              onChange={e => handleVolumeChange(index, 'price', e.target.value)}
              className='input'
            />
            <input
              type='text'
              placeholder='Знижка'
              value={volume[index].discount}
              onChange={e =>
                handleVolumeChange(index, 'discount', e.target.value)
              }
              className='input'
            />
            <input
              type='text'
              placeholder='Ціна зі знижкою'
              value={volume[index].priceWithDiscount}
              onChange={e =>
                handleVolumeChange(index, 'priceWithDiscount', e.target.value)
              }
              className='input'
            />
            <input
              type='file'
              multiple // дозволяє вибирати кілька файлів
              onChange={e => handleImageChange(index, e.target.files!)}
              className='input'
            />
          </div>
        ))}

        <button type='button' onClick={addVolumeField}>
          Додати обсяг
        </button>

        {/* Submit button */}
        <button type='submit'>Додати товар</button>
      </form>
    </div>
  )
}

export default AddGoodsPage
