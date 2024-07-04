"use client"
import React, { useEffect, useState } from 'react'
import Templates from '../(data)/Templates'
import Card from './Card'


export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]

}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

const Template = ({userInput}:any) => {
    const [list,setList]=useState(Templates)
    useEffect(()=>{
             console.log(userInput)
             if(userInput){
                const filterData=Templates.filter((i)=>i.name.toLowerCase().includes(userInput.toLowerCase()))
             
                setList(filterData);
            }
            else{
                setList(Templates)
            }
    },[userInput])


  return (
    <div className='grid w-[100%] md:w-[30%] lg:w-[30%]
    gap-5 p-10 
    '>
     {list.map((e:TEMPLATE,i:number)=>(
      <React.Fragment key={i}>
           <Card {...e}/>
      </React.Fragment>
     ))}
    </div>
  )
}

export default Template
