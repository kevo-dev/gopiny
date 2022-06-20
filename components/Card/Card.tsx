import Image from 'next/image';


import { Plus, Circle } from '../../svgs';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  buttonLabel: string;
  reversed?: boolean;
}

const Card = ({ title, subtitle, image, buttonLabel, reversed }: CardProps) => {
  return (
    <div
      className="card relative flex items-center mt-12 mr-0"
      style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
    >
      {reversed ? (
        <>
          
        </>
      ) : (
        <>

        </>
      )}
      
      <Image
    width={600}
    height={600} 
    className="h-full w-1/2 object-cover mr-auto sm:hidden "
    src={image} alt={title} />

      <div className="w-1/2">
        <p className="text-xl font-semibold p-4">{title}</p>
        <p className="text-md mt-2 mr-0 mb-4 ml-0 w-9/12 text-gray-800 lg:w-8/10 ">
          {subtitle}
        </p>
        <button className="bg-orange-700 h-10 w-30 p-2">{buttonLabel}</button>
      </div>
    </div>
  );
};

export default Card;
