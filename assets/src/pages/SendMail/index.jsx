import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
export const ContactUs = () => {
  const form = useRef();
  const notify = () => toast("Thanks you for Contact Me");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g48xayr", "template_bg5rmvi", form.current, {
        publicKey: "B2qN6OtRJ2WraPS70",
      })
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col max-w-[100%] bg-secondary bg-opacity-5 w-full p-6 rounded-2xl text-primary gap-3 border-[1px] border-secondary"
    >
      <label>Your Name:</label>
      <input
        type="text"
        name="user_name"
        placeholder="User name"
        className="w-full bg-secondary bg-opacity-10 p-4 border-[1px] border-secondary rounded-2xl focus:shadow-[1px_1px_4px_2px_#C4DDF2] outline-none"
      />

      <label>Your Email:</label>
      <input
        type="email"
        name="user_email"
        placeholder="Your email"
        className="w-full bg-secondary bg-opacity-10 p-4 border-[1px] border-secondary rounded-2xl focus:shadow-[1px_1px_4px_2px_#C4DDF2] outline-none"
      />

      <label>Message</label>
      <textarea
        name="message"
        placeholder="Tell me about your project or what you want to discuss..."
        className="w-full h-40 resize-none bg-secondary bg-opacity-10 p-4 border-[1px] border-secondary rounded-2xl focus:shadow-[1px_1px_4px_2px_#C4DDF2] outline-none"
      />

      <div>
        <button
          onClick={notify}
          type="submit"
          className="w-full hover:scale-105 bg-gradient-to-r from-primary via-secondary to-main backdrop-blur-sm cursor-pointer px-5 py-2 text-white rounded-2xl"
        >
          Send Me
        </button>
        <ToastContainer position="top-center" />
      </div>
    </form>
  );
};
