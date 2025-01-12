import React from 'react'
import logo from '/logo/main_logo1.png'
import logo1 from '/logo/logo3.png'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className='fixed w-full bg-white bg-opacity-80 afterHeader z-20'>
      <div className='flex justify-between items-center py-2 px-12 md:px-24 lg:px-44 text-primaryTextColor'>
        
        <Link to="/">
          <img className='w-24' src={logo} alt="Genius Coders Logo" />
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex gap-4 text-xl capitalize font-medium'>
            <li className='relative after-li hover:after:w-full hover:after:left-0'>
              <NavLink className={({isActive}) => `duration-300 hover:text-secondaryColor ${isActive ? "text-primaryColor font-bold" : ""}`} to="/">home</NavLink>
            </li>
            <li className='relative after-li hover:after:w-full hover:after:left-0'>
              <NavLink className={({isActive}) => `duration-300 hover:text-secondaryColor ${isActive ? "text-primaryColor font-bold" : ""}`} to="/courses">courses</NavLink>
            </li>
            <li className='relative after-li hover:after:w-full hover:after:left-0'>
              <NavLink className={({isActive}) => `duration-300 hover:text-secondaryColor ${isActive ? 'text-primaryColor font-bold' : ''}`} to="/testimonials">testimonials</NavLink>
            </li>
            <li className='relative after-li hover:after:w-full hover:after:left-0'>
              <NavLink className={({isActive}) => `duration-300 hover:text-secondaryColor ${isActive ? 'text-primaryColor font-bold' : ''}`} to="/about">about</NavLink>
            </li>
            <li className='relative after-li hover:after:w-full hover:after:left-0'>
              <NavLink className={({isActive}) => `duration-300 hover:text-secondaryColor ${isActive ? 'text-primaryColor font-bold' : ''}`} to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className='hidden md:block'>
          <ul className='flex items-center gap-4 leading-none font-thin text-white text-xs'>
            <li><a className='flex justify-center items-center rounded-full w-12 h-10 bg-secondaryColor hover:bg-primaryColor duration-500' target='_blank' href="https://www.facebook.com/Robotics.circuits.Coding"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a className='flex justify-center items-center rounded-full w-12 h-10 bg-secondaryColor hover:bg-primaryColor duration-500' target='_blank' href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a className='flex justify-center items-center rounded-full w-12 h-10 bg-secondaryColor hover:bg-primaryColor duration-500' target='_blank' href="https://wa.me/+201028815414"><i className="fa-brands fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div className='md:hidden '>
          <button  className='flex flex-col w-9 gap-1 p-2 bg-secondaryColor' onClick={() => setOpenMenu(!openMenu)}>
            <span className={`h-[2px] w-full bg-primaryTextColor rounded-full transition-all  duration-1000 ${openMenu ? "rotate-[225deg] translate-y-[6px]" : ""}`}></span>
            <span className={`h-[2px] w-full bg-primaryTextColor rounded-full transition-all  duration-1000 ${openMenu ? "w-0 opacity-0" : "opacity-100"}`}></span>
            <span className={`h-[2px] w-full bg-primaryTextColor rounded-full transition-all  duration-1000 ${openMenu ? "-rotate-[225deg] -translate-y-[6px]" : ""}`}></span>
          </button>
        </div>

        <div  className={`${openMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} md:hidden w-full transition-all duration-500 absolute top-0 left-0 h-screen z-10`}>
          <div onClick={() => setOpenMenu(!openMenu)} className='bg-primaryColor h-screen bg-opacity-10'></div>
          <div className='flex flex-col gap-12 bg-primaryColor absolute top-0 left-0 w-full sm:w-1/2 h-screen z-20 p-8'>
            <Link className='flex items-center' onClick={() => setOpenMenu(!openMenu)} to="/">
              <img className='w-3/4' src={logo1} alt="logo for genius coders" />
              <button  className='flex flex-col w-9 gap-1 p-2 bg-secondaryColor' onClick={() => setOpenMenu(!openMenu)}>
                <span className={`h-[2px] w-full bg-primaryTextColor rounded-full transition-all  duration-1000 ${openMenu ? "rotate-[225deg] translate-y-[6px]" : ""}`}></span>
                <span className={`h-[2px] w-full bg-primaryTextColor rounded-full transition-all  duration-1000 ${openMenu ? "w-0 opacity-0" : "opacity-100"}`}></span>
                <span className={`h-[2px] w-full bg-primaryTextColor rounded-full transition-all  duration-1000 ${openMenu ? "-rotate-[225deg] -translate-y-[6px]" : ""}`}></span>
              </button>
            </Link>
            <nav>
              <ul className='flex flex-col gap-4 text-white font-light text-xl pr-16'>
                <li onClick={() => setOpenMenu(!openMenu)}><NavLink className={({isActive}) => `duration-500 hover:text-secondaryColor hover:pl-4 block border-b-[1px] border-primaryTextColor pb-3 capitalize ${isActive ? 'text-secondaryColor font-bold' : ''}`} to="/">home <i className="fa-solid fa-house"></i></NavLink></li>
                <li onClick={() => setOpenMenu(!openMenu)}><NavLink className={({isActive}) => `duration-500 hover:text-secondaryColor hover:pl-4 block border-b-[1px] border-primaryTextColor pb-3 capitalize ${isActive ? 'text-secondaryColor font-bold' : ''}`} to="/testimonials">testimonials <i class="fa-solid fa-hand-holding-heart"></i></NavLink></li>
                <li onClick={() => setOpenMenu(!openMenu)}><NavLink className={({isActive}) => `duration-500 hover:text-secondaryColor hover:pl-4 block border-b-[1px] border-primaryTextColor pb-3 capitalize ${isActive ? 'text-secondaryColor font-bold' : ''}`} to="/about">about <i className="fa-solid fa-dragon"></i></NavLink></li>
                <li onClick={() => setOpenMenu(!openMenu)}><NavLink className={({isActive}) => `duration-500 hover:text-secondaryColor hover:pl-4 block border-b-[1px] border-primaryTextColor pb-3 capitalize ${isActive ? 'text-secondaryColor font-bold' : ''}`} to="/contact">contact <i className="fa-regular fa-address-book"></i></NavLink></li>
              </ul>
            </nav>

            <div>
              <p>Our mission is to inspire and empower a new generation to stay ahead in the tech-driven world by mastering the art of PROGRAMMING 💻👩🏼‍💻🤖🚀. Join us on this exciting journey of innovation and learning!</p>
              <ul className='flex items-center gap-4 leading-none mt-8 font-thin text-white text-xs'>
                <li><a className='flex justify-center items-center rounded-full w-10 h-10 bg-primaryTextColor hover:bg-secondaryColor duration-500' target='_blank' href="https://www.facebook.com/Robotics.circuits.Coding"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a className='flex justify-center items-center rounded-full w-10 h-10 bg-primaryTextColor hover:bg-secondaryColor duration-500' target='_blank' href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a className='flex justify-center items-center rounded-full w-10 h-10 bg-primaryTextColor hover:bg-secondaryColor duration-500' target='_blank' href="https://wa.me/+201028815414"><i className="fa-brands fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header