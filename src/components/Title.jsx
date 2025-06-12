import React from 'react'
function Title({children, titleIcon}) {
  return (
    <div className='z-0 flex space-x-2'>
      {titleIcon}
      <h2 className={`font-bold text-xl  uppercase text-orange`}>{children}</h2>
    </div>
  )
}

export default Title