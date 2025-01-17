import React from 'react'
import lineHeart from "/elements/line-heart-green.png"

function Title({children, style, lineStyle}) {
  return (
    <div className='title py-10 relative z-0'>
      <h2 className={`font-semibold text-2xl text-center tracking-widest capitalize text-orange ${style ? style : ""}`}>{children}</h2>
      <img className={`${lineStyle ? lineStyle : ""} absolute top-1/2 left-1/2 -translate-x-1/2`} src={lineHeart} alt="heart with line" />
    </div>
  )
}

export default Title