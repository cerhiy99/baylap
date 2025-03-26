import { Locale } from '@/i18n.config'
import '../delivery/Delivery.scss'
import { getDictionary } from '@/lib/dictionary'
import BreadCrumbs from '@/app/components/utils/BreadCrumbs'
import OfferAgreementSVG from '../../assest/DeliveryCookiesAndOther/offerAgreement.svg'

type Props = {
  params: { lang: Locale }
}

const Page = async ({ params: { lang } }: Props) => {
  const { offerAgreement } = await getDictionary(lang)
  return (
    <div className='delivery-container'>
      <BreadCrumbs
        lang={lang}
        listUrles={[{ name: offerAgreement.title, url: 'offer-agreement' }]}
      />
      <div className='delivery-main'>
        <div className='main-title'>
          <OfferAgreementSVG />
          <h1>{offerAgreement.title}</h1>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle1}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: offerAgreement.description1 }}
          />
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle2}</h3>
          <ul>
            {offerAgreement.ul.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle3}</h3>
          <ul>
            {offerAgreement.ul2.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle4}</h3>
          <ul>
            {offerAgreement.ul3.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle5}</h3>
          <ul>
            {offerAgreement.ul4.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          {' '}
          <h3>{offerAgreement.miniTitle6}</h3>
          <ul>
            {offerAgreement.ul5.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle7}</h3>
          <ul>
            {offerAgreement.ul6.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle8}</h3>
          <p dangerouslySetInnerHTML={{ __html: offerAgreement.nanoTitle1 }} />
          <p
            dangerouslySetInnerHTML={{ __html: offerAgreement.description8 }}
          />
        </div>
        <div className='block'>
          <h3>{offerAgreement.nanoTitle2}</h3>
          <ul>
            {offerAgreement.ul7.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.nanoTitle3}</h3>
          <ul>
            {offerAgreement.ul8.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle9}</h3>
          <p>{offerAgreement.description9}</p>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle10}</h3>
          <ul>
            {offerAgreement.ul9.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle11}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: offerAgreement.description11 }}
          />
        </div>
        <div className='block'>
          <h3>{offerAgreement.miniTitle12}</h3>
          <ul>
            {offerAgreement.ul10.map((x, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page
