import {formatISO9075} from 'date-fns';

export default function Post({_id,title,summary,content,cover,createdAt,author}){
    return(
        <div className="post">
          <div className='images'>
            {/* Takes to that specific post's id */}
            <Link to={  `/post/${_id} `}>
            {/* // chech port */}
              <img src={'http://localhost:4000/'+cover} alt=""/>  
            </Link>       
          </div>
          <div className='texts'>
            <h2>{title}</h2>
            <p className='info'>
              <a className='author'>{author}</a>
              {/* Gives a neat format for date and time */}
              <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className='summary'>{summary}</p>
          </div>
      </div>
    )
}