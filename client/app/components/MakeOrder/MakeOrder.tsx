'use client'

import React, { useEffect, useRef, useState } from 'react'
import Inputmask from 'inputmask'
import { Locale } from '@/i18n.config'
import './MakeOrder.scss'
import NewPost from '../../assest/MakeOrder/NewPost.svg'
import UkrPost from '../../assest/MakeOrder/UkrPost.svg'
import PencilSVG from '../../assest/MakeOrder/Pencil.svg'
import SearchNewPost from './SearchNewPost'
import SearchUkrPost from './SearchUkrPost'
import MarkSVG from '../../assest/MakeOrder/Mark.svg'
import Coment from './Coment'
import ListFromBasket from './ListFromBasket'

const listWayDelivery = [
  {
    id: 1,
    name: '🟡 Оплата на рахунок IBAN або на картку ▪ ЧЕКАЮ ДЗВІНОК ▪ хочу обговорити деталі замовлення'
  },
  {
    id: 2,
    name: "🟢 Оплата на рахунок IBAN або на картку ▪ ДЗВОНИТИ НЕ ОБОВ'ЯЗКОВО ▪ чекаю SMS з реквізитами"
  },
  {
    id: 3,
    name: '⚪Наложений платіж по передоплаті ▪ ЧЕКАЮ ДЗВІНОК ▪ хочу обговорити деталі замовлення'
  }
]

type Props = {
  lang: Locale
}

const MakeOrder: React.FC<Props> = ({ lang }) => {
  const phoneInputRef = useRef<HTMLInputElement>(null)

  const [isContact, setIsContact] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [isFinishFillDate, setIsFinishFillDate] = useState<boolean>(false)

  const [selectPost, setSelectPost] = useState<'new' | 'ukr' | 'seller' | null>(
    'new'
  )
  const [selectWayDelivery, setSelectWayDelivery] = useState(0)

  useEffect(() => {
    // Ініціалізація маски для телефону через реф
    if (phoneInputRef.current) {
      Inputmask('+380 (99) 999-99-99').mask(phoneInputRef.current)
    }
  }, [])

  useEffect(() => {
    // Перевірка заповненості полів
    setIsContact(!!(name.trim() && surname.trim() && number[18] != '_'))
  }, [number, name, surname])

  const handleContinue = () => {
    if (isContact) {
      setIsContactOpen(true)
    }
  }

  const [isSelectFinishDelivery, setIsSelectFinishDelivery] = useState(false)
  const [infoDelivery, setInfoDelivery] = useState<any>({})
  const selectFinishDelivery = (info: {}) => {
    setInfoDelivery(info)
    setIsSelectFinishDelivery(true)
  }

  useEffect(() => {}, [isSelectFinishDelivery])

  useEffect(() => {
    if (isContactOpen && isSelectFinishDelivery && selectWayDelivery) {
      setIsFinishFillDate(true)
    } else setIsFinishFillDate(false)
  }, [isContactOpen, isSelectFinishDelivery, selectWayDelivery])

  const clearSetting = () => {
    setNumber('')
    setTimeout(() => {
      if (phoneInputRef.current) {
        Inputmask('+380 (99) 999-99-99').mask(phoneInputRef.current)
      }
    }, 500)
    setName('')
    setSurname('')
    setIsContactOpen(false)
    setIsContact(false)
    setIsSelectFinishDelivery(false)
    setSelectPost('new')
    setSelectWayDelivery(0)
    setInfoDelivery({})
  }

  return (
    <div className='make-order'>
      <h1>Оформлення замовлення</h1>
      <div className='form-with-basket'>
        <form>
          <div className='title'>
            {isContactOpen ? <MarkSVG /> : <div className='number'>1</div>}
            <h2>
              Контактні дані<span>*</span>
            </h2>
          </div>
          <div
            style={{
              borderWidth: isContactOpen ? '0' : '0.75px',
              cursor: 'pointer'
            }}
            className={`contact block ${isContactOpen ? 'open' : ''}`}
          >
            {isContactOpen ? (
              <div onClick={() => setIsContactOpen(false)} className='fade-in'>
                <div className='comtact-open'>
                  <div className='contact-name-and-phone'>
                    <div className='name-and-surname'>
                      <p>{name}</p>
                      <p>{surname}</p>
                    </div>
                    <div className='number'>{number}</div>{' '}
                  </div>

                  <div className='pencil'>
                    <PencilSVG />
                  </div>
                </div>
              </div>
            ) : (
              <div className='fade-in'>
                <p>Отримувач замовлення</p>
                <label>
                  Телефон <span>*</span>
                </label>
                <input
                  ref={phoneInputRef}
                  type='text'
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                  className='phone-input'
                  placeholder='+380 (__) ___-__-__'
                />
                <label>
                  Прізвище <span>*</span>
                </label>
                <input
                  value={surname}
                  onChange={e => setSurname(e.target.value)}
                  type='text'
                  placeholder='Прізвище кирилицею'
                />
                <label>
                  Ім&apos;я <span>*</span>
                </label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='text'
                  placeholder="Ім'я кирилицею"
                />
                <button
                  type='button'
                  onClick={handleContinue}
                  style={{
                    opacity: isContact ? 1 : 0.6,
                    cursor: isContact ? 'pointer' : 'not-allowed'
                  }}
                >
                  Продовжити
                </button>
              </div>
            )}
          </div>
          <div className='title'>
            {isSelectFinishDelivery ? (
              <MarkSVG />
            ) : (
              <div className='number'>2</div>
            )}
            <h2>
              Доставка<span>*</span>
            </h2>
          </div>
          <div onClick={() => setIsSelectFinishDelivery(false)}>
            {(!isSelectFinishDelivery || selectPost == 'new') && (
              <div
                className='delivery block'
                style={{
                  borderWidth:
                    !isContactOpen || isSelectFinishDelivery ? '0' : '0.75px'
                }}
                onClick={() => {
                  setSelectPost('new')
                  setIsSelectFinishDelivery(false)
                }}
              >
                {isSelectFinishDelivery && selectPost == 'new' && (
                  <div
                    onClick={() => setIsSelectFinishDelivery(false)}
                    className={`dropdown ${
                      isSelectFinishDelivery ? 'drop-open' : 'drop-close'
                    }`}
                  >
                    <div className='row'>
                      <NewPost />

                      <div className='curier-or-other'>
                        <div className='row'>
                          <span>Тип доставки:</span>
                          <p>
                            {infoDelivery.typeDelivery == 'curier'
                              ? 'Курєром'
                              : infoDelivery.typeDelivery == 'post'
                                ? 'Поштомат'
                                : 'У відділення'}
                          </p>
                        </div>
                        <div className='row'>
                          <span>Населений пункт:</span>
                          <p>{infoDelivery.selectLocality.Description}</p>
                        </div>
                        {infoDelivery.typeDelivery == 'curier' ? (
                          <>
                            <div className='row'>
                              <span>Вулиця:</span>
                              <p>{infoDelivery.street}</p>
                            </div>
                            <div className='row'>
                              <span>Будинок:</span>
                              <p>{infoDelivery.house}</p>
                            </div>
                            {infoDelivery.apartment.length > 0 && (
                              <div className='row'>
                                <span>Квартира:</span>
                                <p>{infoDelivery.apartment}</p>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className='row'>
                            <span>
                              {infoDelivery.typeDelivery == 'post'
                                ? 'Поштомат'
                                : 'У відділення'}
                              :
                            </span>
                            <p>{infoDelivery.selectInfoDelivery.Description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  onClick={() => setIsSelectFinishDelivery(false)}
                  className={`dropdown ${
                    !isSelectFinishDelivery || selectPost != 'new'
                      ? 'drop-open'
                      : 'drop-close'
                  }`}
                >
                  <div className='row'>
                    <div className='radio-contain'>
                      <input
                        checked={selectPost == 'new'}
                        type='radio'
                        className='radio'
                      />
                    </div>
                    <div className='new-post'>
                      <div className='new-post-title'>
                        <NewPost />
                        <div className='new-post'>Нова Пошта</div>
                        <div className='list-price'>
                          <span>від 60 ₴</span>
                          <span>у поштомат — від 60 ₴</span>
                          <span>у відділення — від 60 ₴</span>
                          <span>кур&apos;єром — від 95 ₴</span>
                        </div>
                        <div
                          className={`dropdown ${
                            selectPost == 'new' ? 'drop-open' : 'drop-close'
                          }`}
                        >
                          <SearchNewPost
                            selectFinishDelivery={selectFinishDelivery}
                            infoDelivery={infoDelivery}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div onClick={() => setIsSelectFinishDelivery(false)}>
            {(!isSelectFinishDelivery || selectPost == 'ukr') && (
              <div
                className='delivery block'
                style={{
                  borderWidth:
                    !isContactOpen || isSelectFinishDelivery ? '0' : '0.75px'
                }}
                onClick={() => {
                  setSelectPost('ukr')
                  setIsSelectFinishDelivery(false)
                }}
              >
                {isSelectFinishDelivery && selectPost == 'ukr' ? (
                  <div style={{ gap: '10px' }} className='row'>
                    <div>
                      <UkrPost />
                    </div>
                    <div>
                      <div className='row'>
                        <span>Область:</span>
                        <p>{infoDelivery.oblast}</p>
                      </div>
                      <div className='row'>
                        <span>Населений пункт:</span>
                        <p>{infoDelivery.city}</p>
                      </div>
                      <div className='row'>
                        <span>Відділення:</span>
                        <p>{infoDelivery.departament}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='row'>
                    <div className='radio-contain'>
                      <input
                        checked={selectPost == 'ukr'}
                        type='radio'
                        className='radio'
                      />
                    </div>
                    <div className='new-post'>
                      <div className='new-post-title'>
                        <UkrPost />
                        <div className='new-post'>Укрпошта</div>
                        <div className='list-price'>
                          <span>від 50 ₴</span>
                          <span>у відділення — від 50 ₴</span>
                        </div>
                      </div>

                      <div
                        className={`dropdown ${
                          selectPost == 'ukr' ? 'drop-open' : 'drop-close'
                        }`}
                      >
                        <SearchUkrPost
                          infoDelivery={infoDelivery}
                          selectFinishDelivery={selectFinishDelivery}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className='title'>
            {selectWayDelivery == 0 ? (
              <div className='number'>3</div>
            ) : (
              <MarkSVG />
            )}
            <h2>
              Оплата <span>*</span>
            </h2>
          </div>
          {selectWayDelivery == 0 ? (
            <div className='list-way-delivery'>
              {listWayDelivery.map(x => (
                <div
                  style={{ borderWidth: isSelectFinishDelivery ? '0.75px' : 0 }}
                  className='way-delvery block'
                  key={x.id}
                  onClick={() => setSelectWayDelivery(x.id)}
                >
                  <input type='radio' checked={selectWayDelivery == x.id} />
                  {x.name}
                </div>
              ))}
            </div>
          ) : (
            <div className='selectWay'>
              <div
                className='way-delvery block'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 0
                }}
                onClick={() => setSelectWayDelivery(0)}
              >
                {listWayDelivery.find(x => x.id == selectWayDelivery)?.name}
                <div style={{ cursor: 'pointer' }} className='svg'>
                  <PencilSVG />
                </div>
              </div>
            </div>
          )}
          {isFinishFillDate && (
            <div className='button-clear-form' onClick={clearSetting}>
              Скинути вибрані налаштування
            </div>
          )}

          <Coment />
        </form>
        <ListFromBasket isFinishFillDate={isFinishFillDate} />
      </div>
    </div>
  )
}

export default MakeOrder
