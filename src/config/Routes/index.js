import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register, Login, MainApp, CreateBlog, DetailBlog, Home } from '../../pages'


function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} >
          <Route path="/" element={ <Home /> } />
          <Route path="/create-blog" element={ <CreateBlog /> } />
          <Route path="/detail-blog" element={ <DetailBlog /> } />
        </Route>
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AllRoutes;
