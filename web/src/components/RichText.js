import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const highlight = props => {
  return (
    <span style={{ backgroundColor: props.mark.color }}>{props.children}</span>
  )
}

const serializers = {
  list: props => {
    const { type } = props
    const bullet = type === 'bullet'
    if (bullet) {
      return <ul>{props.children}</ul>
    }
    return <ol>{props.children}</ol>
  },
  listItem: props => <li>{props.children}</li>,
}

export default ({ content, className }) => {
  return (
    <BlockContent
      className={`richText ${className}`}
      blocks={content}
      renderContainerOnSingleChild={true}
      serializers={serializers}
    />
  )
}
