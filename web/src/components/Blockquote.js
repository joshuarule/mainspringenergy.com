import React from 'react'

export default function Blockquote({ cite, text, author, options }) {
  if (!text) return null
  return options && options.offset ? (
    <div className="blockquote blockquote--offset lg:w-edge lg:h-0">
      <div className="lg:container lg:grid lg:grid-cols-12">
        <figure className="lg:col-span-3 border-t-6 border-smoke text-seaGreen pt-c mb-g">
          <div className="w-full">
            <blockquote className="mb-e" cite={cite}>
              <p className="f-h3">{text}</p>
            </blockquote>
            <figcaption className="f-b1">{author}</figcaption>
          </div>
        </figure>
      </div>
    </div>
  ) : (
    <figure className="blockquote border-t-6 border-smoke text-seaGreen pt-c lg:grid lg:grid-cols-3 my-f">
      <div className="col-span-2">
        <blockquote className="mb-e" cite={cite}>
          <p className="f-h3">{text}</p>
        </blockquote>
        <figcaption className="f-b1">{author}</figcaption>
      </div>
    </figure>
  )
}
