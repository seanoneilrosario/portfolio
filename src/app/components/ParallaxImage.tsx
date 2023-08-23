'use client'
import React from 'react';


export default function ParallaxImage(data:any) {

  return (
    <div className="relative min-h-[50vh] h-[400px] bg-[#061d3ac2] flex items-center justify-center">
    <div className='min-h-[50vh] h-[400px] fixed w-[100%] z-[-1]'>
        {/* <img className='h-[100%] w-[100%] object-cover' src=''></img> */}
    </div>
    <div className='px-[20px]'>
        <h1 className='leading-tight font-[Amita-Regular] text-[35px] md:text-[50px] text-[#F1F0E8]'>Hi, It's Sean</h1>
        <h1 className='leading-tight font-[Amita-Regular] text-[35px] md:text-[50px] text-[#F1F0E8]'>I'm a Professional Web Developer</h1>
    </div>
    </div>
  )
}
