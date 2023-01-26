import { Base } from "../components/layout/Base";
import { Section } from "../components/layout/Section";
import { AppConfig } from "../utils/AppConfig";

const About = () => {
  return (
    <>
      
        <Section
          description="Our Story"
          title="ABOUT US"
        >
         

          <div className="relative z-10 rounded-md shadow-md  p-4 max-w-7xl mx-auto mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:ml-4">
                <img
                  src="/native/sightsee.jpg"
                  alt=""
                  className="w-full right-0 object-cover"
                  style={{ borderRadius: "0px 0px 0px 7rem" }}
                />
              </div>
              <div className=" text-slate-900 md:h-full w-full md:flex-1 flex justify-left items-left">
                <div className=" md:px-16">
                  

                  <p className="mb-6 leading-normal text-slate-900 text-lg md:text-base">
                    We offer packages that are worth your money and time and that's a guarantee
                    {" "}
                  </p>
                  <p className="mb-6 leading-normal  text-lg md:text-base">
                    {AppConfig.about.description}
                    <a href="#more" className="text-orange-800 text-md">
                      Read More
                    </a>
                  </p>
                  <a
                    href="#"
                    className="block md:inline-block text-center no-underline transform transition hover:scale-105 duration-300 ease-in-out text-slate-800 uppercase text-md tracking-widest font-heading px-4 py-4 items-end border-2 border-black hover:bg-blue-900 hover:text-blue-100"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      
    </>
  );
};

export default About;
