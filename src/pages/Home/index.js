import React from 'react'
import { BlogItem } from '../../components'
import './home.scss'

function Home() {
  return (
    <div className="blog-container">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  )
}

export default Home
