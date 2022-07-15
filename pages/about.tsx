
import { Base }  from '../components/layout/Base'
import { Section }  from '../components/layout/Section'
import { AppConfig } from '../utils/AppConfig';

export default function About (){
    return(
    <>
    <Base>
    <Section
    title="About Us"
    description="">
   
   	<div className="h-screen w-full px-6 md:px-12 pb-12 pt-32 flex flex-wrap justify-between">

    <div className="bg-gray-lighter w-full md:flex-1 bg-cover bg-center bg-no-repeat pb-4 bg-[url('/native/about1.jpg')] "></div>
    

    <div className="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex justify-center items-center">
    <div className="px-8 md:px-16">
        <h1 className="font-bold text-4xl md:text-6xl mb-6">Dare to Explore with Us</h1>
        <p className="mb-4"><span className="font-bold text-2xl md:text-4xl">A Simply Perfect Place to Get Lost</span> </p>
        <p className="mb-6 leading-normal text-lg md:text-base">We are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page. <a href="#more" className="text-black text-sm">Read More</a></p>
        <a href="#" className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">Explore</a>
    </div>
    </div>

    </div>

    </Section>
    </Base>
    </>
    )
};
