'use client'
import React, { useEffect, useState } from 'react'
import './SearchNewPost.scss'
import ListNewPost from './ListNewPost'

type Props = {
  selectFinishDelivery: any
  infoDelivery: any
}

const SearchNewPost = ({ selectFinishDelivery, infoDelivery }: Props) => {
  const [typeDelivery, setTypeDelivery] = useState<
    'department' | 'post' | 'curier'
  >('department')
  useEffect(() => {
    if (!infoDelivery.typeDelivery) {
      setTypeDelivery('post')
      setTimeout(() => setTypeDelivery('department'), 500)
    }
  }, [infoDelivery])
  return (
    <div className='search-new-post-container'>
      <fieldset>
        <div
          onClick={() => setTypeDelivery('department')}
          className='select-input'
        >
          <input
            checked={typeDelivery == 'department'}
            style={{ padding: 0, width: 'unset' }}
            type='radio'
          />
          <p>У відділення</p>
        </div>
        <div className='select-input' onClick={() => setTypeDelivery('post')}>
          <input
            checked={typeDelivery == 'post'}
            style={{ padding: 0, width: 'unset' }}
            type='radio'
          />
          <p>У поштомат</p>
        </div>
        <div className='select-input' onClick={() => setTypeDelivery('curier')}>
          <input
            checked={typeDelivery == 'curier'}
            style={{ padding: 0, width: 'unset' }}
            type='radio'
          />
          <p>Кур&apos;єром</p>
        </div>
      </fieldset>
      <ListNewPost
        selectFinishDelivery={selectFinishDelivery}
        typeDelivery={typeDelivery}
        infoDelivery={infoDelivery}
      />
    </div>
  )
}

export default SearchNewPost
