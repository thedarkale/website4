import React from 'react'
import { useState } from 'react'
import AutoLink from '../AutoLink/AutoLink'
import WidgetContainer from './WidgetContainer'
import WidgetTitle from './WidgetTitle'
import { getCategoryPath } from '../../utils/helpers'
import config from '../../../data/SiteConfig'

const WidgetCategory = ({ categoryList }) => {
  const [categoryCount, setCategoryCount] = useState(5)
  const [isShowMore, setIsShowMore] = useState(true)
  const [buttonText, setButtonText] = useState('show more')

  const toggleState = () => {
    setIsShowMore(!isShowMore)

    isShowMore
      ? (setCategoryCount(categoryCount + categoryList.length),
        setButtonText('show less'))
      : (setCategoryCount(5), setButtonText('show more'))
  }

  return (
    <WidgetContainer extraClass="categories-container">
      <WidgetTitle title={config.categoryWidgetTitle} />
      <div>
        {categoryList.slice(0, categoryCount).map(category => {
          return (
            <AutoLink
              key={category}
              to={getCategoryPath(category)}
              className="block border-bottom border-color-light-grey padding-top-half padding-bottom-half"
            >
              <span>{category}</span>
            </AutoLink>
          )
        })}
        <button
          className="mt-4"
          onClick={() => {
            toggleState()
          }}
        >
          {buttonText}
        </button>
      </div>
    </WidgetContainer>
  )
}

export default WidgetCategory
