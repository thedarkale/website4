import React from 'react'
import WidgetCategory from './WidgetCategory'
import WidgetTag from './WidgetTag'
import WidgetLatestPosts from './WidgetLatestPosts'
import WidgetLinks from './WidgetLinks'
import config from '../../../data/SiteConfig'

const Sidebar = ({ tagList, categoryList, latestPostEdges, links }) => {
  return (
    <aside
      className={`sidebar-container width-full ${
        config.sidebarSticky ? 'height-full' : ''
      }`}
    >
      {categoryList && <WidgetCategory categoryList={categoryList} />}

      {tagList && <WidgetTag tagList={tagList} />}

      {latestPostEdges && (
        <WidgetLatestPosts latestPostEdges={latestPostEdges} />
      )}

      {links && (
        <div className="position-sticky top-zero">
          <WidgetLinks links={links} />
        </div>
      )}
    </aside>
  )
}

export default Sidebar
