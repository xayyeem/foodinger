import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validate = (e) => {
    e.preventDefault();

    let errors = [];

    if (formData.name.length < 5) {
      errors.push("Please Enter a valid Name");
    }
    if (formData.subject.length < 10) {
      errors.push("Please Enter a Correct Subject");
    }
    if (isNaN(formData.phone) || formData.phone.length !== 10) {
      errors.push("Please Enter a valid Phone Number");
    }
    if (formData.email.indexOf("@") === -1 || formData.email.length < 6) {
      errors.push("Please Enter a valid Email");
    }
    if (formData.message.length <= 40) {
      errors.push("Please Enter More Than 40 Characters");
    }

    if (errors.length > 0) {
      setErrorMessage(errors.join("<br>"));
    } else {
      alert("Form Submitted Successfully!");
      setErrorMessage("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="body2">
        <div className="wrapper">
          <h2>Contact us</h2>
          <div id="error_message" >
            {errorMessage}
          </div>
          <form onSubmit={validate}>
            <div className="input_field">
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <textarea
                placeholder="Message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="btns">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
