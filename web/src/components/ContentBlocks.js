import React from 'react'

import SectionTitle from './SectionTitle'
import ImageGrid from './ImageGrid'
import Blockquote from './Blockquote'
import Cta from './Cta'
import Figure from './Figure'
import { LinkFull } from './Link'

export default function ContentBlocks({ blocks }) {
  return blocks
    ? blocks.map(block => {
        switch (block._type) {
          case 'sectionTitle':
            return <SectionTitle {...block} />
          case 'imageGrid':
            return <ImageGrid {...block} />
          case 'blockquote':
            return <Blockquote {...block} />
          case 'cta':
            return <Cta {...block} />
          case 'figure':
            return <Figure src={block.src} alt={block.alt} className="mb-e" />
          case 'link':
            return (
              <LinkFull to={block.path} className="f-h3 mb-e block">
                {block.label}
              </LinkFull>
            )
          default:
            return <p>{block._type}: not yet created</p>
        }
      })
    : null
}
