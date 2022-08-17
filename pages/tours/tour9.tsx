
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
    name: 'Lake Tour',
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
        name = 'Lake Tour'
        title = "3 days"
        img = 'https://i.ibb.co/ChnLRyB/136848-79bcd3f4.jpg'
        price = '180'
        description = "Leave Kisumu early by boat to Ndere Island see the park, join the van at Aasat beach and head to Kit Mikayi. From kit Mikayi drive to Luanda K'Otieno. Catch the last ferry to Mbita point. Spend the night in Rusinga island and watch the lake turn into cities in the night (pressure lamps/solar light) used for fishing for tiny silver fish. Wake up, head to bird island, on to Takawiri beach for a swim and lunch, head to Mfangano island back to Mbita and head to Ruma National park reach there in the evening spend the night at Oribi guest house and in the morning take a game drive across and within the park. Leave in the evening for Kericho, spend the night there. In the morning visit the tea plantation, watch the pickers and maybe visit the factory. After lunch head to Kisumu through the sugar cane fields on to Luanda Magere shrine the great Luo warrier then to the rice fields (Ahero) on to Kisumu."
        _id = '1'
            
    />
   
    <FormLayout />
    
    </Base>
    </>
    );

export default TourDetail
