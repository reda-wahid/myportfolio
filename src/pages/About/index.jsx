import { Link } from "react-router";
import HeadingComp from "../../components/HeadingComp";
import AOS from "aos";
import "aos/dist/aos.css";
import { scroller } from "react-scroll";

export default function About() {
  AOS.init({
    duration: 1500,
  });
  const data = [
    {
      id: 1,
      icon: "image/user.png",
      title: "Team Player",
      main: "Collaboration",
    },
    {
      id: 2,
      icon: "image/graduation.png",
      title: "MIS",
      main: "grauation",
    },
    {
      id: 3,
      icon: "image/experience.png",
      title: "experience",
      main: "fresh",
    },
    {
      id: 4,
      icon: "image/grade.png",
      title: "Graduation Grade",
      main: "Very Good",
    },
  ];
  const handleScroll = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 200,
      offset: -40,
    });
  };
  return (
    <section id="About">
      <div className="text-white pt-16 max-w-full xl:min-h-[100vh]  mx-auto">
        <div className="head text-center mb-8" data-aos="slide-up">
          <HeadingComp title={"About"} ing={"Me"} />
          <p className="text-lg text-primary leading-7">
            Get to know me better
          </p>
        </div>
        <div
          className="content  flex justify-between flex-wrap gap-5 lg:flex-nowrap"
          data-aos="fade-up"
        >
          <div className="paragrph leading-8 grid gap-10  lg:max-w-[50%] px-5">
            <p>
              Highly motivated frontend developer with experience in the field.
              Passionate about continuous learning and thrives in collaborative
              environments. Dedicated to expanding knowledge and skills in
              frontend development, staying up-to-date with the latest
              technologies and best practices to deliver innovative solutions
            </p>
            <p>
              I love teamwork and I'm always eager to learn new technologies. I
              focus on writing clean, maintainable code and creating exceptional
              user experiences.
            </p>
            <Link onClick={() => handleScroll("Contact")}>
              <div className="ing-btn w-fit flex gap-3 hover:scale-110 transition-all duration-300">
                Let's Work Togther
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-4 justify-center w-[100%]  mt-6 education  text-white">
            {data.map((item) => (
              <div
                data-aos="slide-up"
                className="  bg-[#3d3d3dee] grid  max-w-full text-center justify-center rounded-2xl p-4 border-2 border-[#4e4d55] shadow-[0_0_0_6px_rgba(59,58,64,0.2),0_15px_40px_rgba(0,0,0,0.4)] duration-300 hover:scale-105 hover:shadow-[0_0_8px_white,0_10px_20px_rgba(255,255,255,0.6)]"
                key={item.id}
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="mx-auto size-12 bg- p-2 h-14 w-14 "
                />
                <h1 className="text-2xl">{item.title}</h1>
                <p className="">{item.main}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
