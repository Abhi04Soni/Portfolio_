import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import chatappImg from '../assets/chatapp.png'

export default function Projects() {
  return (
      <div className='projectContainer'>
          <h1>My Projects</h1>
      <ProjectCard src={chatappImg} title={"React Realtime messaging app"} desc={"A unique way to chat"} />
      <ProjectCard src={chatappImg} title = {"Notes App"} desc={"A unique way to take notes"} />
    </div>
  )
}
