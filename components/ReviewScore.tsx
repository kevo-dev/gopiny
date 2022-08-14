
import { Section } from './layout/Section'
import { AppConfig } from './../utils/AppConfig';

type IContactProps = {
 title?: string
};

const ReviewScore = (props: IContactProps) => {
    
  

  return (
    <>
    <Section
    
    
    >

      
   
   <div className="relative z-10 rounded-md shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-blur-xl">
          <div><h1 className="text-white font-bold text-9xl ">7.0</h1> </div>
          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
            
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div id="bar" className="h-full bg-green-500 relative w-16"></div>
    </div>
          
        </div>
      </div>

    </Section>
    </>
  );
};

export { ReviewScore };
