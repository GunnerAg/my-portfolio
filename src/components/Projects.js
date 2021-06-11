import React,{useState} from 'react'
import NavBar from './NavBar'
import '../styles/Projects.scss'




export default function Projects() {

    let [hover, setHover] = useState({slcocilux:false,theVault:false,nftERC:false,jobber:false,});

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

    console.log(isTouchDevice())


    
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
                        <div className="projects__grid--unit slcocilux hover white" ></div>
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

                    ></div>
                }

                
                <div className="projects__grid--unit-title">NFT ERC-721</div>
                {hover.nftERC? 

                    <div className="projects__grid--unit-container"  id="nftERC"  
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    >
                    <div className="projects__grid--unit nftERC hover white"></div>
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
                    ></div>
                }

                <div className="projects__grid--unit-title">The Vault</div>
                {hover.theVault? 
                    <div className="projects__grid--unit-container" id="theVault"  
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                    >
                        <div className="projects__grid--unit theVault hover white"></div>
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
                    ></div>
                }
                
                <div className="projects__grid--unit-title">Jobber</div>
                {hover.jobber? 
                    <div className="projects__grid--unit-container" id="jobber" 
                    onClick={isTouchDevice()? (e)=>handleClicked(e): undefined} 
                    onMouseEnter={isTouchDevice()? undefined:(e)=>handleMouseIn(e)} 
                    onMouseLeave={isTouchDevice()? undefined:(e)=>handleMouseOut(e)}
                        
                    >
                    <div className="projects__grid--unit jobber hover white"></div>
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
                    ></div>
                }
                
            </div>
        )
    };

    return (
        <div className="projects__main--background">
            <div className="projects--navbar"><NavBar/></div>
            <div className="projects__main--container">Projects</div>
            <ProjectsGrid/>
        </div>
    )
}
