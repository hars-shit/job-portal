"use client"

import { TEMPLATE } from '@/app/_components/Template'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'

type EXPERIENCEITEM = string;

const EXPERIENCE: EXPERIENCEITEM[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

interface PROPS {
    selectedTemplate?: TEMPLATE,
}

const Form = ({ selectedTemplate }: PROPS) => {
    const { user } = useUser()
    const [email, setEmail] = useState<string | null>(null);


    useEffect(() => {
        if (user && user.emailAddresses.length > 0) {
            setEmail(user.emailAddresses[0].emailAddress);
        }
    }, [user]);

    const [loading, setLoading] = useState<boolean>(false);
    const [upload,setUpload]=useState<boolean>(false);
    const [data, setData] = useState<any>({
        email: "",
        title: "",
        experience: "",
        description: ""
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const GetData = async () => {
            try {
                setLoading(true)
                if (email) {
                    let response = await axios.post('/api/post', {
                        email: email,
                        title: data.title,
                        experience: data.experience,
                        description: data.description
                    });
                    // console.log("res", response)
                    setData({
                        title: "",
                        experience: "",
                        description: ""
                    });
                    setLoading(false)
                    setUpload(true);
                    
                }
                else {
                    console.log("Email is undefined")
                    setLoading(false)
                }
            }
            catch (err: any) {
                console.log("Error while upload post", err)
                setLoading(false)
            }
        }
        GetData()

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleExperienceChange = (value: string) => {
        setData({ ...data, experience: value })
    }

    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            {/* @ts-ignore*/}
            <Image src={selectedTemplate?.icon} alt='icon' width={50} height={50} />
            <h2
                className='font-bold text-2xl mb-2 text-primary'
            >{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={handleSubmit}>
                <div
                    className='my-2 flex flex-col gap-2 mb-7'
                >
                    <label >Enter Your Job Title</label>
                    <Input
                        required={true}
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <label>Select Your Experience</label>
                    <Select
                        value={data.experience}
                        onValueChange={handleExperienceChange}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Experience" />
                        </SelectTrigger>
                        <SelectContent>
                            {EXPERIENCE.map((e, i) => (
                                <SelectItem key={i} value={e}>{e}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <label >Enter Your Company Name / Job Description</label>
                    <Textarea
                        name="description"
                        required={false}
                        onChange={handleChange}
                        value={data.description}
                    />
                </div>
                <Button type="submit" disabled={loading || !email} className='w-full py-6 bg-primary rounded'>
                    {loading ?
                        <Loader2Icon className='animate-spin' />
                        :
                        upload ?
                        "Uploaded !"
                        :
                        "Upload Post"
                    }
                </Button>
            </form>
        </div>
    )
}

export default Form
