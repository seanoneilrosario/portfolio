'use client'
import React, { useEffect, useState } from 'react';
import ParallaxImage from './ParallaxImage';


export default function SpreadComponents({data}:any) {
    console.log(data)

  return (
    <>
        {data.map((component:any) => (
            component.map((items:any) => {
                return (
                    <>
                        asdfasdfas
                    </>
                )
            })
        ))}
        {/* <ParallaxImage /> */}
    </>
    
  )
}
