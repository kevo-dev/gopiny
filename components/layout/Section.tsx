/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';

type ISectionProps = {
  display?:string;
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children: ReactNode;
  className?:string;
  flex?:string;
  color?:string;
  
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-7xl mx-auto mt-20 mb-2 ${props.yPadding ? props.yPadding : 'py-5'} ${props.xPadding}`}
  >
   
    {(props.title || props.description) && (
      <div className="mb-8 text-center">
        
        {props.description && (
          <div className=" font-mono mt-4 text-2xl md:px-20">{props.description}</div>
        )}

{props.title && (
          <h2 className="text-4xl text-gray-800 font-bold">{props.title}</h2>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
