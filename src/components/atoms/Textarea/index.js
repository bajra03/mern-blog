import React from 'react'
import './textarea.scss'

function Textarea({...rest}) {
  return (
    <div>
      <textarea className="textarea" {...rest}></textarea>
    </div>
  )
}

export default Textarea
