"use client"

import { ArrowUpRight, BellRing, Check, Target } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import Link from "next/link"


const notifications = [
  {
    title: "Your Post has been posted.",
    description: "1 hour ago",
  },
  {
    title: "You have a new Post reaction!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]



export function NotificationCard({posts}:any) {
  // console.log("post aa gya re",posts)

 
  // console.log("c", user?.emailAddresses[0]?.emailAddress)
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
    <div className="flex justify-center items-center">

      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle className='font-bold text-2xl text-primary'>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">

          <div>
          
                <div className='shadow-lg rounded-sm p-5'>
                  <h2 className='border w-fit p-2 mb-2 border-primary hover:bg-primary hover:text-white'>{formatDate(posts.createdAt)}</h2>
                  <h2 className='text-xl font-semibold text-primary'>{posts.title}</h2>
                  <p className='text-sm text-gray-500 font-normal mb-3'>{posts.description}</p>
                  <div className='flex gap-2'> <Target className='text-yellow-500' /><p>{posts.experience} Years</p></div>
                  {/* <div className='flex justify-center gap-3 mt-5 p-5 bg-primary rounded-md'>
        <h2 className='text-white font-semibold text-lg'>Contact Us :</h2>
        <h2 className='text-white font-semibold text-lg'>{e.email}</h2>
        </div> */}
                </div>
          
          </div>
        </CardContent>
        <CardFooter className="w-full ">
          <Link href={"/posts"} className="w-full">
          <Button className='w-full py-6 bg-primary rounded'>
            <ArrowUpRight className="mr-2 h-4 w-4" />See All Posts
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
