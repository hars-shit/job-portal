import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URL;

const connect=async()=>{
  const connectionSTate=mongoose.connection.readyState;

  if(connectionSTate===1){
    console.log("Already connected");
    return;
  }

  if(connectionSTate===2){
    console.log("Connecting...")
    return;
  }
  try{
    mongoose.connect(MONGODB_URI !,{
      dbName:'next14restapi',
      bufferCommands:true
    });
    console.log('Connected');
  }
  catch(err:any){
    console.log("Error",err.message);
   
  }
}

export default connect;