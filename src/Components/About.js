import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="assets/about.jpeg" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">I'am SUSHMANTH REDDY </h2>
          <p className="about-text">
            studying my first year  at Amrita University[Electrical and Communicational Engineering] , Amritapuri located in India. I am a member at amfoss -
            a student developer club.I am an ambitious computer science engineer, an Competitive programming enthusiast, and a curious person to learn new things every day and
            improve myself. I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting
            the world through my work delightful.
                    </p>
          <p><b>Languages and tools known:</b> </p>
          <p> 
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png" alt='django'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/python/python.png" alt='python'/>
            <img className='tech-image' src="https://camo.githubusercontent.com/544426317a6c6226b7f6b3367232378ea367aa5001a41da4f302a77f9959909f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4769744875622d3333333333333f7374796c653d666c6174266c6f676f3d676974687562" alt="github" />
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code" />
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="git" />
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ubuntu/ubuntu.png" alt="ubuntu" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
