import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import chatappImg from '../assets/chatapp.png'
import notesImg from '../assets/notes.png'
import calcImg from '../assets/calc.png'
import commingSoonImg from '../assets/come.png'

export default function Projects() {
  return (
      <div className='projectContainer'>
      <h1>My Projects</h1>
      <div className="projects">
      <ProjectCard src={commingSoonImg} title={"Ecom Web Scrapper"} desc={"A app which allows the user to search for a particualr product on multiple sites"} />
      <a href="https://react00chat00app.netlify.app/" target='_blank'><ProjectCard src={chatappImg} title={"React messaging app"} desc={"A unique way to chat"} /></a>
      <a href="https://ornate-starship-e90145.netlify.app/" target='_blank'><ProjectCard src={notesImg} title = {"Notes App"} desc={"A Note taking app"} /></a>
      <a href="https://calcu-basic.netlify.app" target='_blank'><ProjectCard src={calcImg} title={"Calculator"} desc={"A app allows us to perform basic mathematical operations"} /></a>
      {/* <ProjectCard src={commingSoonImg} title={"Ecom Web Scrapper"} desc={"A app which allows the user to search for a particualr product on multiple sites"} /> */}
      </div>
    </div>
  )
}
