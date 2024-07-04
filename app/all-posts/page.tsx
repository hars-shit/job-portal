"use client"

import { Button } from '@/components/ui/button'
import axios from 'axios'
import { ArrowLeft, Loader2Icon, Target } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [posts, setPosts] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getAllData = async () => {
      try {
        setLoading(true)
        let response = await axios.get("/api/post");
        // console.log("data of all post",response)
        setPosts(response?.data)
        setLoading(false)
      }
      catch (err: any) {
        console.log("Error while getting all data", err.message);
      }
    }
    getAllData()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: "numeric",
    }
    return date.toLocaleDateString('en-US', options);
  }
  return (
    <>
      <div className='p-6'>
        <Link href={'/'}>
          <Button className='bg-primary'><ArrowLeft>Back</ArrowLeft></Button>
        </Link>
      </div>
      <div>
        {loading ?
          <div className='flex w-full justify-center'>

            <Loader2Icon className='w-20 h-20 text-gray-500' />
          </div>
          :

          <div className='p-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
              posts?.map((e: any, i: number) => (
                <div className='shadow-lg rounded-sm p-5' key={i}>
                  <h2 className='border w-fit p-2 mb-2 border-primary rounded-sm hover:bg-primary hover:text-white'>{formatDate(e.createdAt)}</h2>
                  <h2 className='text-xl font-semibold text-primary'>{e.title}</h2>
                  <p className='text-sm text-gray-500 font-normal mb-3'>{e.description}</p>
                  <div className='flex gap-2'> <Target className='text-yellow-500' /><p>{e.experience} Years</p></div>
                  <div className='flex justify-center gap-3 mt-5 p-5 bg-primary rounded-md'>
                    <h2 className='text-white font-semibold text-sm'>Contact Us :</h2>
                    <h2 className='text-white font-semibold text-sm'>{e.email}</h2>
                  </div>
                </div>
              ))
            }
          </div>
        }
      </div>
    </>
  )
}

export default page
