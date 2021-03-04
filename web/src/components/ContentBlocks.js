import React from 'react'

import SectionTitle from './SectionTitle'
import ImageGrid from './ImageGrid'
import TextColumns from './TextColumns'
import Blockquote from './Blockquote'
import Cta from './Cta'
import Figure from './Figure'
import { LinkFull } from './Link'
import RichText from './RichText'
import DynamicBlock from './DynamicBlock'
import Feature2ColumnText from './Feature2ColumnText'
import List from './List'

export default function ContentBlocks({ blocks }) {
  return blocks
    ? blocks.map((block, i) => {
        switch (block._type) {
          case 'sectionTitle':
            return <SectionTitle key={`block-${i}`} {...block} className="" />
          case 'imageGrid':
            return <ImageGrid key={`block-${i}`} {...block} className="" />
          case 'blockquote':
            return <Blockquote key={`block-${i}`} {...block} />
          case 'textColumns':
            return (
              <TextColumns key={`block-${i}`} {...block} className="mb-f" />
            )
          case 'cta':
            return <Cta key={`block-${i}`} {...block} />
          case 'feature2ColumnText':
            return (
              <Feature2ColumnText
                key={`block-${i}`}
                {...block}
                className="my-g"
              />
            )
          case 'dynamicBlock':
            return DynamicBlock[block.name]()
          case 'figure':
            return (
              <Figure
                key={`block-${i}`}
                src={block.src}
                alt={block.alt}
                options={block.options}
                className="my-f"
              />
            )
          case 'list':
            return (
              <List key={`block-${i}`} items={block._rawItems} classname="" />
            )
          case 'richTextObj':
            return (
              <RichText
                key={`block-${i}`}
                content={block._rawRichText}
                className="f-b1"
              />
            )
          case 'link':
            return (
              <LinkFull
                key={`block-${i}`}
                to={block.path}
                className="linkFull f-h3 font-bold block"
              >
                {block.label}
              </LinkFull>
            )
          default:
            return <p>{block._type}: not yet created</p>
        }
      })
    : null
}
