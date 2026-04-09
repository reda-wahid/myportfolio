import React from "react";
import HeadingComp from "../../components/HeadingComp";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    AOS.init( {
      duration: 1500,
    });
  const data = [
    {
      id: 1,
      icon: "image/html.png",
      title: "HTML",
    },
    {
      id: 2,
      icon: "image/css.png",
      title: "CSS",
    },
    {
      id: 3,
      icon: "image/js.png",
      title: "JS",
    },
    {
      id: 4,
      icon: "image/react.png",
      title: "React",
    },
    {
      id: 5,
      icon: "image/github_1.png",
      title: "Github",
    },
    {
      id: 6,
      icon: "image/tailwind.png",
      title: "Tailwind Css",
    },
    {
      id: 7,
      icon: "image/phone.png",
      title: "Responsive",
    },
    {
      id: 8,
      icon: "image/ui.png",
      title: "UI",
    },
    {
      id: 9,
      icon: "image/solving.png",
      title: "Problem Solving",
    },
    {
      id: 10,
      icon: "image/api.png",
      title: "API",
    },
  ];
  return (
    <section id="Skills">
      <div className="text-white pt-16 max-w-full lg:min-h-[100vh]  mx-auto">
        <div className="head text-center "  data-aos="slide-up">
          <HeadingComp title={"My"} ing={"Skills"} />
          <p className="text-lg text-primary leading-7">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-between gap-4 mt-14 px-4 md:px-0">
          {data.map((item) => (
            <div
            data-aos="slide-up"
              key={item.id}
              className="bg-secondary bg-opacity-5 rounded-2xl font-bold gap-3 grid justify-center text-center p-6 border border-primary hover:shadow-[1px_1px_5px_4px_rgba(255,255,255,.2)] hover:scale-105 duration-300 transition-all"
            >
              <img src={item.icon} alt={item.title} className="w-14 mx-auto" />
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
        <p className="text-center mt-14">
          I'm constantly learning and exploring new technologies. Currently
          interested <br />
          in Next.js, and advanced animation libraries.
        </p>
      </div>
    </section>
  );
}
