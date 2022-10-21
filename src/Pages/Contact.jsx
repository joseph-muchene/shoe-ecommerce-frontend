import React, { useRef, useState } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    console.log("executed");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzrbj4f",
        "template_nubfy69",
        form.current,
        "r1CeJaPEd7Smx1wMZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setSuccess(!success);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Navbar />
      <Banner />

      <section class="mb-4 container">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        {success && (
          <p className="text-center my-2 text-primary h4">
            Your email was sent!{" "}
          </p>
        )}

        <div class="row">
          <div class="col">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              name="contact-form"
              className="container"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="user_email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <div class="text-center text-md-left">
                <button class="btn btn-primary">Send</button>
              </div>
            </form>

            <div class="status"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;