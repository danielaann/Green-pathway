import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Post({_id,title,summary,content,cover,createdAt,author}){
    return(<>
        <div className="card text-center px-4 py-2" style={{borderRadius: '25px', width:'50%',border: '1px solid', margin: 'auto'}}>
          <div className='images'>
            {/* Takes to that specific post's id */}
            <Link to={  `/post/${_id} `}>
              <img src={`http://localhost:3000/uploads/${cover}`} alt="bitxh"/>  
            </Link>       
          </div>
          <div className='texts'>
            <h2 className='display-2 fw-bolder mb-4 text-center'>{title}</h2>
            <p className='info'>
              <a className='author'>{author}</a>
              {/* Gives a neat format for date and time */}
              <time>{createdAt ? formatISO9075(new Date(createdAt)) : 'No date'}</time>
            </p>
            <p className='summary'>{summary}</p>
          </div>
      </div> <br></br>
      </>
    )
}