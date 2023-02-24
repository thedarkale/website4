import React, { useState, useEffect } from 'react'
import AutoLink from '../AutoLink/AutoLink'
import WidgetContainer from './WidgetContainer'
import WidgetTitle from './WidgetTitle'
import { getCategoryPath } from '../../utils/helpers'
import config from '../../../data/SiteConfig'

const WidgetCategory = ({ categoryList }) => {
  const [isShowFullList, isSetShowFullList] = useState(false)
  const [categories, setCategories] = useState(categoryList)
  const [showMoreButtonText, setShowMoreButtonText] = useState('Show More')

  useEffect(() => {
    if (isShowFullList) {
      setCategories(categoryList)
      setShowMoreButtonText('Show Less')
      return
    }

    setCategories(categoryList.slice(0, 5))
    setShowMoreButtonText('Show More')
  }, [isShowFullList])

  return (
    <WidgetContainer extraClass="categories-container">
      <WidgetTitle title={config.categoryWidgetTitle} />
      <div>
        {categories.map(category => (
          <AutoLink
            key={category}
            to={getCategoryPath(category)}
            className="block border-bottom border-color-light-grey padding-top-half padding-bottom-half"
          >
            <span>{category}</span>
          </AutoLink>
        ))}
        <button
          className="mt-4"
          onClick={() => isSetShowFullList(!isShowFullList)}
        >
          {showMoreButtonText}
        </button>
      </div>
    </WidgetContainer>
  )
}

export default WidgetCategory
