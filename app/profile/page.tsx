"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs'
import { ArrowLeft, Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {

  const {user}=useUser()
  // console.log("user",user)

   // console.log("a",user?.fullName)
  // console.log("b",user?.imageUrl)
  // console.log("c",user?.emailAddresses[0].emailAddress)
  return (
 <div>
        <div className='p-6'>
            <Link href={'/'}>
            <Button className='bg-primary'><ArrowLeft>Back</ArrowLeft></Button>
            </Link>
            </div>
    
    <div className='flex w-full justify-center items-center mt-5'>
        {user ? 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
       
       <div className='col-span-1'>
     {
       user?.imageUrl && 
       <Image src={user?.imageUrl } width={150} height={150} className='rounded-full' alt='image'/>
      }
     </div>

    <div className='col-span-2 mt-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
      <div >

      <label htmlFor="" className='text-sm'>First Name</label>
      {
        user?.firstName &&
        <Input value={user?.firstName} disabled className='text-black mt-2 text-lg'/>
      }
      </div>
      <div >
      <label htmlFor=""  className='text-sm'>Last Name</label>
      {
        user?.lastName &&
        <Input value={user?.lastName} disabled className='mt-2 text-lg'/>
      }
      </div>
      <div>
      <label htmlFor=""  className='text-sm'>Email Address</label>
      {
         user?.emailAddresses[0].emailAddress &&
         <Input value={user?.emailAddresses[0].emailAddress} disabled className='mt-2 text-lg overflow-hidden whitespace-nowrap text-ellipsis'/>
        }
      </div>
    </div>
    </div>
    :
    <div >
      <Loader2Icon className='w-20 h-20 text-gray-500'/>
    </div>
}
    </div>
    
      </div>
  
  )
}

export default page
