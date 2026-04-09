import React from "react";
import { NavLink } from "react-router";
import HeadingComp from "../../components/HeadingComp";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Typewriter } from "react-simple-typewriter";
import { scroller } from "react-scroll";

export default function Home() {
    AOS.init( {
      duration: 1500,
    });
  AOS.init();
    const handleScroll = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 200,
      offset: -40,
    });
  };
  return (
    <>
      <section id="Home">
        <div className="p-4  mx-auto gap-20 text-white max-w-full md:min-h-[100vh] flex-wrap-reverse flex md:flex-nowrap md:pt-28 pt-14 md:items-center md:justify-center ">
          <div className="hero-main" data-aos="slide-right">
            <HeadingComp title={"Hi, Iam"} ing={"Reda Wahid"} />
             <Typewriter
             
            words={['Front-End Developer', 'SoftWare Enginering']}
            loop="true"
            size="20"
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            
            <p>
              Building Modern, Fast & Responsive Web Experiences. Passionate
              about creating beautiful interfaces with clean code and
              exceptional user experiences..
            </p>
            <div>
              <div className="btn-hero flex-wrap flex gap-5 mt-5 ">
                <NavLink to="/Project">
                  <div className="ing-btn flex gap-3 hover:scale-110 transition-all duration-300">
                    Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                    >
                      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                  </div>
                </NavLink>
                <NavLink
                  to="https://docs.google.com/document/d/1GVaVY1re1FyFhl_at38cABPY9meI1RX7mhg051pLE4w/edit?usp=sharing"
                  download
                >
                  <div className=" flex gap-3 pl-5 pr-5 p-2 text-white rounded-2xl border-2 border-white hover:text-primary hover:border-primary  cursor-pointer hover:scale-110 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                    >
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                    </svg>
                    Download CV
                  </div>
                </NavLink>
                <NavLink
                  onClick={() => handleScroll("Contact")}
                >
                  <div className=" flex gap-3 pl-5 pr-5 p-2 text-white hover:bg-slate-600 hover:text-primary hover:rounded-2xl  cursor-pointer hover:scale-110 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                    >
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                    </svg>
                    Contact Me
                  </div>
                </NavLink>
              </div>
              <div className="socials flex gap-5 mt-5">
                <NavLink
                  to="https://www.linkedin.com/in/reda-wahid-39907220b"
                  target="_blank"
                >
                  <img
                    src="image/icon-icons.png"
                    alt="LinkedIn"
                    className="w-12 h-12 rounded-full  hover:scale-110 transition-all duration-300"
                  />
                </NavLink>
                <NavLink to="https://github.com/reda-wahid" target="_blank">
                  <img
                    src="image/github.png"
                    alt="GitHub"
                    className="w-12 h-12 rounded-full  hover:scale-110 transition-all duration-300"
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div  className="hero-img mt-11 grid justify-end max-md:justify-center w-full animate-[moveUp_2s_ease-in-out_infinite]">
            <img
            data-aos="slide-left"
              src="image/hero.png"
              alt="Hero Image"
              className=" object-cover max-w-full max-h-full h-[400px] w-[400px] rounded-[50%] overflow-hidden border-2 border-[#4e4d55] shadow-[0_0_0_6px_rgba(59,58,64,0.2),0_15px_40px_rgba(0,0,0,0.4)] duration-300 hover:scale-105 hover:shadow-[0_0_8px_rgba(255,255,255,0.4),0_20px_60px_rgba(0,0,0,0.6);]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
