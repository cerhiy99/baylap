import React from 'react'
import './Review.scss'
import ClientRating from '../Reviews/ClientRating'
import BasketTrue from '../../assest/Goods/BasketTrue.svg'
import ReactionSVG from '../../assest/Goods/Reaction.svg'
import ThumbsUpSVG from '../../assest/Goods/ThumbsUp.svg'
import ThumbsDownSVG from '../../assest/Goods/ThumbsDown.svg'
import Image from 'next/image'

type Props = {
  review: {
    id: number
    name: string
    description: string
    countStar: number
    img: string
    disadvantages: string
    date: string
  }
}

const Review = ({ review }: Props) => {
  return (
    <div className='review-container'>
      <div className='rating-and-additional-info'>
        <ClientRating
          name='half-rating-read'
          defaultValue={review.countStar}
          precision={1}
          isReadOnly={true}
          size={16}
        />
        <div className='date'>{review.date}</div>
        <div className='basket-true'>
          <BasketTrue /> Куплено в BAYLAP
        </div>
      </div>
      <div className='review'>
        <h4>{review.name}</h4>
        <p>{review.description}</p>
        <div className='review-img'>
          <Image
            src={process.env.NEXT_PUBLIC_SERVER + review.img}
            alt=''
            width={57}
            height={57}
          />
        </div>
        <div className='disadvantages'>
          Недоліки: <span>{review.disadvantages}</span>
        </div>
        <div className='reaction'>
          <p>
            <ReactionSVG /> Відповісти
          </p>
          <div className='reaction-thumbs'>
            <ThumbsUpSVG />
            <div className='line' />
            <ThumbsDownSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
