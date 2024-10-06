import Post from "../component/post";
import { useState,useEffect } from "react";

export default function IndexPage(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        // chech port
        fetch('http://localhost:3000/api/posts').then(response=>{
            response.json().then(posts=>{
                setPosts(posts)
            });
        })
    },[])
    return(
        <>
            <h1>Hello</h1>
            {posts.length > 0 && posts.map(post =>(
                <Post key={post._id} {...post}/>
            ))}
        </>
    )
}
