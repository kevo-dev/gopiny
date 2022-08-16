
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
        name = 'Kakamega Forest trip'
        title = "8 Hours"
        img = 'https://i.ibb.co/ChnLRyB/136848-79bcd3f4.jpg'
        price = '180'
        description = 'A trip to Kakamega forest. The leftover of the rain forest that stretched all the way from west Africa. Its trees species, its birds, its monkeys, lovely its memories.'
        _id = '2'
            
    />
    <CategoryFilter />
    <FormLayout />
    
    </Base>
    </>
    );

export default TourDetail
