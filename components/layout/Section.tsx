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
    className={`max-w-screen ${props.yPadding ? props.yPadding : 'py-2'} ${props.xPadding}`}
  >
   
    {(props.title || props.description) && (
      <div className="mb-2 tracking-widest text-center">
         {props.description && (
          <div className=" font-mono mt-4 text-2xl underline md:px-20">{props.description}</div>
        )} {props.title && (
          <h2 className="text-4xl tracking-widest text-gray-800 font-bold">{props.title}</h2>
        )}

      </div>
    )}

    {props.children}
  </div>
);

export { Section };
