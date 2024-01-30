import React from 'react';
import Nav from "../Component/Nav";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact_page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_325gotd', 'template_xt4rv7u', form.current, 'OUFjExamyWKiw3ZGc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };





  return (
    <>
      <Nav ul=''/> 
      <section className="contact-page">
        <div className="container">
          <div className="heading text-center">
            <h2>Contact <span> Us </span></h2>
            <p>Send for as anything you dont understant it or some ideas for add it on here<br />this website create it for help us </p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h3>Contact detail</h3>
                <p>We will contact white you on gmail , you need just check if you gmail correct  </p>
              </div>
              <div className="content">
                <div className="info">
                  <i className="fas fa-mobile-alt"></i>
                  <h4 className="d-inline-block">PHONE : <br /><span>+212 774270801</span></h4>
                </div>
                <div className="info">
                  <i className="far fa-envelope"></i>
                  <h4 className="d-inline-block">EMAIL : <br /><span>chadrissi22@gmail.com</span></h4>
                </div>
                <div className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4 className="d-inline-block">ADDRESS :<br /><span>Morocco , Marrakesh</span></h4>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-sm-6">
                    <input name="user_name" type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="col-sm-6">
                    <input name="user_email" type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-sm-12">
                    <input name="subject" type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-block" value="Send"  type="submit">Send Now!</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact_page;
