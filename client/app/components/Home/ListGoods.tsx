'use client'
import React, { useEffect, useState } from 'react'
import './ListArticle.scss'
import MiniGoods from './MiniGoods'
import DownSVG from '../../assest/Home/Down.svg'
import { Locale } from '@/i18n.config'

type Props = {
  type: string
  dictionary: any
  lang: Locale
}

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

const ListArticle = ({ type, dictionary, lang }: Props) => {
  const [limit, setLimit] = useState(5)
  const [countShow, setCountShow] = useState(1)
  const [listGoods, setListGoods] = useState<any[]>([])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width >= 1400) {
        setLimit(5)
      } else if (width >= 1124) {
        setLimit(4)
      } else if (width >= 800) {
        setLimit(3)
      } else {
        setLimit(2)
      }
    }

    // Виклик функції для встановлення початкового значення
    handleResize()

    // Додаємо обробник події при зміні розміру вікна
    window.addEventListener('resize', handleResize)

    // Очищуємо обробник при відмонтовані компонента
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getListGoods = async () => {
    const res = data.slice(0, limit * 2 * countShow)
    setListGoods(res)
  }

  useEffect(() => {
    getListGoods()
  }, [limit, countShow])

  const addCountShow = () => {
    setCountShow(countShow + 1)
  }

  return (
    <div className={`list-article-container limit-${limit}`}>
      {listGoods.map(x => (
        <MiniGoods lang={lang} dictionary={dictionary} goods={x} key={x.id} />
      ))}
      <div className='button-down'>
        <div onClick={addCountShow} className='downsvg-container'>
          <DownSVG />
        </div>
      </div>
    </div>
  )
}

export default ListArticle
