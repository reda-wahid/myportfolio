import React from "react";
import HeadingComp from "../../components/HeadingComp";
import { NavLink } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Projects() {
    AOS.init( {
      duration: 1500,
    });
  const data = [
    {
      id: 1,
      image: "image/recipi.jpeg",
      title: "Recipi",
      descreption:
        "I'm a Frontend Developer in the making — obsessed with clean code, beautiful UIs, and the satisfying moment when a React component just clicks.",
      programing: [
        "javaScript",
        "React",
        "TailwindCSS",
        "API",
        "Animations",
        "Aos",
      ],
      link: "https://recipi00.netlify.app/",
    },
       {
      id: 2,
      image: "image/e-commerce.jpeg",
      title: "E-commerce",
      descreption:
        "E-commerce platform  Designed RESTful APIs for product and order management, facilitating a seamless userexperience",
      programing: [
        "javaScript",
        "React",
        "TailwindCSS",
        "API",
        "swiper",
        "Animations",
        "Aos",
      ],
      link: "https://fascinating-malabi-9a74a3.netlify.app/",
    },
    {
      id: 3,
      image: "image/store.png",
      title: "e-commerce furnture store",
      descreption:
        "E-commerce platform using javascript and bootstrap It can be used as a marketing tool for your product.",
      programing: [
        "HTML",
        "CSS",
        "javaScript",
        "Bootsrap",
        "Animations",
        "Aos",
      ],
      link: "https://redaa-wahid.github.io/shop-card/",
    },
    {
      id: 4,
      image: "image/dashboard.png",
      title: "Dahboard",
      descreption:
        "React-powered e-commerce admin dashboard to manage products, orders, and analytics in one place",
      programing: [
        "javaScript",
        "React",
        "TailwindCSS",
        "Animations",
        "Charts",
      ],
      link: "https://fulldashboard.netlify.app/",
    },
    {
      id: 5,
      image: "image/portfolio.png",
      title: "Portfolio",
      descreption:
        "Designed and developed a personal portfolio highlighting projects and artistic skills Crafted a dynamic and engaging user interface",
      programing: ["javaScript", "React", "TailwindCSS", "Animations", "Aos"],
      link: "https://recipi00.netlify.app/",
    },
    {
      id: 6,
      image: "image/ecommerce.png",
      title: "E-commerce",
      descreption:
        "E-commerce platform  Designed RESTful APIs for product and order management, facilitating a seamless userexperience",
      programing: [
        "javaScript",
        "React",
        "TailwindCSS",
        "API",
        "Animations",
        "Aos",
      ],
      link: "https://regal-arithmetic-085e1e.netlify.app/",
    },
  ];
  return (
    <section id="project">
      <div className="text-white pt-16 max-w-full  mx-auto p-4 " >
        <div className="head text-center " data-aos="slide-up" >
          <HeadingComp title={"Featured"} ing={"Projects"} />
          <p className="text-lg text-primary leading-7">
            A selection of my recent work and side projects
          </p>
        </div>
        <div className="group grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
          {data.map((item) => (
            <div className="card bg-secondary bg-opacity-10 rounded-2xl" key={item.id} data-aos="slide-up">
              <div className="up relative">
                 <NavLink to={item.link} target="_blank" className="link hidden  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-400 rounded-full">
                  <img src='image/external-link.png' alt={item.title} className="w-12"/>
                </NavLink>
                <img src={item.image} alt={item.title} className="rounded-t-2xl" />
              </div>
              <div className="down p-6">
                <h1 className="text-2xl ">{item.title}</h1>
                <p className="text-[#b6b6b6]">{item.descreption}</p>
                <div className="group-lang flex flex-wrap gap-2 py-4">
                  {
                    item.programing.map((item)=>(
                      <p key={item} className="p-0 px-4 rounded-full bg-blue-400 bg-opacity-5">{item}</p>
                    ))
                  }
                </div>
                <hr/>
                <NavLink to={item.link} target="_blank" className="text-primary flex items-center gap-2 pt-4">
                  Live Demo
                  <img src='image/external-link.png' alt={item.title} className="w-6"/>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
