import React from 'react'
import './blogitem.scss'
import { Link } from 'react-router-dom'

const BlogItem = ({ thumbnail, author, date, title, content }) => {
  return (
    <div className="blog-container">
      <div className="blog-thumb">
        <Link to="/detail-blog"><img src={thumbnail} alt="Thumbnail" /></Link>
      </div>
      <div className="blog-body">
        <div className="blog-title"><Link to="/detail-blog"><h2>{ title }</h2></Link></div>
        <div className="blog-author">Author: {author} - Date Posted: {date}</div>
        <div className="blog-content"><p>{ content }</p></div>
        <Link to="/detail-blog" className="read-more">Read more...</Link>
      </div>
    </div>
  )
}

export default BlogItem
