import React from 'react'
import { RegisterBg2 } from '../../assets'
import './detailBlog.scss'

const DetailBlog = () => {
  return (
    <div className="blog-detail-page">
      <img src={RegisterBg2} alt="Thumbnai" />
      <h3>Post Title</h3>
      <span>Atuhor - Date Posted</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque.</p>
    </div>
  )
}

export default DetailBlog
