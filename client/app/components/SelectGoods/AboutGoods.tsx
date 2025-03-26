//'use client'
import React from 'react'
import './AboutGoods.scss'
import InBasket from './InBasket'
import CardSelectGoods from './CardSelectGoods'
import AddReviews from '../../assest/Goods/AddRevies.svg'
import ListImgReviewsBuys from './ListImgReviewsBuys'
import ClientRating from '../Reviews/ClientRating'
import MyClientRating from './MyClientRating'
import SelectSortSVG from '../../assest/Goods/SelectSort.svg'
import Review from './Review'
import ArrowRightSVG from '../../assest/Goods/ArrowRight.svg'
import ListGoodsLeft from '../Home/ListGoodsLeft'
import AddReview from './AddReview'

type Props = { dictionary: any; selectGoods: any; selectVolume: number }

const AboutGoods = ({ dictionary, selectGoods, selectVolume }: Props) => {
  return (
    <div className='about-goods'>
      <div id='aboutGoodsContainer' className='about-goods-container'>
        <div className='text'>
          <div className='description'>
            <h2>{dictionary.title}</h2>
            <div className='description-text32'>{selectGoods.description}</div>
            <div className='button-container'>
              <button>
                {dictionary.showOther} <span>+</span>
              </button>
            </div>
          </div>
          <div className='characteristics'>
            <h2>{dictionary.characteristics}</h2>
            <ul>
              <li className='select'>
                <p>Об`єм</p>
                <span>5 л</span>
              </li>
              <li>
                <p>Управління</p>
                <span>Електронне</span>
              </li>
              <li className='select'>
                <p>Кількість автоматичних програм приготування</p>
                <span>13</span>
              </li>
              <li>
                <p>Споживана потужність, Вт</p>
                <span>900 Вт</span>
              </li>
            </ul>
            <div className='button-show-other'>
              <button>
                {dictionary.showOther} <span>+</span>
              </button>
            </div>
          </div>
          <div className='reviews'>
            <div className='title'>
              <h2>{dictionary.reviews}</h2>
              <div className='line' />
              <p>Мультиварка Perfezza PMC-013</p>
            </div>
            <div className='button-reviews'>
              <button>
                {dictionary.reviews} ({selectGoods.listGoods.length})
              </button>
            </div>
            <AddReview dictionary={dictionary} />
            <div className='list-imgs-buys'>
              <p>
                {dictionary.photoBuys}{' '}
                <span>{selectGoods.reviews.countImgs}</span>
              </p>
              <div className='list-imgs'>
                <AddReviews />
                <ListImgReviewsBuys
                  listReviews={selectGoods.reviews.listReviews}
                />
              </div>
            </div>
            <div className='rating-review'>
              <div className='average-rating'>
                <div className='avarge'>
                  <p>{selectGoods.reviews.avarge}</p>
                  <span>
                    ({selectGoods.reviews.countReviews}){' '}
                    {dictionary.manyreviews}
                  </span>
                </div>
                <ClientRating
                  name='half-rating-read'
                  defaultValue={selectGoods.reviews.avarge}
                  precision={0.1}
                  isReadOnly={false}
                  size={27}
                />
              </div>
              <div className='list-rating'>
                {[5, 4, 3, 2, 1].map(x => (
                  <div key={x} className='count-rating five'>
                    <MyClientRating value={x} />
                    <div className='rating-interest'>
                      <div
                        style={{
                          width:
                            (selectGoods.reviews[`count${x}`] /
                              selectGoods.reviews.countReviews) *
                              100 +
                            '%'
                        }}
                        className='interest-select'
                      />
                      <div
                        style={{
                          width:
                            100 -
                            (selectGoods.reviews[`count${x}`] /
                              selectGoods.reviews.countReviews) *
                              100 +
                            '%'
                        }}
                        className='interest-no-select'
                      />
                    </div>
                    <p>{selectGoods.reviews[`count${x}`]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='list-star-and-star'>
              <div className='list-star'>
                {[5, 4, 3, 2, 1].map(x => (
                  <div key={x} className='sort-in-star'>
                    <MyClientRating value={1} />
                    <p>{x}</p>
                  </div>
                ))}
              </div>
              <div className='sort'>
                <select>
                  <option>{dictionary.forDate}</option>
                </select>
                <div className='button-svg'>
                  <SelectSortSVG />
                </div>
              </div>
            </div>
            <div className='review'>
              <Review review={selectGoods.reviews.listReviews[0]} />
            </div>

            <div className='button-all-reviews'>
              Дивитися усі відгуки до товару <ArrowRightSVG />
            </div>
          </div>
          <div className='video'>
            <h2>Відео</h2>
            <div className='video-container'>
              <iframe
                width='100%'
                src='https://www.youtube.com/embed/BJpKbFGoLCI'
                title='YouTube video player'
                frameBorder='0'
                style={{
                  borderRadius: '15px',
                  width: '100%',
                  aspectRatio: 1.777777777777
                }}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <CardSelectGoods
          selectVolume={selectVolume}
          dictionary={dictionary}
          selectGoods={selectGoods}
        />
      </div>
      <h2 className='title-see-more'>Ви переглядали</h2>
      <ListGoodsLeft lang={'ua'} dictionary={{ reviews: 'Отзывы' }} type='' />
    </div>
  )
}

export default AboutGoods
