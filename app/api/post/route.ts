import connect from "@/lib/dbConnect"
import Post from "@/lib/models/post"
import { NextResponse } from "next/server"

export const GET=async()=>{
    try{
        await connect()
        const allPost=await Post.find({}).sort({createdAt:-1});
        return new NextResponse(JSON.stringify(allPost),{status:200})
    }
    catch(err:any){
        return new NextResponse("Error while getting all post",{status:500})
    }
}
export const POST=async(req:Request)=>{
    try{
        await connect()
        const {email,title,experience,description}=await req.json()

        
        if(!email || !title || !experience){
            return new NextResponse("Missing required fields",{
                status:400
            })
        }

        const newPost=new Post ({email,title,experience,description});
        await newPost.save()

        return new NextResponse(JSON.stringify({message:"Post is created",post:newPost}),{status:200})


    }
    catch(err){
        return new NextResponse("Error while creating a post",{status:500})
    }
}
