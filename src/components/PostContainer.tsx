"use client"

import Post from "./Post"
import { useQuery } from "@tanstack/react-query";

type Post = {
    id: string;
    image: string;
    title: string;
    previewText: string;
    timestamp: string;
}

export default function PostContainer(){
    async function fetchPosts(){
        const res = await fetch("http://localhost:3000/api/posts");
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
          }
          
        const result = await res.json();
        return result;
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"], 
        queryFn: fetchPosts,
    });

    return(
        <div className="pl-[7%] pr-[7%] flex gap-x-[40px] mt-[150px]">
            {isLoading&&<p>Loading...</p>} 
            {error&&<p>Error: {error.message}</p>}

            {data && data.length > 0 &&
                data.map((post:Post)=>{
                    return(
                        <Post
                            key={post.id}
                            {...post}
                        />
                    )
                })
            } 
        </div>

    )
}