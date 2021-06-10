import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.scss'

export default function Home() {
    

    let [introduction, setIntro] = useState('');
    let [fakeNav, setNav] = useState(true);
    let [introduction2, setIntro2] = useState('');
    let [mongo, setMongo] = useState('');
    let [express, setExpress] = useState('');
    let [react, setReact] = useState('');
    let [node, setNode] = useState('');
    let [display, setDisplay] = useState([true,false,false,false,false,false]);

    useEffect(() => {
        let introductionArr= Array.from("Hi there, I'm Gunner Andersen, a MERN web developer and Computer Science Bachelor's degree student.");
        let introduction2Arr= Array.from("What is the MERN stack? It is the set of frameworks, environments and libraries I use to build the front-end and the back-end of web apps.");
        let mongoArr=Array.from('MongoDB');
        let expressArr=Array.from('Express');
        let reactArr=Array.from('ReactJS');
        let nodeArr=Array.from('NodeJS');

        console.log('INTRO',introductionArr.length)
        console.log('INTRO2',introduction2Arr.length)
        console.log('MONGO',mongoArr.length)
        console.log('EXPRESS',expressArr.length)
        console.log('REACT',reactArr.length)
        console.log('NODE',nodeArr.length)

        const changeTxt0=(i)=>{
            setIntro(introduction=introductionArr.slice(0,i).join(''))
        }

        const changeTxt01=(i)=>{
            setIntro2(introduction2=introduction2Arr.slice(0,i-97).join(''))
        }

        const changeTxt1=(i)=>{
            setMongo(mongo=mongoArr.slice(0,i-235).join(''))
        }

        const changeTxt2=(i)=>{
            setExpress(express=expressArr.slice(0,i-242).join(''))
        }

        const changeTxt3=(i)=>{
            setReact(react=reactArr.slice(0,i-249).join(''))
        }

        const changeTxt4=(i)=>{
            setNode(node=nodeArr.slice(0,i-257).join(''))
        }
 
        for (let i=0; i<=264; i++) {
            task(i);
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
    }, [])

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
        <div className="home__container" style={{backgroundImage: 'url(/Kali.png)', minHeight: window.innerHeight}}>
            <div className="home__kali--icons">
                <div className="home__kali--icons-bar"></div>
                <div className="home__kali--icons-square"></div>
                <div className="home__kali--icons-cross">X</div>
            </div>
            <div className="home__kali--user">gunner@kali:~</div>
            <br/><br/>
            <div className="home__kali--navBar">
               
                    {fakeNav? <div className="navBar__link navBlink">File</div>:
                    <Link to='/' className="navBar__link">
                        <div>Home</div>
                    </Link>}
               
                    {fakeNav? <div className="navBar__link navBlink">Actions</div>:
                    <Link to='/projects' className="navBar__link">
                        <div>Projects</div>
                    </Link>}
               
                
                    {fakeNav? <div className="navBar__link navBlink">Edit</div>:
                    <Link to='/about' className="navBar__link">
                        <div>About</div>
                    </Link>}
               
                
                    {fakeNav? <div className="navBar__link navBlink" >View<div style={window.innerWidth>1024? {display:'inline', marginLeft: '45px'}:{display:'inline', marginLeft: '10px'}}>Help</div></div>:
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
    )
}
