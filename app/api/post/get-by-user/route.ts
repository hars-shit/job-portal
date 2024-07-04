import connect from "@/lib/dbConnect"
import Post from "@/lib/models/post";
import { NextRequest, NextResponse } from "next/server"

export const GET=async(req:NextRequest)=>{
  try{
    await connect();
    const {searchParams}=new URL(req.url);
    const email=searchParams.get("email");
    if(!email){
        return new NextResponse("Email not found",{status:400})
    }
    const posts=await Post.find({email : email}).sort({createdAt:-1});

    return new NextResponse(JSON.stringify(posts),{status:200})

  } 
  catch(err:any){
    return new NextResponse("Error while getting post of a user" + err.message,{status:500})
  }
}