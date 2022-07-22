
import { Base }  from '../components/layout/Base'
import { Section }  from '../components/layout/Section'
import { AppConfig } from '../utils/AppConfig';

const About = () => {
    return(
    <>
    <Base>
    <Section
    title="About Us"
    description="">
   
   	<div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
          <img
            src="/native/boatrides (7).jpg"
            alt=""
            className="w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 0px 7rem" }}
          />
            
          </div>
        <div className=" text-white md:h-full w-full md:flex-1 flex justify-center items-center">
    <div className="px-8 md:px-16">
        <h1 className="font-bold text-4xl md:text-6xl mb-6">Dare to Explore with Us</h1>
        <p className="mb-4"><span className="font-bold text-2xl md:text-4xl">A Simply Perfect Place to Get Lost</span> </p>
        <p className="mb-6 leading-normal text-lg md:text-base">We are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page. <a href="#more" className="text-black text-sm">Read More</a></p>
        <a href="#" className="block md:inline-block text-center no-underline text-blue-900 px-5 py-3 border-2 border-blue-900 hover:bg-blue-900 hover:text-blue-100">Explore</a>
    </div>
        </div>
        </div>

    </div>

    </Section>
    </Base>
    </>
    )
};

export default About;