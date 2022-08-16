
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
        { id: 1, name: 'Tours', href: '/tours' },
        { id: 2, name: 'Forest Trip', href: '/tours/tour3' },
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
