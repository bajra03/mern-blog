import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss';
// import { DummyBlog } from '../../assets';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from 'react-redux';

function Home() {
  const [dataBlog, setDataBlog] = useState([]);
  const stateGlobal = useSelector(state => state);
  console.log('state global: ', stateGlobal);

  const url = 'http://localhost:4000/v1/blog/post';
  useEffect(() => {
    Axios.get(url)
      .then(result => {
        // console.log('Data API: ', result.data.data);
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
        {dataBlog.map(blogPost => {
          return <BlogItem
            key={blogPost._id}
            image={`http://localhost:4000/${blogPost.image}`}
            title={blogPost.title}
            author={blogPost.author.name}
            date={blogPost.createdAt}
            body={blogPost.body} />
        }) }
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
