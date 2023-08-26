import React, { useRef } from "react";

function Contact() {
  const subject = useRef();
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();

  const emailTemp = `Name: ${name.current}<br/>Email Address:${email.current}
  <br/>Phone Number: ${phone.current}<br/> <br/>
  ${message.current}`;
  const emailDetail = `mailto:support@codebeans.com.ng?subject=${subject.current}&body=${emailTemp}`;

  return (
    <section className="container" id="contact">
      <div className="contact">
        <h2 className="section--header">Contact Us</h2>
        <h3 className="section--subheader">Let us know how we can help</h3>
        <div className="contact--section">
          <div className="contact--image">&nbsp;</div>
          <form className="contact--form">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
              ref={subject}
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              required
              ref={name}
            />
            <div className="contact--form__1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
                ref={email}
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
                ref={phone}
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              ref={message}
            ></textarea>
            <a href={emailDetail}>Send</a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
