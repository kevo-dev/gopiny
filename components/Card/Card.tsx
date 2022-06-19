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
      className="card relative flex items-center h-screen mt-0"
      style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
    >
      {reversed ? (
        <>
          <div className="absolute z-1 bottom-2 left-1">
            <Plus size={24} />
          </div>
          <div className="absolute z-1 top-9 left-4">
            <Plus size={24} />
          </div>
          <div className="absolute z-1 bottom-12 left-19">
            <Circle size={24} />
          </div>
        </>
      ) : (
        <>
          <div className="icon plus-3">
            <Plus size={24} />
          </div>
          <div className="icon plus-4">
            <Plus size={24} />
          </div>
          <div className="icon circle-2">
            <Circle size={24} />
          </div>
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
