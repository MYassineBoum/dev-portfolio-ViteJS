import React from 'react'
import './Home.css'
import { Download } from 'react-bootstrap-icons';
import * as Icon from 'react-bootstrap-icons';

function Home() {
  return (
    <>
      <div className="first-zone">
        <h1>Hi<span>,</span> I'm Mohammed<span>-</span>Yassine<br />BOUMEHDI<span>.</span></h1>
        <h2>Software Engineer<span>,</span><br />Competitive Programme<span>,</span><br />DevOps <span>&</span> Cloud Enthusiast<span>.</span></h2>
        <button>Resume <span><Icon.Download /></span></button>
      </div>
      <div className="second-zone">
        <div className="image-container">
          <img src="Capture.PNG" alt="Personal photo." />
          <span className="highlight-line-h"></span>
          <span className="highlight-line-v"></span>
        </div>
      </div>
    </>
  )
}

export default Home