"use client";
import { UserButton, useUser } from '@clerk/nextjs'
import { Logs, Search, X } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>

      <div className='  hidden sm:flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white '>
        <Search />
        <input type="text" placeholder='Search Here...'
          className='outline-none'
        />
      </div>

      <div className='flex sm:hidden cursor-pointer'>
        <Logs className='text-primary' onClick={() => setShow(true)} />
      </div>
      <div>
        <UserButton />
      </div>

      {/* sidebar  */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 p-5 flex flex-col bg-primary shadow-lg transition-all duration-500 ${show ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className='w-full flex justify-end'>
        <X className='text-white  cursor-pointer 'onClick={()=>setShow(false)} />
        </div>

        <div className='w-full flex flex-col pt-14 text-white gap-8 font-medium text-xl items-center'>
          <Link href='/' onClick={()=>setShow(false)}>Home</Link>
          <Link href='profile' onClick={()=>setShow(false)}>Profile</Link>
          <Link href='/all-posts' onClick={()=>setShow(false)}>All Posts</Link>
          <Link href='/posts' onClick={()=>setShow(false)}>Your Posts</Link>
          </div>

      </div>
    </div>
  )
}

export default Header
