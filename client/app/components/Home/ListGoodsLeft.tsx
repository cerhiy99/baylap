'use client'
import { Locale } from '@/i18n.config'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MiniGoods from './MiniGoods'
import RightSvg from '../../assest/Home/Right.svg'
import LeftSVG from '../../assest/Home/Left.svg'
import './ListGoodsLeft.scss'

type Props = { lang: Locale; dictionary: any; type: string }

const data = [
  {
    id: 1,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 2,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 3,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 4,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 5,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 6,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 7,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 8,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 9,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ],
    price: 400,
    discount: 10,
    priceWithDiscount: 360
  },
  {
    id: 10,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 11,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 12,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 13,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 14,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 15,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 16,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 17,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 18,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 19,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 20,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 21,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 22,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 23,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 24,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  },
  {
    id: 25,
    isDiscount: false,
    isFreeShipping: true,
    isBestseller: false,
    isNovetly: true,
    name: 'Набор ежедневный для блеска(шампунь+маска+подарок) Envie Daily Shine Kit',
    countStar: 4.4,
    countReview: 4,
    listVolume: [
      {
        id: 1,
        price: 450,
        img: `f95d98237c812084a705f8be0b6c9ba8.png`,
        volume: '100 мл',
        discount: 10,
        priceWithDiscount: 360
      },
      {
        id: 2,
        price: 2000,
        img: `image1.png`,
        volume: '500 мл',
        discount: 5,
        priceWithDiscount: 1900
      },
      {
        id: 3,
        price: 3800,
        img: `image3.png`,
        volume: '1000 мл',
        discount: 10,
        priceWithDiscount: 3420
      }
    ]
  }
]
const ListGoodsLeft = ({ lang, dictionary, type }: Props) => {
  const [limit, setLimit] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  const [listGoods, setListGoods] = useState<any[]>([])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1400) setLimit(5)
      else if (width >= 1124) setLimit(4)
      else if (width >= 800) setLimit(3)
      else setLimit(2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const startIndex = currentPage * limit
    const endIndex = startIndex + limit
    setListGoods(data.slice(startIndex, endIndex))
  }, [limit, currentPage])

  const handleNext = () => {
    if ((currentPage + 1) * limit < data.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className='list-goods-left-container'>
      <div
        className={`scroll-button left ${
          currentPage > 0 ? 'arrow-active' : 'disabled'
        }`}
        onClick={handlePrevious}
      >
        <LeftSVG />
      </div>

      <div className={`list-goods limit-${limit}`}>
        {listGoods.map((item: any, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }} // Початковий стан
            animate={{ opacity: 1, y: 0 }} // Анімація появи
            exit={{ opacity: 0, y: -20 }} // Анімація зникнення
            transition={{
              duration: 0.3,
              delay: index * 0.1 // Затримка для кожного елемента
            }}
          >
            <MiniGoods lang={lang} dictionary={dictionary} goods={item} />
          </motion.div>
        ))}
      </div>

      <div
        className={`scroll-button right ${
          (currentPage + 1) * limit < data.length ? 'arrow-active' : 'disabled'
        }`}
        onClick={handleNext}
      >
        <RightSvg />
      </div>
    </div>
  )
}

export default ListGoodsLeft
