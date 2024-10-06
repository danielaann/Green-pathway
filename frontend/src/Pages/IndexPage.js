import Post from "../component/post";
import { useState,useEffect } from "react";
import NavBar from '../Navigation/NavBar';

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
        <section style={{backgroundColor:'#dbfae1'}}>
            <NavBar/>
            <br/>

            <h3 className="display-4 fs-i fw-bold text-center text-black py-1">Blogs & DIYs</h3>
            {posts.length > 0 && posts.map(post =>(
                <Post key={post._id} {...post}/>
            ))}
        </section>
        </>
    )
}

