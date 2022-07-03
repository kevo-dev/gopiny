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
      className="bg-white p-24 flex justify-end items-center"
      style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
    >
      {reversed ? (
        <>
          
        </>
      ) : (
        <>

        </>
      )}
      <div className="hidden lg:block">
      <Image
    width={600}
    height={600} 
    className="h-full w-full object-cover"
    src={image} alt={title} />
    </div>

      <div className="w-full flex-col mx-auto p-10 sm:w-1/2">
        <p className="text-xl font-semibold ">{title}</p>
        <p className="text-md mt-2 py-4 w-9/12 text-gray-800 lg:w-8/10 ">
          {subtitle}
        </p>
        <button className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">{buttonLabel}</button>
      </div>
    </div>
  );
};

export default Card;
