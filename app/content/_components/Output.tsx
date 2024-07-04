"use client"

import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { NotificationCard } from './NotificationCard';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';

const Output = () => {
    const { user } = useUser();
    const email = user?.emailAddresses[0]?.emailAddress;
    const [posts, setPosts] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const editorRef: any = useRef();
    const [isRotating, setIsRotating] = useState<boolean>(false);

    useEffect(() => {
        getData();
        if(email){
            const id=setInterval(()=>{
                getData()
            },15000)
            return ()=>clearInterval(id);
        }
    }, [email]);

    const getData = async () => {
        try {
            setIsRotating(true);
            setLoading(true);
            if (email) {
                const response = await axios.get(`/api/post/get-by-user?email=${email}`);
                console.log("res data", response?.data[0]);
                setPosts(response?.data[0]);
                setLoading(false);
            }
        } catch (err: any) {
            console.log("Error while fetching data by id", err);
        } finally {
            // Stop rotation after 1 second
            setTimeout(() => setIsRotating(false), 1000);
        }
    };

    return (
        <div className='bg-white shadow-lg border pb-14 rounded'>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-lg'>Your Uploaded Post is here</h2>
                <div className="flex items-center space-x-4 p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Refresh Notifications
                        </p>
                    </div>
                    <RefreshCw
                        onClick={getData}
                        className={`text-primary w-5 h-5 cursor-pointer ${isRotating ? 'animate-rotate' : ''}`}
                    />
                </div>
            </div>
            <NotificationCard  posts={posts}/>
        </div>
    );
};

export default Output;
