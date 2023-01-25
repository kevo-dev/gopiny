import React from 'react';
import  Footer  from '../../components/Footer'; 
import { ReactNode } from 'react';
import { Meta } from './Meta';
import { AppConfig } from '../../utils/AppConfig';
import Navbar2 from '../Navbar2';
import Footer2 from '../Footer2';

type IBaseProps={
    children: ReactNode;
};

const Base = (props: IBaseProps) =>{
    

    return (
        <>
         <Meta title={AppConfig.title} description={AppConfig.description}/>
         <main>
         <Navbar2 />
        <div>{props.children}</div>
         <Footer2 />      
         </main>
        </>

    )

}

export { Base };