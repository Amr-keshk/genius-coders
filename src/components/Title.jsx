import React from 'react'
function Title({children, titleIcon, whichSection}) {
  return (
    <div className={`${whichSection == 'testimonials' ? "justify-center" : ""} z-0 flex space-x-2 items-center`}>
      {titleIcon}
      <h2 className={`font-bold text-xl uppercase ${whichSection == 'testimonials' ? "!text-darkblue font-extrabold text-3xl max-sm:text-xs" : whichSection == "courses" ? "text-5xl !text-green" : whichSection == "contact" ? "!text-darkblue !text-4xl !font-bold" : ""} text-orange font-raleway`}>{children}{whichSection == 'choosing' ? <span className='text-orange uppercase'>different</span> : ""}</h2>
      {whichSection == "testimonials" && titleIcon}
    </div>
  )
}

export default Title