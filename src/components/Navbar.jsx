import { useState } from "react"

import { samespace, menu, close  } from "../assets"
import {navLinks} from "../constants"
import Button from "./Button"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      <img className="w-[40px] h-[40px] rounded-full transform 
      hover:scale-110 transition-transform cursor-pointer " src={samespace} alt="samespace_logo" />
      <p className="ml-2 font-bold text-xl text-white cursor-pointer">samespace</p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins
          font-normal cursor-pointer text-[16px] hover:text-secondary ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>
          
        ))
        }
        <li>
          <Button styles="text-sm  px-6 py-12 rounded-full "/>
        </li>
      </ul>


      <div className="sm:hidden flex flex-1
      justify-end items-center">
        <img src={toggle ? close: menu}
        alt="menu"
        className="w-[28px] h-[28px]
        object-contain"
        onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'}
      p-6 bg-black-gradient
      absolute top-20 right-0 mx-4 
      my-2 min-w-[140px] rounded-xl
      sidebar}`}
      >

        <ul className="list-none flex flex-col
        justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li key={nav.id} className={`font-poppins
                  font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
                    <a href={`#${nav.id}`} >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
        
      </div>
    </nav>

    
  )
}

export default Navbar