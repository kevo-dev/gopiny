
import { Base }  from '../../components/layout/Base'
import { Section }  from '../../components/layout/Section'

import { AppConfig } from '../../utils/AppConfig';
import { Tours } from '../../components/Tours';
import ProductList from '../../components/ProductList';
import { TourDetails } from '../../components/ProductOverview';
import  ProductFeatures from '../../components/ProductFeatures';

const TourDetail = () => 
    (
    <>
    <Base>
    <TourDetails
        name = 'Island Trips'
        title = "8 Hours"
        img = 'https://i.ibb.co/ChnLRyB/136848-79bcd3f4.jpg'
        price = '180'
        description = 'A boat trip to Ndere island national park or a fishing trip around the archipelago of six smaller islands.'
        _id = '1'
            
    />
    
    </Base>
    </>
    );

export default TourDetail
