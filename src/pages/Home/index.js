import React from 'react'
import { BlogItem } from '../../components'
import './home.scss';
import { DummyBlog } from '../../assets';

function Home() {
  return (
    <div className="blogs">
      <BlogItem thumbnail={ DummyBlog } title="Blog 1" author="Bajra" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque."/>
      <BlogItem thumbnail={ DummyBlog } title="Blog 2" author="Bajra" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque." />
      <BlogItem thumbnail={ DummyBlog } title="Blog 3" author="Bajra" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor quis leo in facilisis. In posuere enim id eros mattis, eget convallis erat tincidunt. Donec id justo at est aliquet vestibulum. Praesent ut bibendum sem. Nam pharetra, mi vel tempor ullamcorper, leo lacus facilisis magna, quis posuere justo magna in neque." />
    </div>
  )
}

export default Home
