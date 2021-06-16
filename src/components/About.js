import React,{lazy,Suspense} from 'react';
import '../styles/About.scss'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const NavBar2 = lazy(()=> import('./NavBar2.js'));


export default function About() {

    const pageWidth=()=>{
      if(window.innerWidth<=1400){
          return 0.90*window.innerWidth
      }
      else return 0.4* window.innerWidth
    }
 
  
    return (
        <>
        <Suspense fallback={<div className="home--loading">LOADING<Spinner animation="border" variant="light"  role="status" style={{fontSize:'16px'}}/></div>}>
            <NavBar2/>
        </Suspense>
        <div className="about__main--container">
            <div className="about__content-container">
                <Document renderMode="canvas" className="about--pdf-container" file={process.env.PUBLIC_URL + '/myCV.pdf'} >
                <div className="about--info-header">My CV</div>
                    <Page pageNumber={1} width={pageWidth()} className="about--pdf-page"/>
                    <a href={process.env.PUBLIC_URL + '/myCV.pdf'} download="Gunner-Andersen-CV.pdf" className="about--download-button">DOWNLOAD</a>
                </Document>

                
                    <div className="about--info-container">
                        <div className="about--info-header">About Me</div>
                        <div className="about--info-text">I started studying a bachelor's degree on Mechanical Engineering, after a bad year I needed a &lt;br/&gt;. <br/> So I took 2 years to work and refactor my life goals. <br/><br/>I then decided that I wanted to become a developer, I found that I had passion for it and I chose to get into it throughout a Bootcamp on web development by <a className="about--info-text-link" href="https://www.ironhack.com/"> Ironhack. </a><br/><br/>
                        I became a MERN fullstack developer, but I felt I wanted to learn more about programming, so I chosed to start a new degree online on Computer Science at <a className="about--info-text-link" href="https://www.uopeople.edu/programs/cs/degrees/computer-science-bachelor-degree-2/"> UOP.</a> to become a real hacker!<br/><br/>
                        I am very interested on the following topics:
                            <ul className="about--unorder-list">
                            <br></br>
                                <li className="about--unorder-list-element">Web development technology.</li>
                                <li className="about--unorder-list-element">Software development.</li>
                                <li className="about--unorder-list-element">Blockchain technology.</li>
                                <li className="about--unorder-list-element">Penetration Testing.</li>
                                <li className="about--unorder-list-element">Artificial Inteligence.</li>
                            </ul>
                        <br/><br/>If you compiled all the way down to this line, let me say thank you for reading!
                        </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
