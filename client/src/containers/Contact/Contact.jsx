import React, { useState } from "react";

import "./Contact.css";

import { images } from "../../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      email: formData.email,
      message: formData.message,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="contact"
    >
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:micah.daise@nwktc.edu" className="p-text">
            micah.daise@nwktc.edu
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (785) 821-5077" className="p-text">
            +1 (785) 821-5077
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form method="POST" action="mailto: micah.daise@nwktc.edu">
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
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
            <a href={`mailto: micah.daise@nwktc.edu?cc=${email}&subject=&body=${message}`}>
              <button type="button" className="p-text" onClick={handleSubmit}>
                Send Message
              </button>
            </a>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default Contact;
