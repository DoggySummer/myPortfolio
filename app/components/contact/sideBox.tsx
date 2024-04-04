import React from 'react'

const SideBox = () => {
  return (
    <div className="absolute left-4 top-24 h-[400px] w-[400px] border-b-4 border-b-orange-500 bg-slate-100 px-12">
      <div className="absolute right-14 top-9">
        <div className="absolute z-[1] aspect-square w-6 rotate-[-30deg] border-[2px] border-black" />
        <div className="absolute left-2 top-1 aspect-square w-6 rotate-[-30deg] bg-orange-500" />
      </div>
      <div className="absolute -left-10 top-20 text-4xl font-bold">
        <div className="relative z-[1]">Contact Me.</div>
        <div className="absolute left-40 top-2 h-12 w-16 bg-orange-500 opacity-30" />
      </div>
      <div className="mt-44 text-xl font-bold">저에 대해 궁금하신 내용이 있다면 연락주시기 바랍니다!</div>
    </div>
  )
}

export default SideBox
