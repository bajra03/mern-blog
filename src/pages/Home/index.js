import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss';
import { DummyBlog } from '../../assets';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Home() {
  const [dataBlog, setDataBlog] = useState([]);
  const url = 'http://localhost:4000/v1/blog/post';
  useEffect(() => {
    Axios.get(url)
      .then(result => {
        console.log('Data API: ', result.data.data);
        const responseAPI = result.data;

        setDataBlog(responseAPI.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }, []);

  const navigate = useNavigate();
  

  return (
    <div className="home-page-container">
      <div className="create-blog-wrapper">
        <Button title="Create Blog" onClick={() => navigate('/create-blog')} />
      </div>
      <div className="blog-wrapper">
        {dataBlog.map(blog => {
          return <BlogItem key={blog._id} image={`${url}${blog.image}`} title={blog.title} author={blog.author.name} date={blog.createdAt} body={ blog.body } />
        }) }
        {/* <BlogItem thumbnail={ DummyBlog } title="Blog 1" author="Bajra" date="01 Jan 2022" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque."/>
        <BlogItem thumbnail={ DummyBlog } title="Blog 2" author="Bajra" date="01 Jan 2022" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque." />
        <BlogItem thumbnail={ DummyBlog } title="Blog 3" author="Bajra" date="01 Jan 2022" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque." /> */}
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
