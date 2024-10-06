import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function PostPage(){
    const [postInfo,setPostInfo] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/api/posts/${id}`).then(response=>{
            response.json().then(postInfo=>{
                setPostInfo(postInfo);
            });
        });
    }, [id]);

    if(!postInfo){
        return '';
    }
    return(
        <div>
            <div>
            <img src={`http://localhost:3000/${postInfo.cover}`}alt="Post Cover"/>
            </div>
            <h1>{postInfo.title}</h1>
            {/* dangerouslySetInnerHTML-->This is a special React property used to inject raw HTML into a React component.
                the HTML stored in postInfo.content inside the div tag. 
                The dangerouslySetInnerHTML property allows the raw HTML content to be directly injected, 
                which would not be possible with normal JSX due to React's escaping behavior. 
            */}
            <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
            {/* done cautiously to avoid security vulnerabilities */}
        </div>
    )
}