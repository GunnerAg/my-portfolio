import React,{useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Projects.scss'

const IMAGES = [
    {
        id: 0,
        url:
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622451678/4_IMAGEN_PRINCIPAL_1_cmdiez.png'
    },
    {
        id: 1,
        url:
        'https://res.cloudinary.com/gunnerag/image/upload/v1623420608/nftERC_ahrb0e.jpg'
    },
    {
        id: 2,
        url:
        'https://res.cloudinary.com/gunnerag/image/upload/v1623420607/theVault_puxtsk.png'
    },
    {
        id: 3,
        url:
        'https://res.cloudinary.com/gunnerag/image/upload/v1623420609/jobber_tvnayq.png'
    },
    {
        id: 4,
        url:
        'https://res.cloudinary.com/gunnerag/image/upload/v1623420610/jobber2_lxrc1e.png'
    },
]


export default function Projects() {

    let [imgsLoaded, setImgsLoaded] = useState(false);
    let [hover, setHover] = useState({slcocilux:false,theVault:false,nftERC:false,jobber:false,});

    useEffect(() => {
        const loadImage = image => {
            return new Promise((resolve, reject) => {
              const loadImg = new Image()
              loadImg.src = image.url
              loadImg.onload = () =>resolve(image.url)
              loadImg.onerror = err => reject(err)
            })
          }
      
          Promise.all(IMAGES.map(image => loadImage(image)))
            .then(() => setImgsLoaded(true))
            .catch(err => console.log("Failed to load images", err))
    }, [])

    function isTouchDevice() {
        return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
      }

    const handleClicked=(e)=>{
        if(hover[e.currentTarget.id]===false){
            console.log('HERE',hover)
            const hoverClone={...hover}
            delete hoverClone[e.currentTarget.id]
            let updatedState={};
            updatedState[e.currentTarget.id]=true;
            setHover(hover={...hoverClone,...updatedState})
        }
        else if(hover[e.currentTarget.id]===true){
            console.log('THERE',hover)
            const hoverClone={...hover}
            delete hoverClone[e.currentTarget.id]
            let updatedState={};
            updatedState[e.currentTarget.id]=false;
            setHover(hover={...hoverClone,...updatedState})
        }
    }

    const handleMouseIn=(e)=>{
        console.log('MOUSE EVENT')
        const hoverClone={...hover}
        delete hoverClone[e.currentTarget.id]
        let updatedState={};
        updatedState[e.currentTarget.id]=true;
        setHover(hover={...hoverClone,...updatedState})
    }

    const handleMouseOut =(e)=>{
        console.log('MOUSE EVENT')
        const hoverClone={...hover}
        delete hoverClone[e.currentTarget.id]
        let updatedState={};
        updatedState[e.currentTarget.id]=false;
        setHover(hover={...hoverClone,...updatedState})
    }
    
    const ProjectsGrid=()=>{
       
        return(
            <div className="projects__grid--container">

                <div className="projects__grid--unit-title">SL Cocilux</div>
                {hover.slcocilux?
                    <div className="projects__grid--unit-container" id="slcocilux" 
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    >
                        <div className="projects__grid--unit slcocilux hover white" style={{backgroundImage:`url(${IMAGES[0].url})`}}></div>
                        <div className="projects__grid--unit-description white">SL Cocilux is a kitchen design company based in Madrid, their web displays their catalog. It is build on ReactJS.
                        <br></br>
                        <a href="https://slcocilux.com/" className="projects__grid--unit-link white">WEBSITE</a>
                        <a href="https://github.com/GunnerAg/CociLux" className="projects__grid--unit-link white">GITHUB REPO</a>
                        </div>
                        
                    </div>
                    :
                    <div className="projects__grid--unit slcocilux" id="slcocilux" 
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    style={{backgroundImage:`url(${IMAGES[0].url})`}}
                    ></div>
                }

                
                <div className="projects__grid--unit-title">NFT ERC-721</div>
                {hover.nftERC? 

                    <div className="projects__grid--unit-container"  id="nftERC"  
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    >
                    <div className="projects__grid--unit nftERC hover white" style={{backgroundImage:`url(${IMAGES[1].url})`}}></div>
                        <div className="projects__grid--unit-description white">This is a simple example of a NFT ethereum token minting app, it works with metamask and ganache on localhost.
                        It was done using ReactJS, Solidity and Web3.
                        <br></br>
                        <a href="https://nft-erc-721.netlify.app/" className="projects__grid--unit-link white">WEBSITE</a>
                        <a href="https://github.com/GunnerAg/ERC721" className="projects__grid--unit-link white">GITHUB REPO</a>
                        </div>
                        
                    </div>
                    :
                    <div className="projects__grid--unit nftERC" id="nftERC"  
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    style={{backgroundImage:`url(${IMAGES[1].url})`}}
                    ></div>
                }

                <div className="projects__grid--unit-title">The Vault</div>
                {hover.theVault? 
                    <div className="projects__grid--unit-container" id="theVault"  
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    >
                        <div className="projects__grid--unit theVault hover white" style={{backgroundImage:`url(${IMAGES[2].url})`}}></div>
                        <div className="projects__grid--unit-description white">The Vault is a social network to share knowladge, find people by affinity, create and see events, as well as  share/store related docs! It is build on ReactJS, NodeJS and MongoDB.
                        <br></br>
                        <a href="https://the-vault-project.herokuapp.com/" className="projects__grid--unit-link white">WEBSITE</a>
                        <a href="https://github.com/GunnerAg/The-Vault-Project-" className="projects__grid--unit-link white">GITHUB REPO</a>
                        </div>
                        
                    </div>:
                    <div className="projects__grid--unit theVault" id="theVault" 
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    style={{backgroundImage:`url(${IMAGES[2].url})`}}
                    ></div>
                }
                
                <div className="projects__grid--unit-title">Jobber</div>
                {hover.jobber? 
                    <div className="projects__grid--unit-container" id="jobber" 
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                        
                    >
                    <div className="projects__grid--unit jobber hover white" style={window.innerWidth>=600?{backgroundImage:`url(${IMAGES[3].url})`}:{backgroundImage:`url(${IMAGES[4].url})`}}></div>
                        <div className="projects__grid--unit-description white">Jobber is a minimalist job search engine for companies and employees done with Handlebars, NodeJS and MongoDB. 
                        <br></br>
                        <a href="https://j0bber.herokuapp.com/" className="projects__grid--unit-link white">WEBSITE</a>
                        <a href="https://github.com/GunnerAg/Jobber-JobSearchEngine." className="projects__grid--unit-link white">GITHUB REPO</a>
                        </div>
                    
                    </div>:
                    <div className="projects__grid--unit jobber" id="jobber" 
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    style={window.innerWidth>=600?{backgroundImage:`url(${IMAGES[3].url})`}:{backgroundImage:`url(${IMAGES[4].url})`}}
                    ></div>
                }
                
            </div>
        )
    };

    return (
        <>
        {imgsLoaded ?
        
        
        <div className="projects__main--background">
            <div className="projects__main--container">
                <div className="contact__header"> 
                    <h5 className="contact__header-content">Projects</h5>
                </div>
            </div>
            <ProjectsGrid/>
        </div>:
        <div className="projects--loading">
        LOADING PROJECTS
        <Spinner animation="border" variant="light"  role="status" style={{fontSize:'16px'}}/>
        </div>
        }    
        </>
    )
}
