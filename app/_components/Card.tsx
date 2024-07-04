import React from 'react'
import { TEMPLATE } from './Template'
import Image from 'next/image'
import Link from 'next/link'


const Card = (e:TEMPLATE) => {
  return (
    <Link href={'/content/'+e.slug}>
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col
    gap-3 cursor-pointer hover:scale-105 transition-all w-full
    '>
      <Image src={e.icon} alt='icon' width={50} height={50}/>

      <h2 className='font-medium text-lg'>{e.name}</h2>

      <p className='text-gray-500 line-clamp-3'>{e.desc}</p>
    </div>
      </Link>
  )
}

export default Card
