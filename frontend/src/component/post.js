import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Post({_id,title,summary,content,cover,createdAt,author}){
    return(<>
        <div className="card text-center px-4 py-2" style={{borderRadius: '25px', width:'40%',border: '1px solid', margin: 'auto'}}>
          <div class="row">
          <div className='col-sm'>
            {/* Takes to that specific post's id */}
            <Link to={  `/post/${_id} `}>
              <img src={`http://localhost:3000/${cover}`} alt="No Image" style={{width:'200px', height:'180px'}}/>  
            </Link>       
          </div>
          <div className='texts col-sm'>
            <h5 className='fw-bold text-center'>{title}</h5>
            <p className='info'>
              <a className='author nav-link'>{author}</a> 
              {/* Gives a neat format for date and time */}
              <time>{createdAt ? formatISO9075(new Date(createdAt)) : 'No date'}</time>
            </p>
            <p className='summary'>{summary}</p>
          </div>
          </div>
      </div> <br></br>
      </>
    )
}