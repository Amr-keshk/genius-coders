import React from 'react'
import CloseBtn from './CloseBtn'
import { NavLink, Link } from 'react-router-dom'
import { navLink, socialLinks } from '../data/data'
import PropTypes from "prop-types"
import logo1 from '/logo/mobile_logo1.png'
function MobileMenu({openMenu, toggleMenu, setOpenMenu, iconBaseStyle}) {
  return (
    <>
      <div className='md:hidden '>
        <CloseBtn setOpenMenu={setOpenMenu} openMenu={openMenu} />
      </div>
      <div className={`${openMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} md:hidden w-full h-screen ease-out duration-1000 fixed top-0 left-0 overflow-y-auto z-10`}>
        <div onClick={toggleMenu} className='layer bg-green fixed -z-10 top-0 right-0 w-full h-full  bg-opacity-10'></div>
        <div className='flex flex-col gap-12 bg-green min-h-full w-full sm:w-1/2 p-8 '>
          <Link className='flex justify-evenly items-center' onClick={toggleMenu} to="/">
            <img className='w-1/2' src={logo1} alt="logo for genius coders" />
            <CloseBtn setOpenMenu={setOpenMenu} openMenu={openMenu} />
          </Link>
          <nav>
            <ul className='flex flex-col gap-4 text-white font-light text-xl pr-16'>
              {
                navLink.map((link, index) => {
                  return (
                    <li key={`${link.label}-${index}`} onClick={toggleMenu}>
                      <NavLink className={({isActive}) => `flex gap-4 duration-500 hover:text-orange hover:pl-4 border-b-[1px] border-darkblue pb-3 capitalize ${isActive ? 'text-orange font-bold' : ''}`} to={link.href}>
                        <span>{link.label}</span><i className={link.icon}></i>
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          <div>
            <p className='font-medium tracking-wider'>Our mission is to inspire and empower a new generation to stay ahead in the tech-driven world by mastering the art of PROGRAMMING 💻👩🏼‍💻🤖🚀. Join us on this exciting journey of innovation and learning!</p>
            <ul className='flex items-center gap-4 leading-none mt-8 font-thin text-white text-xs'>
              {socialLinks.map((link, index) => {
                return (
                  <li key={`${link.href}-${index}`}>
                    <a className={`${iconBaseStyle} w-10 h-10 bg-darkblue hover:bg-orange`} target='_blank' href={link.href} rel='noopener noreferrer'>
                      <i className={link.icon}></i>
                    </a>
                  </li>
                )
              })}
              <a className={`font-normal text-base px-4 py-3 bg-darkblue hover:bg-orange text-white rounded-full capitalize `} target='_blank' href="#" rel='noopener noreferrer'>join now</a>
            </ul>


          </div>
        </div>

      </div>
    </>
  )
}
MobileMenu.propTypes = {
  setOpenMenu: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.bool.isRequired,
  iconBaseStyle: PropTypes.string.isRequired
}


export default MobileMenu