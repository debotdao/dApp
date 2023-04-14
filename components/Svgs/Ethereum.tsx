import React from 'react'

const Ethereum = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none'>
      <path
        fill='#25292E'
        fill-rule='evenodd'
        d='M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z'
        clip-rule='evenodd'
      />
      <path
        fill='url(#a)'
        fill-opacity='.3'
        fill-rule='evenodd'
        d='M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z'
        clip-rule='evenodd'
      />
      <path
        fill='url(#b)'
        d='M8.19 14.77 14 18.21l5.8-3.44-5.8 8.19-5.81-8.19Z'
      />
      <path fill='#fff' d='m14 16.93-5.81-3.44L14 4.34l5.81 9.15L14 16.93Z' />
      <defs>
        <linearGradient
          id='a'
          x1='0'
          x2='14'
          y1='0'
          y2='28'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#fff' />
          <stop offset='1' stop-color='#fff' stop-opacity='0' />
        </linearGradient>
        <linearGradient
          id='b'
          x1='14'
          x2='14'
          y1='14.77'
          y2='22.96'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#fff' />
          <stop offset='1' stop-color='#fff' stop-opacity='.9' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Ethereum
