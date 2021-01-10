import React from 'react'

import SectionTitle from './SectionTitle'
import ImageGrid from './ImageGrid'
import Blockquote from './Blockquote'
import Cta from './Cta'

export default function ContentBlocks({ blocks }) {
  return blocks
    ? blocks.map(block => {
        console.log(block)
        switch (block._type) {
          case 'sectionTitle':
            return <SectionTitle {...block} />
          case 'imageGrid':
            return <ImageGrid {...block} />
          case 'blockquote':
            return <Blockquote {...block} />
          case 'cta':
            return <Cta {...block} />
          default:
            return <p>{block._type}: not yet created</p>
        }
      })
    : null
}
