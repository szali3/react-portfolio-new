import "../contact/contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] =  useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yrir1fl', 
        'template_4mcsnx2', 
        formRef.current, 
        'user_w9v51BMb62zloXZ3naPTm')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="c">
      <div className="c-bg"> </div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact me</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon"/>
                647-995-8509
              </div> 
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon"/>
                s.zohaibali3@gmail.com
              </div> 
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon"/>
                Toronto, Ontario
              </div> 
            </div> 
          </div>
          <div className="c-right">
          <p className="c-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, vel voluptates placeat ab illum expedita tempora nisi quod debitis dolorum natus dignissimos accusantium maxime. Id quasi rerum officia tenetur corporis?
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
          {/* <form> */}
            <input style={{backgroundColor: darkMode && "#333", color:darkMode  && "white"}} type="text" placeholder="Name" name="user_name"  />
            <input style={{backgroundColor: darkMode && "#333", color:darkMode  && "white"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333", color:darkMode  && "white"}} type="text" placeholder="Email" name="user_email"  />
            <textarea style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} rows="5" placeholder="Message" name="message" />
            <button> Submit </button>
            {done && "Thank you for contacting"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;