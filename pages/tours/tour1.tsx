
import { Base }  from '../../components/layout/Base'
import { Section }  from '../../components/layout/Section'

import { AppConfig } from '../../utils/AppConfig';
import { Tours } from '../../components/Tours';
import ProductList from '../../components/ProductList';
import TourDetails  from '../../components/ProductOverview';
import  ProductFeatures from '../../components/ProductFeatures';
import CategoryFilter from '../../components/CategoryFilter';
import FormLayout from '../../components/FormLayout';

const product = {
    name: 'Tour1',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Tours', href: '/tours' },
      ],
}

const TourDetail = () => 
    (
    <>
    <Base>
    <nav aria-label="Breadcrumb">
          <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
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
