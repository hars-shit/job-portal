import React from 'react'
import {Search as B} from 'lucide-react'
const Search = ({onSearch}:any) => {
  return (
    <div className='p-2 md:p-8 lg:p-10 bg-purple-900 flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold text-white'>Browse All Jobs</h2>
    
    <p className='text-white'>What would you like to Search today?</p>

    <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded bg-white my-5
        w-[80%]  md:w-[50%] lg:w-[50%] 
        '>
            <B className='text-primary'/>
            <input type="text" onChange={(e)=>onSearch(e.target.value)} placeholder='Search ' className='w-full outline-none bg-transparent'/>
        </div>
    </div>
    </div>
  )
}

export default Search
