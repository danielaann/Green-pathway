import Post from "../post";
import { useState,useEffect } from "react";

export default function IndexPage(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        // chech port
        fetch('http://localhost:3000/api/post/post').then(response=>{
            response.json().then(posts=>{
                setPosts(posts)
            });
        })
    },[])
    return(
        <>
            {posts.lenght > 0 && posts.map(post =>{
                <Post{...post}/>
            })}
        </>
    )
}