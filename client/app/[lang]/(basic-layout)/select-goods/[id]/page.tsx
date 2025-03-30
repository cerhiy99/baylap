import { Locale } from '@/i18n.config'
import React from 'react'
import './SelectGoods.scss'
import GoodsBreadCumbs from '@/app/components/SelectGoods/GoodsBreadCumbs'
import { getDictionary } from '@/lib/dictionary'
import CardWithImg from '@/app/components/SelectGoods/CardWithImg'

type Props = {
  params: { lang: Locale }
}

const selectGoods = {
  name: 'Шампунь жіночий DALAS Aloe vera з гіалуроновою кислотою та натур.соком алое 1000 г',
  sum: '21.000',
  rating: 4.4,
  listReviews: [43, 43, 656],
  art: 'Арт: 2708622',
  countryMade: 'Україна',
  producer: { id: 1, name: 'Narokallan' },
  listVolume: [
    {
      id: 1,
      price: 450,
      listImg: ['image1.png', 'image2.png', 'image3.png'],
      volume: '100 мл',
      discount: 10,
      priceWithDiscount: 360,
      isHit: true,
      isFreeDelivery: false
    },
    {
      id: 2,
      price: 2000,
      listImg: ['image4.png', 'image5.png', 'image6.png', 'image7.png'],
      volume: '500 мл',
      discount: 5,
      priceWithDiscount: 1900,
      isHit: true,
      isFreeDelivery: true
    },
    {
      id: 3,
      price: 3800,
      listImg: ['image8.png', 'image9.png', 'image10.png'],
      volume: '1000 мл',
      discount: 10,
      priceWithDiscount: 3420,
      isHit: false,
      isFreeDelivery: true
    }
  ],
  description:
    'Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.Оплата за товар проводиться на рахунок ФОП по реквізитам.',
  listGoods: [
    {
      id: 1,
      img: 'image.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 2,
      img: 'image1.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 3,
      img: 'image2.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 4,
      img: 'image3.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 5,
      img: 'image4.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 6,
      img: 'image5.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 7,
      img: 'image.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 8,
      img: 'image1.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 9,
      img: 'image2.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 10,
      img: 'image3.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 11,
      img: 'image4.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    },
    {
      id: 12,
      img: 'image5.png',
      name: 'Шампунь жіночий DALAS Pomegranate з олією гранатових кісточок та…',
      priceNoDiscount: 139,
      discount: 25,
      priceWithDiscount: 104
    }
  ],
  characteristics: '',
  reviews: {
    countImgs: 8,
    avarge: 4.1,
    countReviews: 51,
    count5: 32,
    count4: 7,
    count3: 2,
    count2: 1,
    count1: 7,
    listReviews: [
      {
        id: 1,
        name: 'Ольга Михайловская',
        description:
          '3.08.24 придбала в магазині Comfi мультиварку Perfezza PMC-013. При першому використанні мультиварка перестала працювати. Її відправляють на ремонт на срок до місяця. Гроші заплатила, мультиварки немає. Шкода, що продають в Comfi настільки не якісний товар.',
        countStar: 4,
        img: 'image5.png',
        disadvantages: '15 хвилин роботи і зламалася.',
        date: '24 серпня 2024'
      },
      {
        id: 2,
        name: 'fdf',
        description: 'fdfgf',
        countStar: 3,
        img: 'image1.png'
      },
      {
        id: 3,
        name: 'fdf',
        description: 'fdfgf',
        countStar: 5,
        img: 'image2.png'
      },
      {
        id: 4,
        name: 'fdf',
        description: 'fdfgf',
        countStar: 4,
        img: 'image3.png'
      },
      {
        id: 5,
        name: 'fdf',
        description: 'fdfgf',
        countStar: 5,
        img: 'image4.png'
      }
    ]
  }
}

const page = async ({ params: { lang } }: Props) => {
  const { SelectGoods } = await getDictionary(lang)
  return (
    <div className='select-goods-container'>
      <GoodsBreadCumbs
        listUrl={[
          { url: `/${lang}/goods/fdf`, name: SelectGoods.url2 },
          { url: `/${lang}/goods/fdf`, name: SelectGoods.url3 },
          { url: `/${lang}/goods/fdf`, name: SelectGoods.url4 },
          { url: `/${lang}/goods/fdf`, name: SelectGoods.url5 },
          { url: `/${lang}/goods/fdf`, name: SelectGoods.url6 }
        ]}
        lang={lang}
      />
      <h1>{selectGoods.name}</h1>
      <CardWithImg
        lang={lang}
        selectGoods={selectGoods}
        dictionary={SelectGoods}
      />
    </div>
  )
}

export default page
