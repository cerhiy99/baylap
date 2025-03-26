'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './MySlider.scss'

import { Pagination, Autoplay } from 'swiper/modules'

const MySlider = ({ images }: { images: string[] }) => {
  return (
    <div className='my-swiper-container'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000, // Автоматичне перемикання кожні 10 секунд
          disableOnInteraction: false // Слайдер продовжує автоплей після взаємодії
        }}
      >
        {images.map((x, idx) => (
          <SwiperSlide key={idx}>
            <img src={x} alt={`Slide ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MySlider
