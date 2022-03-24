import React from 'react'
import './blogitem.scss'
import { Link } from 'react-router-dom'

const BlogItem = (props) => {
  return (
    <div className="blog-container">
      <div className="blog-thumb">
        <Link to="/detail-blog"><img src={props.image} alt="Thumbnail" /></Link>
      </div>
      <div className="blog-body">
        <div className="blog-title"><Link to="/detail-blog"><h2>{ props.title }</h2></Link></div>
        <div className="blog-author">Author: {props.author} - Date Posted: {props.date}</div>
        <div className="blog-content"><p>{ props.body }</p></div>
        <Link to="/detail-blog" className="read-more">Read more...</Link>
      </div>
    </div>
  )
}

export default BlogItem
