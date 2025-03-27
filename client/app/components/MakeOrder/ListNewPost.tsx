'use client'
import React, { useEffect, useState } from 'react'
import './ListNewPost.scss'
import ArrowDown from '../../assest/MakeOrder/ArrowDown.svg'
import SearchSVG from '../../assest/MakeOrder/Search.svg'
import { CityDataNewPost, getCitiesDefault, searchCity } from './apiNewPost'
import CurierOrPosOrDepartament from './CurierOrPosOrDepartament'

type Props = {
  typeDelivery: 'department' | 'post' | 'curier'
  selectFinishDelivery: any
  infoDelivery: any
}

const ListNewPost = ({
  typeDelivery,
  selectFinishDelivery,
  infoDelivery
}: Props) => {
  const [selectLocality, setSelectLocality] = useState()
  const [isOpenLocality, setIsOpenLocality] = useState<boolean>(false)
  const openOrClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpenLocality(!isOpenLocality)
    return false
  }
  const [popularCities, setPopularCities] = useState<CityDataNewPost[]>([])
  const [searchCityes, setSearchCityes] = useState<CityDataNewPost[]>([])
  const [selectCity, setSelectCity] = useState<CityDataNewPost | null>(null)
  const [selectCityInputValue, setSelectCityInputValue] = useState<string>('')
  const [writeSearchCity, setWriteSearcgCity] = useState('')

  const changeWriteCity = async (value: string) => {
    setWriteSearcgCity(value)
    if (value.length >= 3) {
      const res = await searchCity(value)
      setSearchCityes(res)
    } else {
      setSearchCityes(popularCities)
    }
  }

  const changeSelectCity = (selectCity: CityDataNewPost) => {
    setSelectCity(selectCity)
    setSelectCityInputValue(selectCity.Description)
    setIsOpenLocality(false)
  }
  const getDefaultCities = async () => {
    const res = await getCitiesDefault()
    setPopularCities(res)
    setSearchCityes(res)
  }
  useEffect(() => {
    setIsOpenLocality(false)
  }, [typeDelivery])
  useEffect(() => {
    getDefaultCities()
  }, [])

  useEffect(() => {
    if (!infoDelivery.typeDelivery) {
      setSelectCityInputValue('')
      setSelectCity(null)
    }
  }, [infoDelivery])

  return (
    <div className='locality-container'>
      <div className='locality'>
        Населений пункт <span>*</span>
      </div>
      <div className='open-locality' onClick={openOrClose}>
        <input
          placeholder='Населений пункт'
          style={{ marginTop: '7.5px', cursor: 'pointer' }}
          type='text'
          id='input-no-focus'
          value={selectCityInputValue}
          readOnly // Забороняє редагування
          onClick={e => e.preventDefault()} // Запобігає фокусу
        />
        <div className={`svg-arrow-down ${isOpenLocality ? 'rotate' : ''}`}>
          <ArrowDown />
        </div>
      </div>
      <div className={`dropdown1 ${isOpenLocality ? 'visible' : ''}`}>
        <div className='search-city-container'>
          <div className='search-locality'>
            <div className='svg-search-locality'>
              <SearchSVG />
            </div>
            <input
              placeholder='Населений пункт'
              style={{ marginTop: '7.5px', paddingLeft: '30px' }}
              type='text'
              value={writeSearchCity}
              onChange={e => changeWriteCity(e.target.value)}
            />
          </div>
          <label style={{ color: '#7d7d91' }}>
            Почни вводити назву населеного пункту від 3-x букв
          </label>
          <ul>
            {searchCityes.map(x => (
              <li onClick={() => changeSelectCity(x)} key={x.Ref}>
                <div className='li-description'>{`${x.Description}`}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className='list-popular'>
          <ul>
            {popularCities.slice(0, 5).map(x => (
              <li onClick={() => changeSelectCity(x)} key={x.Ref}>
                {x.Description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectCity && (
        <CurierOrPosOrDepartament
          selectLocality={selectCity}
          typeDelivery={typeDelivery}
          selectFinishDelivery={selectFinishDelivery}
        />
      )}
    </div>
  )
}

export default ListNewPost
