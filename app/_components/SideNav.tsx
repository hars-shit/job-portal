"use client";
import { FileClock, Grid2x2Check, Home, Settings, StickyNote, UserRound, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const SideNav = () => {

  const path=usePathname()


  useEffect(()=>{

  },[])

  const MenuList=[
    {
      name:'Home',
      icon:Home,
      path:'/'
    },
    {
      name:'Profile',
      icon:UserRound,
      path:'/profile'
    },
    {
      name:'All Posts',
      icon:Grid2x2Check,
      path:'/all-posts'
    },
    {
      name:'Your Posts',
      icon: StickyNote ,
      path:'/posts'
    },
  ]
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
      <Image src='/logo.svg' width={120} height={120} alt='logo'/>
      </div>
      <hr className='my-6 border'/>

      <div className='mt-3'>
        
        {MenuList.map((e,i)=>(
          <Link key={i} href={`${e.path}`}>
          <div  className={` flex gap-2 mb-2 p-3
          hover:bg-primary hover:text-white rounded-lg
          items-center
          cursor:pointer
          
          ${path==e.path && 'bg-primary text-white'}
          `}>
            < e.icon className='h-6 w-6'/>
            <h2 className='text-lg'>{e.name}</h2>
          </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
