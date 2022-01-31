import React from 'react'
import './blogitem.scss'
import { Link } from 'react-router-dom'

const BlogItem = ({ thumbnail, author, title, content }) => {
  return (
    <div className="blog-container">
      <div className="blog-thumb">
        <img src={thumbnail} alt="Thumbnail" />
      </div>
      <div className="blog-body">
        <div className="blog-title"><h2>{ title }</h2></div>
        <div className="blog-author">Author: { author }</div>
        <div className="blog-desc"><p>{ content }</p></div>
        <Link to="#">Read more...</Link>
      </div>
    </div>
  )
}

export default BlogItem
