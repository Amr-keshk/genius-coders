import React from 'react'
import { socialLinks } from '../data/data'
function SocialList() {
  return (
    <ul className='flex items-center gap-4 leading-none font-thin text-white text-xs'>
      {socialLinks.map((link, index) => {
        return (
          <li key={`${link.href}-${index}`}>
            <a className={`flex justify-center items-center rounded-full duration-500 w-10 h-10 bg-darkblue hover:bg-orange`} target='_blank' href={link.href} rel='noopener noreferrer'>
              <i className={link.icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialList