import React from "react"
import PropTypes from "prop-types"
function CloseBtn({setOpenMenu, openMenu}) {
  return (
    <button  className='flex flex-col w-9 gap-1 p-2 bg-orange' onClick={() => setOpenMenu(!openMenu)} aria-label="Toggle navigation menu">
      <span className={`h-[2px] w-full bg-darkblue rounded-full transition-all  duration-1000 ${openMenu ? "rotate-[225deg] translate-y-[6px]" : ""}`}></span>
      <span className={`h-[2px] w-full bg-darkblue rounded-full transition-all  duration-1000 ${openMenu ? "w-0 opacity-0" : "opacity-100"}`}></span>
      <span className={`h-[2px] w-full bg-darkblue rounded-full transition-all  duration-1000 ${openMenu ? "-rotate-[225deg] -translate-y-[6px]" : ""}`}></span>
    </button>
  )
}

CloseBtn.propTypes = {
  setOpenMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.bool.isRequired
}
export default CloseBtn