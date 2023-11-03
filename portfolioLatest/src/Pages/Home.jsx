import React from 'react'
import Image from '../assets/Img.jpg'

export default function Home () {
  return (
    <div className='homeContainer'>
          <div className='left'>
              <div className="line1"> Hi, I am Abhi Soni </div>
              <div className="line2">A MERN Stack Developer</div>
              <div className="intro">I am a MERN Stack Developer and I am activily looking for opporrtunities in the field of Software Development</div>
              <div className="buttons">
                  <button>Contact Me</button>
                  
              </div>

              
      </div>
          <div className='right'>
              <img src={Image} alt="" />
              
      </div>
    </div>
  )
}
