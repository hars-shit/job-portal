"use client"
import { use, useEffect, useState } from "react"
import Search from "./_components/Search"
import Template from "./_components/Template"
import { useUser } from "@clerk/nextjs"
import axios from 'axios'
const page = () => {
  const {user} = useUser()
  // console.log("a",user?.fullName)
  // console.log("b",user?.imageUrl)
  // console.log("c",user?.emailAddresses[0].emailAddress)

  useEffect(()=>{
    const addUser=async()=>{
      try{
        let email=user?.emailAddresses[0].emailAddress;
        let name= user?.fullName;
        let image_url=user?.imageUrl;

        if(email && name ){
          let response=await axios.post('/api/users',{
            email,
            name,
            image_url,
          })

          console.log("User added Successfully",response.data);

        }
        else{
          console.log("Missing required user information")
        }

      }
      catch(err){
        console.log("errow while hitting the api",err)
      }
    }
    addUser()
  },[user])

  const [userInput,setUserInput]=useState<string>()
  return (
    <div>
    {/* Search Section  */}
    <Search onSearch={(value:string)=>setUserInput(value)}/>

    {/* temp list section  */}
    <Template userInput={userInput} />
    </div>
  )
}

export default page
