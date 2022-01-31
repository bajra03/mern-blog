import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss';
import { DummyBlog } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <div className="create-blog-wrapper">
        <Button title="Create Blog" onClick={() => navigate('/create-blog')} />
      </div>
      <div className="blog-wrapper">
        <BlogItem thumbnail={ DummyBlog } title="Blog 1" author="Bajra" date="01 Jan 2022" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque."/>
        <BlogItem thumbnail={ DummyBlog } title="Blog 2" author="Bajra" date="01 Jan 2022" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque." />
        <BlogItem thumbnail={ DummyBlog } title="Blog 3" author="Bajra" date="01 Jan 2022" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque." />
      </div>
      <div className="pagination-wrapper">
        <Button title="Prev" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
    </div>
  )
}

export default Home
