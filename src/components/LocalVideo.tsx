import React from 'react'

type Props = {
  src: string
}

export default function LocalVideo({ src }: Props) {
  return <video src={src} controls className="w-full" />
}
