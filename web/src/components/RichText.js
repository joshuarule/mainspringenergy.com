import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const highlight = props => {
  return (
    <span style={{ backgroundColor: props.mark.color }}>{props.children}</span>
  )
}

export default ({ content, className }) => {
  return (
    <BlockContent
      className={className}
      blocks={content}
      renderContainerOnSingleChild={true}
      serializers={{
        marks: { highlight },
      }}
    />
  )
}
