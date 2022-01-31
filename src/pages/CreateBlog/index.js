import React from 'react'
import { Button, Gap, Input, Textarea, Upload } from '../../components'

const CreateBlog = () => {
  return (
    <div className="create-blog-page">
      <h1>Create new Blog Post</h1>
      <Input label="Input Title" />
      <Upload label="Upload Image" />
      <Textarea placeholder="The content" />
      <Gap height={20} />
      <Button title="Save" />
    </div>
  )
}

export default CreateBlog
