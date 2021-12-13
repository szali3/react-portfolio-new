import "../contact/contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from "react";
// import emailjs from 'emailjs-com';

const Contact = () => {

  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
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
            <input type="text" placeholder="Name" name="user_name"  />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email"  />
            <textarea rows="5" placeholder="Message" name="message" />
            <button> Submit </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;