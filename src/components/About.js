import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import NavBar from './NavBar';
import myCV from '../myCV.pdf'
import '../styles/About.scss'


export default function About() {

    const pageWidth=()=>{
      if(window.innerWidth<=1400){
          return 0.90*window.innerWidth
      }
      else return 0.4* window.innerWidth
    }
 
  
    return (
        <div className="about__main--container">
             <div className="about--navbar"><NavBar /></div>
                <Document renderMode="canvas" className="about--pdf-container" file="%PUBLIC_URL%/myCV.pdf">
                    <Page pageNumber={1} width={pageWidth()} className="about--pdf-page"/>
                    <a href="%PUBLIC_URL%/myCV.pdf" download="Gunner-Andersen-CV.pdf" className="about--download-button">DOWNLOAD</a>
                </Document>

                <div className="about--info-container">
                    <div className="about--info-header">About Me!</div>
                    <div className="about--info-text">I started studying a bachelor's degree on Mechanical Engineering, after a bad year I needed a &lt;br/&gt;. <br/> So I took 2 years to work and refactor my life goals. <br/><br/>I then decided that I wanted to become a developer, I found that I had passion for it and I chose to get into it throughout a Bootcamp on web development by <a className="about--info-text-link" href="https://www.ironhack.com/"> Ironhack. </a><br/><br/>
                    I became a MERN fullstack developer, but I felt I wanted to learn more about programming, so I chosed to start a new degree online on Computer Science at <a className="about--info-text-link" href="https://www.uopeople.edu/programs/cs/degrees/computer-science-bachelor-degree-2/"> UOP.</a> to become a real hacker!<br/><br/>
                    I am very interested on the following topics:
                    <ul>
                        <li>Web development technology.</li>
                        <li>Software development.</li>
                        <li>Blockchain technology.</li>
                        <li>Penetration Testing.</li>
                        <li>Artificial Inteligence.</li>
                    </ul>
                    <br/><br/> If you compiled all the way down to this line, let me say thank you for reading!
                    </div>
                </div>
        </div>
    )
}
