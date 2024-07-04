"use client"
import React, { useState } from 'react'
import Form from '../_components/Form'
import Output from '../_components/Output'
import  { TEMPLATE } from '@/app/_components/Template'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/Model'



interface PROPS{
   params:{
    'template-slug':'string'
   }
}

const CreateContent = (props:PROPS) => {
    const selectedTemplate:TEMPLATE | undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
    const [loading,setLoading]=useState<boolean>(false)
    
    const GeneratedContent=async(data:any)=>{

      setLoading(true)
        const selectedPrompt=selectedTemplate?.aiPrompt;

        const finalPrompt=JSON.stringify(data)+", "+selectedPrompt;

        const result=await chatSession.sendMessage(finalPrompt)
        console.log("res",result.response.text())
        setLoading(false)
    }
    return (

        <div className='p-6'>
            <Link href={'/'}>
            <Button className='bg-primary'><ArrowLeft>Back</ArrowLeft></Button>
            </Link>

    <div className='grid  grid-cols-1 md:grid-cols-3 gap-5 py-5'>
      {/* for section  */}
      <div  className='col-span-1'>
      <Form  selectedTemplate={selectedTemplate}/>
      </div>

      {/* output section  */}
      <div className='col-span-2'>
      <Output />
      </div>
    </div>
        </div>
  )
}

export default CreateContent
