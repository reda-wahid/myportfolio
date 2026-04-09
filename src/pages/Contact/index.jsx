import React from "react";
import HeadingComp from "../../components/HeadingComp";
import { NavLink } from "react-router";
import { ContactUs } from "../SendMail";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Contact() {
    AOS.init( {
      duration: 2000,
    });
  const data = [
    {
      id: 1,
      title: "Email",
      icon: "image/mail.png",
      supDes: "redawahid00@gmail.com",
      link: "mailto:redawahid00@gmail.com",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: "image/linked.png",
      supDes: "Content on LinkedIn",
      link: "https://www.linkedin.com/in/reda-wahid-39907220b/",
    },
    {
      id: 3,
      title: "GitHub",
      icon: "image/github-send.png",
      supDes: "See GitHub",
      link: "https://github.com/reda-wahid",
    },
    {
      id: 4,
      title: "WhatsApp",
      icon: "image/phone-call.png",
      supDes: "Chat on WhatsApp",
      link: "https://wa.me/2010125192832",
    },
  ];
  return (
    <section id="Contact">
      <div className="text-white pt-16 p-4 max-w-full lg:min-h-[100vh]  mx-auto">
        <div className="head text-center " data-aos="fade-up">
          <HeadingComp title={"Let's"} ing={"Connect"} />
          <p className="text-lg text-primary leading-7">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>
        <div className="Contact-group xl:flex justify-between gap-12 pt-4" >
          <div className="send-social  min:w-[50%] mb-4">
            <h1>Get in Touch</h1>
            <p>
              I'm always open to discussing new opportunities, creative ideas,
              or ways to be part of your vision. Feel free to reach out through
              any of the channels below.
            </p>

            {data.map((item) => (
              <NavLink
              data-aos="fade-right"
                key={item.id}
                to={item.link}
                className="card border-[1px]  border-secondary  hover:scale-105 duration-300 transition-all bg-secondary bg-opacity-5 h-20 my-4 flex justify-between p-4 rounded-2xl hover:shadow-[1px_1px_5px_4px_rgba(255,255,255,.2)] "
                target="_blank"
              >
                <div className="flex gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 hover:text-red-800"
                  />
                  <div>
                    <h1 className="text-primary">{item.title}</h1>
                    <p>{item.supDes}</p>
                  </div>
                </div>
                <img
                  src="image/arrow.png"
                  alt="arrow"
                  className="w-10 p-2"
                />
              </NavLink>
            ))}
            <p>Based in Egypt, open to remote work</p>
          </div>
          <div className="send-email w-[100%]" data-aos="slide-left">
           <ContactUs/>
          </div>
        </div>
      </div>
    </section>
  );
}
