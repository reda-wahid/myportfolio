import React from "react";
import HeadingComp from "../../components/HeadingComp";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Experience() {
    AOS.init( {
      duration: 1500,
    });

  const experiences = [
    {
      id: 1,
      period: "2024 - Present",
      title: "Front-End Developer",
      company: "self study",
      description:
        "Building modern web applications with React & Next.js, handling API integrations, and creating responsive user interfaces.",
      side: "left",
      icon: "image/graduation.png",
    },
    {
      id: 2,
      period: "2020 - 2024",
      title: "Bachelor's Degree",
      company: "Management Information System",
      description:
        "Management Information System degree with Very Good grade. Focused on programming, algorithms, and software engineering.",
      side: "right",
      icon: "image/graduation.png",
    },
  ];
  return (
    <>
      <section id="Experience">
        <div className="text-white pt-12  xl:min-h-[100vh]  mx-auto px-4 ">
          <div className="head text-center " data-aos="slide-up">
            <HeadingComp title={"Experience & "} ing={"Education"} />
            <p className="text-lg text-primary leading-7 ">
              My professional journey and academic background
            </p>
          </div>

          <div className="group-ex relative w-full flex flex-col pt-6">
            {experiences.map((item) => (
              <div
                className=" grid md:grid-cols-[1fr_40px_1fr] md:items-stretc w-full justify-center gap-3"
                key={item.id}
              >
                <div className="flex justify-end items-start" data-aos="slide-right" >
                  {item.side === "left" && (
                    <div className="md:max-w-96 border-2 border-zinc-300 p-6 bg-secondary bg-opacity-5 rounded-2xl font-bold hover:shadow-[1px_1px_5px_4px_rgba(255,255,255,.2)] hover:scale-105 duration-300 transition-all">
                      <div className="flex gap-4 items-center"><img src={item.icon} alt={item.title} className="border-2 p-2  rounded-2xl" />{item.period}</div>
                      <h1 className="text-2xl">{item.title}</h1>
                      <h2 className="text-xl text-secondary">{item.company}</h2>
                      <p className="font-thin">{item.description}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col  items-center ">
                  {/* النقطة */}
                  <div className="md:w-4 md:h-4 max-md:hidden rounded-full border-2 border-secondary bg-background flex-shrink-0" />
                  {/* خط تحت النقطة */}
                  <div className="w-px flex-1 border-r-2 border-secondary" />
                </div>
                <div
                data-aos="slide-left"
                  className={`card  flex justify-start items-start  `}
                  key={item.id}
                >
                  {item.side === "right" && (
                        <div className="md:max-w-96 border-2 border-zinc-300 p-6 bg-secondary bg-opacity-5 rounded-2xl font-bold hover:shadow-[1px_1px_5px_4px_rgba(255,255,255,.2)] hover:scale-105 duration-300 transition-all">
                     <div className="flex gap-4 items-center"><img src={item.icon} alt={item.title} className="border-2 p-2  rounded-2xl" />{item.period}</div>
                      <h1 className="text-2xl">{item.title}</h1>
                      <h2 className="text-xl text-secondary">{item.company}</h2>
                      <p className="font-thin">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
