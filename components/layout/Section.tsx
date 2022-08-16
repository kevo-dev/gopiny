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
  text?:string;
  
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen text-[#035397] mb-12  ${props.yPadding ? props.yPadding : 'py-8'} ${props.xPadding}`}
  >
   
    {(props.title || props.description) && (
      <div className="mb-2 tracking-widest text-center flex justify-between">
         {props.description && (
          <div className="absolute font-acrosmyth h-20 -mt-10 lg:ml-80 text-xl text-white underline">{props.description}</div>
        )} {props.title && (
          <>
          <h2 className="text-2xl md:text-4xl tracking-widest text-white text-center font-bold w-full mt-20 ml-20">{props.title}</h2>
          </>
        )}

      </div>
    )}

    {props.children}
  </div>
);

export { Section };
