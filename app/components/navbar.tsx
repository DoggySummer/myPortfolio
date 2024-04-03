'use client'
import { useState, useRef } from 'react'

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const menuRef = useRef(null)
  const menus = [
    {
      id: 0,
      name: 'ABOUT',
    },
    {
      id: 1,
      name: 'SKILL',
    },
    {
      id: 2,
      name: 'PROJECT',
    },
    {
      id: 3,
      name: 'CONTACT',
    },
  ]
  return (
    <div className="z-10 flex h-16 w-full items-center justify-between px-12 backdrop-blur-sm">
      <div className="cursor-pointer">GW</div>
      <ul className="flex">
        {menus.map((item) => {
          return (
            <>
              <li key={item.id} className="mx-3 cursor-pointer px-2 py-1" onClick={() => setSelectedMenu(item.id)}>
                {item.name}
              </li>
              <div
                key={item.id}
                className={`${selectedMenu === item.id ? '' : ''} h-2 w-0 bg-black transition-all hover:w-2`}
              />
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
