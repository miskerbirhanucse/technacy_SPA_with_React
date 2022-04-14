import React, { useState } from "react";
import { images } from "./../../constants/index";
import "./contact_us.scss";
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: "contact",
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // client
    //   .create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
    setTimeout(
      function () {
        //Start the timer
        setLoading(false); //After 1 second, set render to true
        setIsFormSubmitted(true);
      }.bind(this),
      2000
    );
  };
  return (
    <div id="contact" className="app__contact">
      <div className="app__contact-left">
        <div className="app__contact-content">
          <h2 className="text-head">Let's get in touch</h2>
          <p>Addis Ababa, Ethiopia</p>
          <p>Email:</p>
          <h5>Phone number:</h5>
        </div>
        <div className="app__contact-social">
          <a href="#">
            <img
              className="app__contact-facebook"
              src={images.facebook}
              alt="facebook"
              srcset=""
              width="35px"
            />
          </a>
          <a href="#">
            <img
              className="app__contact-twitter"
              src={images.twitter}
              alt="twitter"
              srcset=""
              width="35px"
            />
          </a>
          <a href="#">
            <img
              className="app__contact-telegram"
              src={images.telegram}
              alt="telegram"
              srcset=""
              width="35px"
            />
          </a>
          <a href="#">
            <img
              className="app__contact-instagram"
              src={images.instagram}
              alt="instagram"
              srcset=""
              width="35px"
            />
          </a>
          <a href="#">
            <img
              className="app__contact-linkedin"
              src={images.linkedin}
              alt="linkedin"
              srcset=""
              width="35px"
            />
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
