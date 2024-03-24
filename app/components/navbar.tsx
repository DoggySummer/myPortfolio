import React from 'react'

const Navbar = () => {
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
            <li key={item.id} className="mx-3 px-2 py-1">
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
