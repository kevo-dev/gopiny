import Image from 'next/image';
import { Section } from './../layout/Section'


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
    <Section>
    <div
      className="bg-white flex mx-8"
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

      <div className="max-w-md">
      <div className="w-24 h-2 bg-blue-800 mb-4"></div>
        <h2 className="font-display font-bold text-4xl mb-6">{title}</h2>
        <p className="font-light text-gray-600 mb-6 leading-relaxed">
          {subtitle}
        </p>
        <button className="inline-block bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">{buttonLabel}</button>
      </div>
    </div>
    </Section>
  );
};

export default Card;
