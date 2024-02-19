import React from 'react'

type Props = {
  src: string
}

export default function Video({ src }: Props) {
  return (
    <iframe
      src={src}
      frameBorder="0"
      className="aspect-video w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}
