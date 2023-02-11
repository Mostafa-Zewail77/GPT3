import React from 'react'
import "./possibility.css"
import possibilityImage from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id= 'possibility'>
      <div className='gpt3__possibility-img'>
        <img src={possibilityImage}  alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <p>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing.
          Not thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.</p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility
