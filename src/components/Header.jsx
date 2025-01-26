import React from 'react'
import logo from '/logo/desktop_logo11.png'
import { Link, NavLink } from 'react-router-dom'
import {socialLinks, navLink} from "../data/data.js"
import {throttle} from "lodash"
import MobileMenu from './MobileMenu.jsx'

function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const [lastPosition, setLastPosition] = React.useState(0);
  const toggleMenu = () => setOpenMenu(!openMenu);
  React.useEffect(() => {
    const handleScroll = throttle (() => {
      const currentPosition = window.pageYOffset;
      if(currentPosition === 0) {
        setIsHidden(() => false);
      }else if(currentPosition < lastPosition) {
        setIsHidden(() => true);
      }else {
        setIsHidden(() => false)
      }
      setLastPosition(() => currentPosition)
    }, 200)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastPosition]);

  const iconBaseStyle = "flex justify-center items-center rounded-full duration-500";
  return (
    <div className={`${isHidden ? "-translate-y-full" : "translate-y-0"} transition duration-300 fixed w-full header-bottom-line z-20`}>
      <div className='flex justify-between items-center max-w-screen-2xl mx-auto py-2 px-12 md:px-24 lg:px-44 text-darkblue'>
        
        <Link to="/">
          <img className='w-24' src={logo} alt="Logo for Genius Coders Academy" />
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex gap-4 text-xl capitalize font-medium'>
            {navLink.map((link, index) => {
              return (
                <li key={`${link.label}-${index}`} className='relative underline-on-hover hover:after:w-full hover:after:left-0'>
                  <NavLink className={({isActive}) => `duration-300 hover:text-orange ${isActive ? "text-green font-bold" : ""} block`} to={link.href}>{link.label}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='hidden md:block'>
          <ul className='flex items-center gap-4 leading-none font-thin text-white text-xs'>
            {
              socialLinks.map((link, index) => {
                return (
                  <li key={`${link.href}-${index}`}>
                    <a className={`${iconBaseStyle} w-12 h-12 bg-orange hover:bg-green`} target='_blank' href={link.href} rel='noopener noreferrer'>
                      <i className={link.icon}></i>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* mobile screen menu */}

        <MobileMenu toggleMenu={toggleMenu} openMenu={openMenu} setOpenMenu={setOpenMenu} iconBaseStyle={iconBaseStyle} />
      </div>
    </div>
  )
}

export default Header