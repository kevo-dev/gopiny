
import { Section } from './layout/Section'
import { CameraIcon, MapIcon } from '@heroicons/react/outline';
import { AppConfig } from './../utils/AppConfig';

type IFeaturedProps = {
 title?: string
};

const Featured = (props: IFeaturedProps ) => {
  

  return (
    <>
    <Section
    
    description="Destination List"
    title="Go Exotic places"    
    >

   
    <div className="max-w-8xl mx-auto p-6 md:p-24 md:pt-12">
        <div className="lg:grid grid-cols-4 grid-rows-2 gap-5 font-display text-3xl text-white">
            <a href="#" className="h-72 my-4 bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-right">
                <span className="absolute bottom-10 z-10 ml-10 font-bold">Kericho</span>
                <img src="/native/kericho.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75" />
            </a>
            <a href="#" className="h-72 my-4 bg-black col-span-2 row-span-1 rounded-lg relative flex items-center justify-left">
                <span className="absolute bottom-10 z-10 ml-4 font-bold">Kisumu</span>
                <img src="/native/boat_rides.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75" />
            </a>
            <a href="#" className="h-72 my-4 bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-left py-24">
                <span className="absolute bottom-10 z-10 ml-4 font-bold">Kakamega</span>
                <img src="/native/ndere-2.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75" />
            </a>
            <a href="#" className="h-72 my-4 bg-black col-span-2 row-span-1 rounded-lg relative flex items-center justify-left py-24">
                <span className="absolute bottom-10 z-10 justify-left ml-4 font-bold">Migori</span>
                <img src="/native/ndere-2.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75"/>
            </a>
            <a href="#" className="h-72 my-4 bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-left py-24">
                <span className="absolute bottom-10 z-10  ml-4 font-bold">Homa-Bay</span>
                <img src="/native/ndere-2.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75"/>
            </a>
            <a href="#" className="h-72 my-4 bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-center py-24">
                <span className="relative z-10">FAQ</span>
                <img src="/native/ndere-2.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75"/>
            </a>
        </div>
    </div>
    


    </Section>
    </>
  );
};

export { Featured };
