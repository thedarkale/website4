import React from 'react'
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareCount,
} from 'react-share'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

const PostShare = ({ postNode, postPath, extraClass = '' }) => {
  const post = postNode.frontmatter
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath)
  const iconSize = 26
  const filter = count => (count > 0 ? count : '')
  const renderShareCount = count => (
    <div className="text-center">{filter(count)}</div>
  )

  return (
    <div className={`flex ${extraClass}`}>
      <WhatsappShareButton
        className="cursor-pointer margin-right-half"
        url={url}
        title={post.title}
      >
        <WhatsappIcon round size={iconSize} />
      </WhatsappShareButton>

      <TwitterShareButton
        className="cursor-pointer margin-right-half"
        url={url}
        title={post.title}
      >
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>

      <FacebookShareButton
        className="cursor-pointer margin-right-half"
        url={url}
        quote={postNode.excerpt}
      >
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {count => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>
    </div>
  )
}

export default PostShare
