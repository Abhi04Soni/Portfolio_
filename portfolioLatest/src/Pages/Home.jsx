import React from 'react'
import non from '../assets/non.png'
import { useNavigate } from 'react-router-dom'
import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'
// import profile from '../assets/profile.jpg'


export default function Home () {
  const navigate = useNavigate()
  return (
    <>
      <div className='homeContainer'>
        <div className='left'>
          <div className='line1'> Hi, I am Abhi Soni </div>
          <div className='line2'>A MERN Stack Developer</div>
          <div className='intro'>
            I'm a proficient MERN stack developer, and I'm currently seeking opportunities as a Software Development Engineer. Explore my portfolio to see
            my projects and feel free to get in touch. Let's turn digital dreams into reality.</div>
          <div className='buttons'>
            <button
              onClick={() => {
                navigate('/contact')
              }}
            >
              Contact Me
            </button>
            <div className='icons'>
              <a href="https://github.com/Abhi04Soni" target='_blank'><FaGithubSquare className='icon' /></a>
              <a href="https://www.linkedin.com/in/abhi-soni04/" target='_blank'><FaLinkedin className='icon'  /></a>
              <a href="https://www.instagram.com/_abhi04_soni/" target='_blank'><FaInstagram className='icon' /></a>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={non} alt='' />
        </div>
      </div>
    </>
  )
}
