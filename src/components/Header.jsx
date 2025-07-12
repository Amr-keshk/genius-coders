import React from 'react'
import logo from '/logo/logo.png'
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

  return (
    <header className={`${isHidden ? "-translate-y-full" : "translate-y-0"} bg-white transition duration-300 fixed w-full header-bottom-line z-20`}>
      <div className='w-full bg-green'>
        <div className='hidden md:flex'>

          <ul className='flex items-center px-4 ml-auto mr-3 bg-orange w-fit leading-none font-thin text-white text-xs'>
            {
              socialLinks.map((link, index) => {
                return (
                  <li key={`${link.href}-${index}`}>
                    <a className={`flex px-4 py-3 hover:bg-green duration-500`} target='_blank' href={link.href} rel='noopener noreferrer'>
                      <i className={link.icon}></i>
                    </a>
                  </li>
                )
              })
            }
          </ul>

          <span className='inline-block px-2 bg-orange mr-[10%]'></span>

        </div>
      </div>
      <div className='flex justify-between items-center max-w-screen-2xl mx-auto py-2 px-12 md:px-24 lg:px-44 text-darkblue'>
        <Link to="/">
          <img className='h-12' src={logo} alt="Logo for Genius Coders Academy" />
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex gap-4 text-base capitalize font-medium'>
            {navLink.map((link, index) => {
              return (
                <li key={`${link.label}-${index}`} className='relative underline-on-hover hover:after:w-full hover:after:left-0'>
                  <NavLink className={({isActive}) => `duration-300 hover:text-orange ${isActive ? "text-green font-bold" : ""} block`} to={link.href}>{link.label}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        <a className={`hidden md:block font-normal text-base px-8 py-3 bg-orange hover:bg-green text-white rounded-full capitalize `} target='_blank' href="https://wa.me/201028815414?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20courses." rel='noopener noreferrer'>join now</a>
        {/* mobile screen menu */}
        <MobileMenu toggleMenu={toggleMenu} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </header>
  )
}

export default Header