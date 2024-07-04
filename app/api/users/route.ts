import connect from "@/lib/dbConnect"
import User from "@/lib/models/user";
import { NextResponse } from "next/server"

export const GET=async()=>{
    try{
        await connect();
        const users=await User.find();
        return new NextResponse(JSON.stringify(users),{status:200})
    }
    catch(err:any){
        return new NextResponse("Error in fetching users"+err.message,{
            status:500,
        })
    }
}

export const POST=async(req:Request)=>{
    try{
        await connect()
        const {name,email,image_url}=await req.json()

        if(!name || !email || !image_url){
            return new NextResponse("Missing required fields",{
                status:400
            })
        }

        const newUser=new User({name,email,image_url});
        await newUser.save()
        return new NextResponse(JSON.stringify({message:"User is created",user:newUser,}),{status:200})
    }
    catch(Err : any){
        return new NextResponse("Error in creating the user in db"+Err.message,{status:500});
    }
}

