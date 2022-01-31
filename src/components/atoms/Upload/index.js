import React from 'react'
import { DummyBlog } from '../../../assets'
import './upload.scss'

function Upload({label}) {
  return (
    <div className="upload-group">
      <img src={DummyBlog} alt="Preview" width={200} height={200} />
      <label>{label}</label>
      <input type="file" />
    </div>
  )
}

export default Upload
