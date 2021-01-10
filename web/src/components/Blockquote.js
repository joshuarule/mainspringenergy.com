import React from 'react'

export default function Blockquote({ cite, text, author }) {
  if (!text) return null
  return (
    <figure className="border-t-6 border-smoke text-seaGreen pt-c lg:grid lg:grid-cols-2 mb-g">
      <div>
        <blockquote className="mb-e" cite={cite}>
          <p className="f-h3">{text}</p>
        </blockquote>
        <figcaption className="f-b1">{author}</figcaption>
      </div>
    </figure>
  )
}
