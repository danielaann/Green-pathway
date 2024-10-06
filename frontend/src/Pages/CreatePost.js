import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const modules={
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };

const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];

export default function CreatePost(){
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState('');
    const [files,setFiles] = useState('');
    const [redirect,setRedirect] = useState(false);

    async function createNewPost(e){
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('author',author)
        data.set('file',files[0]);
        e.preventDefault();
        // chech port
        const response = await fetch('http://localhost:3000/api/posts/',{
            method:'POST',
            body: data,
        });
        if(response.ok){
            setRedirect(true);

        }
    }

    if(redirect){
        return <Navigate to={'/post'}/>
    }
    
    return(
        <form onSubmit={createNewPost}>
            <input 
                type='title' 
                placeholder={'Title'} 
                value={title} 
                onChange={e=>setTitle(e.target.value)}/>
            <input 
                type='summary' 
                placeholder={'Summary'}
                value={summary}
                onChange={e=>setSummary(e.target.value)}/>
            <input 
                type='author' 
                placeholder={'Author'}
                value={author}
                onChange={e=>setAuthor(e.target.value)}/>
            <input 
                type='file' 
                onChange={e=>setFiles(e.target.files)}/>
            {/* install react-quill */}
            <ReactQuill  
                value={content} 
                onChange={newValue=>setContent(newValue)}
                modules={modules} 
                formats={formats}/>
            <button style={{marginTop:'5px'}}>Create post</button>
        </form>
    )
}