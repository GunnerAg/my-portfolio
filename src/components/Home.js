import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.scss'

const IMAGES = [
    {
        id: 0,
        url:
        'https://res.cloudinary.com/gunnerag/image/upload/f_auto/v1623404015/Kali_mkikjb.png'
      },
 
]

export default function Home() {
    

    let [introduction, setIntro] = useState('');
    let [fakeNav, setNav] = useState(true);
    let [introduction2, setIntro2] = useState('');
    let [mongo, setMongo] = useState('');
    let [express, setExpress] = useState('');
    let [react, setReact] = useState('');
    let [node, setNode] = useState('');
    let [display, setDisplay] = useState([true,false,false,false,false,false]);
    let [imgsLoaded, setImgsLoaded] = useState(false);



    useEffect(() => {

        const loadImage = image => {
            return new Promise((resolve, reject) => {
              const loadImg = new Image()
              loadImg.src = image.url
              // wait 2 seconds to simulate loading time
              loadImg.onload = () =>resolve(image.url)
              loadImg.onerror = err => reject(err)
            })
          }
      
          Promise.all(IMAGES.map(image => loadImage(image)))
            .then(() => setImgsLoaded(true))
            .catch(err => console.log("Failed to load images", err))

        let introductionArr= Array.from("Hi there, I'm Gunner Andersen, a MERN web developer and Computer Science Bachelor's degree student.");
        let introduction2Arr= Array.from("What is the MERN stack? It is the set of frameworks, environments and libraries I use to build the front-end and the back-end of web apps.");
        let mongoArr=Array.from('MongoDB');
        let expressArr=Array.from('Express');
        let reactArr=Array.from('ReactJS');
        let nodeArr=Array.from('NodeJS');


        const changeTxt0=(i)=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setIntro(introduction=introductionArr.slice(0,i).join(''))
        }

        const changeTxt01=(i)=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setIntro2(introduction2=introduction2Arr.slice(0,i-97).join(''))
        }

        const changeTxt1=(i)=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setMongo(mongo=mongoArr.slice(0,i-235).join(''))
        }

        const changeTxt2=(i)=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setExpress(express=expressArr.slice(0,i-242).join(''))
        }

        const changeTxt3=(i)=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setReact(react=reactArr.slice(0,i-249).join(''))
        }

        const changeTxt4=(i)=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setNode(node=nodeArr.slice(0,i-257).join(''))
        }
 
        for (let i=0; i<=264; i++) {
            if(imgsLoaded===true){task(i)}
        }
 
        function task(i) {
         setTimeout(function() {
             if(i<100){changeTxt0(i)}
             else if(i<236){setDisplay([false,true,false,false,false,false]);changeTxt01(i)}
             else if(i<243){setDisplay([false,false,true,false,false,false]);changeTxt1(i)}
             else if(i<250){setDisplay([false,false,false,true,false,false]);changeTxt2(i)}
             else if(i<257){setDisplay([false,false,false,false,true,false]);changeTxt3(i)}
             else if(i>=257){setDisplay([false,false,false,false,false,true]);changeTxt4(i)}
         }, 50 * i);
        } 
    }, [imgsLoaded])


    const ChangeNavBar=()=>{
        setTimeout(() => {
            setNav(false)
        }, 2000);
    }

    ChangeNavBar()

   const StackContainer=()=>{
       return(
        <div className="home__introduction--stack-container">
            <ul className="home__introduction--stack-list">
                <li className="home__introduction--list-element">
                    <div className="home__introduction--list-element-animated">
                        <div className={display[0]||display[1]? "home__introduction--list-element-icon-hide": "home__introduction--list-element-icon"}>
                            <a href="https://www.mongodb.com/"><img className="home__introduction--list-element-icon-container" src="/Mongo.png" alt=""/></a>
                        </div>
                        &nbsp;
                        <div className="home__introduction--list-element-bar" >{mongo}</div>
                        <div className={display[2]? "home__introduction--list-element-bar letters": "home__introduction--list-element-bar-none"}>|</div>
                    </div>
                </li>
                <li className="home__introduction--list-element">
                    <div className="home__introduction--list-element-animated">
                        <div className={display[0]||display[1]||display[2]? "home__introduction--list-element-icon-hide": "home__introduction--list-element-icon"}>
                            <a href="https://expressjs.com/" ><img className="home__introduction--list-element-icon-container express" src="/Express.png" alt=""/></a>
                        </div>
                        &nbsp;
                        <div className="home__introduction--list-element-bar" >{express}</div>
                        <div className={display[3]? "home__introduction--list-element-bar letters": "home__introduction--list-element-bar-none"}>|</div>
                    </div>
                </li>
                <li className="home__introduction--list-element">
                    <div className="home__introduction--list-element-animated">
                        <div className={display[0]||display[1]||display[2]||display[3]? "home__introduction--list-element-icon-hide": "home__introduction--list-element-icon"}>
                            <a href="https://es.reactjs.org/"><img className="home__introduction--list-element-icon-container" src="/React.png" alt=""/></a>
                        </div>
                        &nbsp;
                        <div className="home__introduction--list-element-bar" >{react}</div>
                        <div className={display[4]? "home__introduction--list-element-bar letters": "home__introduction--list-element-bar-none"}>|</div>
                    </div>
                </li>
                <li className="home__introduction--list-element">
                    <div className="home__introduction--list-element-animated">
                        <div className={display[0]||display[1]||display[2]||display[3]||display[4]? "home__introduction--list-element-icon-hide": "home__introduction--list-element-icon"}>
                            <a href="https://nodejs.org/"><img className="home__introduction--list-element-icon-container" src="/Node.png" alt=""/></a>
                        </div>
                        &nbsp;
                        <div className="home__introduction--list-element-bar" >{node}</div>
                        <div className={display[5]? "home__introduction--list-element-bar letters": "home__introduction--list-element-bar-none"}>|</div>
                    </div>
                </li>
            </ul>
        </div>
       )
   
   }

    return (
        <>
        {imgsLoaded ?
        <div className="home__container" style={{backgroundImage:`url(${IMAGES[0].url})`, minHeight:'100vh'}}>
            <div className="home__kali--icons">
                <div className="home__kali--icons-bar"></div>
                <div className="home__kali--icons-square"></div>
                <div className="home__kali--icons-cross">X</div>
            </div>
            <div className="home__kali--user">gunner@kali:~</div>
            <br/><br/>
            <div className="home__kali--navBar">
               
                    {fakeNav? <div className="navBar__link-fake navBlink">File</div>:
                    <Link to='/' className="navBar__link">
                        <div>Home</div>
                    </Link>}
               
                    {fakeNav? <div className="navBar__link-fake navBlink">Actions</div>:
                    <Link to='/projects' className="navBar__link">
                        <div>Projects</div>
                    </Link>}
               
                
                    {fakeNav? <div className="navBar__link-fake navBlink">Edit</div>:
                    <Link to='/about' className="navBar__link">
                        <div>About</div>
                    </Link>}
               
                
                    {fakeNav? <div className="navBar__link-fake navBlink" >View<div style={window.innerWidth>1024? {display:'inline', marginLeft: '45px'}:{display:'inline', marginLeft: '10px'}}>Help</div></div>:
                    <Link to='/contact' className="navBar__link">
                        <div>Contact</div>
                    </Link>}
                
            </div>
            <br/><br/>
            <div className="home__introduction">

                <div className="home__introduction--header">
                <div className="home__introduction--red-text">gunner@kali</div>:<div className="home__introduction--blue-text">~</div>$ {introduction}
                <div className={display[0]? "home__introduction--list-element-bar letters": "home__introduction--list-element-bar-none"}>|</div>
                <br/><br/>
                {introduction2}
                <div className={display[1]? "home__introduction--list-element-bar letters": "home__introduction--list-element-bar-none"}>|</div>
                </div>   
                <StackContainer/>
            </div>
            <div>

            </div>


        </div>
        :
        <div className="home--loading">
        LOADING
        <Spinner animation="border" variant="light"  role="status" style={{fontSize:'16px'}}/>
        </div>}
        </>
    )
}
