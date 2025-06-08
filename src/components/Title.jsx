import React from 'react'
function Title({children, iconTitle}) {
  return (
    <div className='pt-10 z-0 flex space-x-2'>
      {iconTitle}
      <h2 className={`font-bold text-2xl  uppercase text-orange`}>{children}</h2>
    </div>
  )
}

export default Title