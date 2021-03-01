import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_iDiqOf8BhyHq4vXcL0fz9";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Please fill out the form and add a short detailed message, I will
          contact you as soon as possible.
        </p>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
                <div className="line"></div>
              </div>
              {/* Phone Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              {/* Email Input */}
              <div className="text-center">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="line"></div>
              </div>
              {/* Subject Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description Input */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                ></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contacts-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
