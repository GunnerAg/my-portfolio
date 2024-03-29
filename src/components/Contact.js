import React,{lazy,Suspense,useState} from 'react';
import ContactForm from './ContactForm';
import '../styles/Contact.scss';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar2 = lazy(()=> import('./NavBar2.js'));

export default function Contact() {

    const [sendStatus,setFormStatus]=useState(false)

    return (
        <>
        <Suspense fallback={<div className="home--loading">LOADING<Spinner animation="border" variant="light"  role="status" style={{fontSize:'16px'}}/></div>}>
            <NavBar2/>
        </Suspense>
        <div className="contact__middle-bar"></div>
        <div className="contact">
        <div className="contact__inner-content">
            <div className="contact__details">
                <p className="contact__details-paragraph--one">You can find links to my networks below, or just send me an email and I would replay as soon as posible!</p>
                <ul className="contact__details-list">
                    <li className="contact__details-list--element">
                        <a href="https://wa.me/34698162574" target="_blank">
                            <img className="contact__details-logo" src="https://res.cloudinary.com/gunnerag/image/upload/f_auto/v1623576699/whatsapp_fvvncl.png" alt="Whatsapp"/>
                        </a>
                         &nbsp;
                        <div className="contact__details-list--bold">+34 698 16 25 74</div>
                    </li>
                    <li className="contact__details-list--element">
                        <a href="https://github.com/GunnerAg" target="_blank">
                            <img className="contact__details-logo" src="https://res.cloudinary.com/gunnerag/image/upload/f_auto/v1623576879/GitHub_mukrtc.png" alt="GitHub"/>
                        </a>
                        &nbsp;
                        <div className="contact__details-list--bold">GitHub</div>
                    </li>
                    <li className="contact__details-list--element">
                        <a href="https://www.linkedin.com/in/gunnerandersengil" target="_blank">
                            <img className="contact__details-logo" src="https://res.cloudinary.com/gunnerag/image/upload/f_auto/v1623576698/LinkedIn_n4qnvz.png" alt="LinkedIn"/>
                        </a>
                        &nbsp;
                        <div className="contact__details-list--bold">LinkedIn</div>
                    </li>
                    <li className="contact__details-list--element">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=@gunner.andersen.gil@gmail.com" target="_blank">
                            <img className="contact__details-logo" src="https://res.cloudinary.com/gunnerag/image/upload/f_auto/v1623576697/gmail_ijo9wd.png" alt="Gmail"/>
                        </a>
                        &nbsp;
                        <div className="contact__details-list--bold">@gunner.andersen.gil@gmail.com</div>
                    </li>
                </ul>
            
            </div>
            <div className="contact__form-container">
                {sendStatus? 
                        <div className="contact__details--sent"> 
                        Message sent successfully,<br/>
                        I would reply soon! 
                        </div>
                        :
                        <ContactForm sendStatus={sendStatus} setFormStatus={setFormStatus}/>
                }
            </div>
        </div>
        </div>
        </>
    )
}
