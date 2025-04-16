'use client'

import { Locale } from '@/i18n.config'
import './discountComponent.scss'
import DiamondLevel from '@/public/svgs/userNavigation/diamond.svg'

interface DiscountLevelProps {
  currentAmount: number
  lang: Locale
  //   levels: {
  //     amount: number
  //     discount: number
  //   }[]
}

const levels = [
  { amount: 3000, discount: 3 },
  { amount: 5000, discount: 5 },
  { amount: 10000, discount: 10 }
]

export default function DiscountLevel({ currentAmount }: DiscountLevelProps) {
  // Sort levels by amount to ensure proper display
  const sortedLevels = [...levels].sort((a, b) => a.amount - b.amount)

  // Find the current level and next level
  const currentLevelIndex = sortedLevels.findIndex(
    level => currentAmount >= level.amount
  )
  const currentLevel =
    currentLevelIndex >= 0 ? sortedLevels[currentLevelIndex] : null
  const nextLevel =
    currentLevelIndex < sortedLevels.length - 1
      ? sortedLevels[currentLevelIndex + 1]
      : null

  // Calculate progress percentage for the progress bar
  const calculateProgress = () => {
    if (!currentLevel && sortedLevels.length > 0) {
      // Not reached first level yet
      return (currentAmount / sortedLevels[0].amount) * 100
    } else if (!nextLevel) {
      // Already at max level
      return 100
    } else {
      // Between levels
      const prevAmount = currentLevel ? currentLevel.amount : 0
      const progress =
        ((currentAmount - prevAmount) / (nextLevel.amount - prevAmount)) * 100
      return (
        currentLevelIndex * (100 / (sortedLevels.length - 1)) +
        progress / sortedLevels.length
      )
    }
  }

  // Calculate remaining amount to next level
  const remainingToNextLevel = nextLevel ? nextLevel.amount - currentAmount : 0

  return (
    <div className='discount-level'>
      {nextLevel ? (
        <p className='discount-level__subtitle'>
          До отримання знижки
          <span className='highlight'> {nextLevel.discount}%</span> Вам
          залишилось:{' '}
          <span className='highlight'>
            {remainingToNextLevel.toLocaleString('uk-UA', {
              useGrouping: false,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}{' '}
            ₴
          </span>
          {/* {remainingToNextLevel.toLocaleString()} ₴ */}
        </p>
      ) : (
        <p className='discount-level__subtitle'>
          Ви досягли максимального рівня знижки{' '}
          {sortedLevels[sortedLevels.length - 1].discount}%
        </p>
      )}

      <div className='discount-level__progress-container'>
        <div className={'discount-level__marker'} style={{ left: `20%` }}>
          <DiamondLevel />
          <div className='discount-level__percent'>{3}%</div>
          <div className='discount-level__dot'></div>
          <div className='discount-level__amount'>3000,00 ₴</div>
        </div>
        <div className={'discount-level__marker'} style={{ left: `50%` }}>
          <DiamondLevel />
          <div className='discount-level__percent'>{5}%</div>
          <div className='discount-level__dot'></div>
          <div className='discount-level__amount'>5000,00 ₴</div>
        </div>{' '}
        <div className={'discount-level__marker'} style={{ left: `80%` }}>
          <DiamondLevel />
          <div className='discount-level__percent'>{10}%</div>
          <div className='discount-level__dot'></div>
          <div className='discount-level__amount'>10000,00 ₴</div>
        </div>
        {/* {sortedLevels.map((level, index) => (
          <div
            key={index}
            className={`discount-level__marker ${currentAmount >= level.amount ? 'discount-level__marker--active' : ''}`}
            style={{ left: `${(index + 1) * 25}%` }}
          >
            <DiamondLevel />
            <div className='discount-level__percent'>{level.discount}%</div>
            <div className='discount-level__dot'></div>
            <div className='discount-level__amount'>
              {level.amount.toLocaleString('en-US')} ₴
            </div>
          </div>
        ))} */}
        <div className='discount-level__progress-bar'>
          <div
            className='discount-level__progress'
            style={{ width: `100%` }}
            // style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
      <div className='discount-level__text'>
        Продовжуйте здійснювати покупки в нашому магазині BAYLAP, щоб
        наблизитися до більшої персональної знижки! Що більше Ви купуєте — тим
        вигідніше стає шопінг. Залишайтеся з нами, накопичуйте суму замовлень і
        відкривайте ще більше приємних бонусів та ексклюзивних пропозицій!
      </div>
    </div>
  )
}
