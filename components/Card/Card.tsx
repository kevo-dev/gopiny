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
      className="card relative flex items-center px-auto mx-auto"
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
    width={500}
    height={500} 
    className="object-cover"
    src={image} alt={title} />

      <div className="w-1/2">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-xl mt-1 mr-0 mb-3 ml-0 w-9/12 text-gray-800">
          {subtitle}
        </p>
        <button className="bg-orange-500 h-10 w-30 p-2">{buttonLabel}</button>
      </div>
    </div>
  );
};

export default Card;
