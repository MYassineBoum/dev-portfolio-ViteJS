import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <div className="general">
        {/* <img src={} alt="me"> */}
          <span>
              <h3>Hi, my name is</h3>
              <h1>Mohammed<span>-</span>Yassine BOUMEHDI.</h1>
              <p>Innovate, Code, Deliver.</p>
          </span>
      </div>
      <div className="social">
        <a href="#" target="_blank"><button>Resume</button></a>
          <ul>    
            <li><a href="https://github.com/MYassineBoum" target="_blank"><i className="bi bi-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/myassineboumehdi/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="https://myboum.me/" target="_blank"><i className="bi bi-globe"></i></a></li>
          </ul>
      </div>
    </>
  )
}

export default Home