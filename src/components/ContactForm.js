import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import '../styles/ContactForm.scss'
require('dotenv').config();



export default function ContactForm({sendStatus,setFormStatus}) {

  const [formInputs,setFormValues]=useState({name:'',email:'',phone:'',message:''})

  const{
    REACT_APP_EMAILJS_USERID: userId,
    REACT_APP_EMAILJS_TEMPLATEID: templateId,
    REACT_APP_EMAILJS_SERVICEID: serviceId,
  }=process.env


  let handleChange=(e)=>{
    const{user_email,user_name,user_phone,message}=e.currentTarget;
    setFormValues({name:user_name.value,email:user_email.value,phone:user_phone.value,message:message.value})
 
  }

  function validateEmail(email) 
    {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        {
          return (true)
        }
          alert("El formato del email no parece valido!")
          return (false)
    }

  function validateNotEmpty(message) 
    {
      if (message.length===0)
        {
          alert("Introduce un mensaje que explique tu motivo de contacto")
          return (false)
        }
          return (true)
    }


  function sendEmail(e) {
    e.preventDefault();
    if(
      validateNotEmpty(formInputs['name'])&&
      validateEmail(formInputs['email'])&&
      validateNotEmpty(formInputs['message'])
    ){
      emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormStatus(sendStatus=true);
    }
  }

  return (
    <form className="contact__form" onSubmit={sendEmail} onChange={handleChange}>
      <label>Name</label>
      <input type="text" name="user_name" className="contact__form-input"/>
      <label>Email</label>
      <input type="email" name="user_email" className="contact__form-input"/>
      <label>Phone</label>
      <input type="text" name="user_phone" className="contact__form-input"/>
      <label>Your message</label>
      <textarea name="message" rows="6" className="contact__form-text--area"/>
      {sendStatus? 
        <button type="submit" value="Send" className="contact__form-button--dissable" disabled={true}> Message sent! </button>:
        <button type="submit" value="Send" className="contact__form-button--enable"> Send </button>
      }
    </form>
  );
}