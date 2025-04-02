//'use client'
import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { addToLike, removeFromLike } from '@/app/store/reducers/cartReducer'
const maxLength = 300

const characteristics = [
  { name: 'Об`єм', value: '5 л' },
  { name: 'Управління', value: 'Електронне' },
  { name: 'Кількість автоматичних програм приготування', value: '13' },
  { name: 'Споживана потужність, Вт', value: '900 Вт' },
  { name: 'Об`єм', value: '5 л' },
  { name: 'Управління', value: 'Електронне' },
  { name: 'Кількість автоматичних програм приготування', value: '13' },
  { name: 'Споживана потужність, Вт', value: '900 Вт' },
  { name: 'Об`єм', value: '5 л' },
  { name: 'Управління', value: 'Електронне' },
  { name: 'Кількість автоматичних програм приготування', value: '13' },
  { name: 'Споживана потужність, Вт', value: '900 Вт' },
  { name: 'Об`єм', value: '5 л' },
  { name: 'Управління', value: 'Електронне' },
  { name: 'Кількість автоматичних програм приготування', value: '13' },
  { name: 'Споживана потужність, Вт', value: '900 Вт' }
]
type Props = {
  dictionary: any
  selectGoods: any
  selectVolume: number
  sectionName: string
}

const AboutGoods = ({
  dictionary,
  selectGoods,
  selectVolume,
  sectionName
}: Props) => {
  const refDesctription = useRef<HTMLDivElement>(null)
  const refCharactersitics = useRef<HTMLDivElement>(null)
  const refReview = useRef<HTMLDivElement>(null)
  const refVideo = React.createRef<HTMLDivElement>()
  const refSimilar = React.createRef<HTMLDivElement>()

  const scrollToSection = useCallback(
    (sectionName: string) => {
      // Определяем отступ сверху (для учета фиксированных элементов)
      const listTitleContainerHeight =
        document
          .querySelector('.list-title-info-header')
          ?.getBoundingClientRect().height || 60
      const mainHeaderHeight =
        document
          .querySelector('.catalog-search-and-other-container')
          ?.getBoundingClientRect().height || 50
      const headerOffset = listTitleContainerHeight + mainHeaderHeight // Приблизительная высота всех фиксированных элементов
      // Функция для выполнения скролла с учетом отступа
      const scrollWithOffset = (element: HTMLElement | null) => {
        if (!element) return

        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }

      // Выбираем нужный элемент в зависимости от секции
      switch (sectionName) {
        case 'description':
          scrollWithOffset(refDesctription.current)
          break
        case 'characteristics':
          scrollWithOffset(refCharactersitics.current)
          break
        case 'reviews':
          scrollWithOffset(refReview.current)
          break
        case 'video':
          scrollWithOffset(refVideo.current)
          break
        case 'similar':
          scrollWithOffset(refSimilar.current)
          break
        default:
          break
      }
    },
    [refDesctription, refCharactersitics, refReview, refVideo, refSimilar]
  )
  const text =
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro commodi laborum repellat sequi, aliquam perspiciatis, earum nisi deserunt facilis atque quod cumque ut nostrum. Beatae iusto iure optio quibusdam excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vitae architecto similique molestias doloribus. Odit optio provident eaque pariatur quaerat sapiente nostrum, nihil voluptas magni a repudiandae maxime nemo quasi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro commodi laborum repellat sequi, aliquam perspiciatis, earum nisi deserunt facilis atque quod cumque ut nostrum. Beatae iusto iure optio quibusdam excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vitae architecto similique molestias doloribus. Odit optio provident eaque pariatur quaerat sapiente nostrum, nihil voluptas magni a repudiandae maxime nemo quasi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro commodi laborum repellat sequi, aliquam perspiciatis, earum nisi deserunt facilis atque quod cumque ut nostrum. Beatae iusto iure optio quibusdam excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vitae architecto similique molestias doloribus. Odit optio provident eaque pariatur quaerat sapiente nostrum, nihil voluptas magni a repudiandae maxime nemo quasi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro commodi laborum repellat sequi, aliquam perspiciatis, earum nisi deserunt facilis atque quod cumque ut nostrum. Beatae iusto iure optio quibusdam excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vitae architecto similique molestias doloribus. Odit optio provident eaque pariatur quaerat sapiente nostrum, nihil voluptas magni a repudiandae maxime nemo quasi'

  useEffect(() => {
    scrollToSection(sectionName)
  }, [sectionName, scrollToSection])
  const [textExpanded, setTextExpanded] = useState(false)
  const [isCharacteristicsExpanded, setCharacteristicsExpanded] =
    useState(false)
  const [reviewsExpanded, setReviewsExpanded] = useState(false)

  const isLongText = text.length > maxLength
  const displayedText =
    textExpanded || !isLongText ? text : text.slice(0, maxLength) + '...'
  const displayedCharacteristics = isCharacteristicsExpanded
    ? characteristics
    : characteristics.slice(0, 3)

  // Logic for displaying reviews
  const displayedReviews = reviewsExpanded
    ? selectGoods.reviews.listReviews
    : selectGoods.reviews.listReviews.slice(0, 3)

  return (
    <div className='about-goods'>
      <div id='aboutGoodsContainer' className='about-goods-container'>
        <div className='text'>
          <div className='description' ref={refDesctription}>
            <h2>{dictionary.title}</h2>
            {/* <div className='description-text32'>{selectGoods.description}</div> */}
            <div className='description-text32'>{displayedText}</div>
            <div className='button-container'>
              <button onClick={() => setTextExpanded(!textExpanded)}>
                {textExpanded ? 'Скрыть' : 'Показать ещё'}
                {textExpanded ? <span>-</span> : <span>+</span>}
              </button>
            </div>
          </div>
          <div className='characteristics' ref={refCharactersitics}>
            <h2>{dictionary.characteristics}</h2>
            <ul>
              {displayedCharacteristics.map((item, i) => (
                <li className={`${i % 2 ? 'select' : ''}`} key={i}>
                  <p>{item.name}</p>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            <div className='button-show-other'>
              <button
                onClick={() =>
                  setCharacteristicsExpanded(!isCharacteristicsExpanded)
                }
              >
                {isCharacteristicsExpanded ? 'Скрыть' : 'Показать ещё'}
                {isCharacteristicsExpanded ? <span>-</span> : <span>+</span>}
              </button>
            </div>
          </div>
          <div className='reviews' ref={refReview}>
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
            <div className='rating-review' ref={refReview}>
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
              {displayedReviews.map((review: any, index: any) => (
                <Review key={index} review={review} />
              ))}
            </div>

            {selectGoods.reviews.listReviews.length > 3 && (
              <div
                className='button-all-reviews'
                onClick={() => setReviewsExpanded(!reviewsExpanded)}
              >
                {reviewsExpanded ? 'Скрыть' : 'Дивитися усі відгуки до товару'}
                <ArrowRightSVG />
              </div>
            )}
          </div>
          <div className='video' ref={refVideo}>
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
        <div ref={refSimilar}>
          <CardSelectGoods
            selectVolume={selectVolume}
            dictionary={dictionary}
            selectGoods={selectGoods}
          />
        </div>
      </div>
      <h2 className='title-see-more'>Ви переглядали</h2>
      <ListGoodsLeft lang={'ua'} dictionary={{ reviews: 'Отзывы' }} type='' />
    </div>
  )
}

export default AboutGoods
