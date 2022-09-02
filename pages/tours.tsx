
import { Base }  from '../components/layout/Base'
import { Section }  from '../components/layout/Section'

import { AppConfig } from '../utils/AppConfig';
import { Tours } from '../components/Tours';
import ProductList from '../components/ProductList';
import ProductFeatures from '../components/ProductFeatures';
import { ReviewScore } from '../components/ReviewScore';

const TourList = () => {
    return(
    <>
    <Base>
    
    <ProductList />
    
    </Base>
    </>
    )
};

export default TourList
