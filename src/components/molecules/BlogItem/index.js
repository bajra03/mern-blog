import React from 'react'
import './blogitem.scss'

const BlogItem = () => {
  return (
    <div className="blog-container">
      <div className="blog-thumb">Thumb</div>
      <div className="blog-body">
        <div className="blog-author">Author</div>
        <div className="blog-title"><h2>Blog Title</h2></div>
        <div className="blog-desc"><p>Blog excerpt</p></div>
      </div>
    </div>
  )
}

export default BlogItem
