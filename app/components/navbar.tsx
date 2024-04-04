'use client'

import { useState, useRef } from 'react'

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [bottomWidth, setBottomWidth] = useState(0)
  const menuRefs = useRef<any[]>([]) // 각 메뉴에 대한 ref 배열 생성

  const handleMouseEnter = (id: number) => {
    setSelectedMenu(id) // 마우스가 올라간 메뉴를 선택한 메뉴로 설정
    if (menuRefs && menuRefs.current[id]) {
      setBottomWidth(30)
    }
  }

  const handleMouseLeave = () => {
    setBottomWidth(0)
  }

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
        {menus.map((item, i) => (
          <div key={item.id} onMouseLeave={handleMouseLeave}>
            <li
              className="mx-3 cursor-pointer px-2 py-1"
              onClick={() => setSelectedMenu(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
            >
              {item.name}
            </li>
            <div
              className={`mx-4 h-[2px] bg-black transition-all`}
              ref={(element) => {
                menuRefs.current[i] = element
              }}
              style={{ width: item.id === selectedMenu ? bottomWidth + 'px' : 0 }}
            />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
