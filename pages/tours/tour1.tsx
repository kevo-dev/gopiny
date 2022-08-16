
import { Base }  from '../../components/layout/Base'
import { Section }  from '../../components/layout/Section'

import { AppConfig } from '../../utils/AppConfig';
import { Tours } from '../../components/Tours';
import ProductList from '../../components/ProductList';
import TourDetails  from '../../components/ProductOverview';
import  ProductFeatures from '../../components/ProductFeatures';
import CategoryFilter from '../../components/CategoryFilter';
import FormLayout from '../../components/FormLayout';

const TourDetail = () => 
    (
    <>
    <Base>
    <TourDetails
        name = 'Daybreak in Lake Victoria'
        title = "8 Hours"
        img = 'https://i.ibb.co/ChnLRyB/136848-79bcd3f4.jpg'
        price = '180'
        description = 'Watch the sunrise. Board a boat at 6:00 am from---- Cruise in the lake for about an hour. Watch this as you enjoy the morning breeze in the calm waters. Mingle with the fishermen coming from night-fishing, see the hippos from their grazing, and watch birds leave their nests in the wetlands. Cruise Up an 8 1/2 km river to a local fish market. At the clients request we do a village tour.'
        _id = '1'
            
    />
    <CategoryFilter />
    <FormLayout />
    
    </Base>
    </>
    );

export default TourDetail
