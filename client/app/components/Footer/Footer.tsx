import React from 'react'
import './Footer.scss'
import { Locale } from '@/i18n.config'
import LogoSVG from '../../assest/Footer/Logo.svg'
import LogoMobileSVG from '../../assest/Footer/LogoMobile.svg'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import { messengers, socialNetwork } from './listSocialNetwork'

const Footer = async ({ lang }: { lang: Locale }) => {
  const { footer } = await getDictionary(lang)
  return (
    <div className='footer-container'>
      <div className='footer-main'>
        <div className='first'>
          <div className='logo-and-graph'>
            <Link href={`/${lang}`}>
              <div className='logo'>
                <LogoSVG />
              </div>
              <div className='logo-mobile'>
                <LogoMobileSVG />
              </div>
            </Link>
            <div className='graph'>
              <p>{footer.graphTitle}</p>
              <span>{footer.graphDescription1}</span>
              <span>{footer.graphDescription2}</span>
            </div>
          </div>
          <div className='second-info'>
            <p>{footer.listInfoTitle}</p>
            {Object.entries(footer.listInfo).map(([key, value]) => (
              <Link key={key} href={`/${lang}/${key}`}>
                {value}
              </Link>
            ))}
          </div>
          <div className='contacts'>
            <p>{footer.contacts.title}</p>
            <div className='phones-and-address'>
              <div className='phones'>
                <span>{footer.contacts.tel}</span>
                <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_URL_1}`}>
                  {process.env.NEXT_PUBLIC_PHONE_1};
                </Link>
                <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_URL_2}`}>
                  {process.env.NEXT_PUBLIC_PHONE_2};
                </Link>
              </div>
              <div className='address-container'>
                <span>{footer.contacts.addressTitle}</span>
                <div
                  className='address'
                  dangerouslySetInnerHTML={{ __html: footer.contacts.address }}
                />
              </div>
            </div>
            <div className='email'>
              <span>E-mail:</span>
              <Link href={`${process.env.NEXT_PUBLIC_EMAIL_URL}`}>
                {process.env.NEXT_PUBLIC_EMAIL}
              </Link>
            </div>
          </div>
          <div className='social-networks'>
            <div className='social'>
              <p>{footer.socialNetwork.title1}</p>
              <div className='list-social-network'>
                {socialNetwork.map((x, idx) => (
                  <Link href={x.url} key={idx}>
                    {x.SVG}
                  </Link>
                ))}
              </div>
            </div>
            <div className='masangers'>
              <p>{footer.socialNetwork.title2}</p>
              <div className='list-social-network'>
                {messengers.map((x, idx) => (
                  <Link href={x.url} key={idx}>
                    {x.SVG}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='second'>
          <div className='info'>{footer.info}</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
