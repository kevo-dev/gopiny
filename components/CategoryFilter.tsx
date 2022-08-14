/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import { ReviewScore } from './ReviewScore'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Day 1',
    options: [
      { value: 'white', label: 'Watch the sunrise. Board a boat at 6:00 am from---- Cruise in the lake for about an hour. Watch this as you enjoy the morning breeze in the calm waters. Mingle with the fishermen coming from night-fishing, see the hippos from their grazing, and watch birds leave their nests in the wetlands. Cruise Up an 8 1/2 km river to a local fish market. At the clients request we do a village tour.'}
    ],
  },
  {
    id: 'category',
    name: 'Day 2',
    options: [
      { value: 'new-arrivals', label: 'A trip to Kakamega forest. The leftover of the rain forest that stretched all the way from west Africa. Its trees species, its birds, its monkeys, lovely its memories.', checked: false }
    ],
  },
  {
    id: 'size',
    name: 'Day 3',
    options: [
      { value: '2l', label: 'Leave Kisumu in the morning via Kendubay stop at Obama center to see craft work, women working on doom then a quick visit to a nearby pottery women group. Leave for the soap stones mines situated on the beautiful Kisii hills, see the, mines and craft shape. Trip back across the beautiful hills.'}
    ],
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Tour Plan</h1>

          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            

            <div className="grid grid-cols-1 ">
              {/* Filters */}
              <form className="">
                
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <div
                                  id={`filter-${section.id}-${optionIdx}`}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

            </div>
          </section>
          <ReviewScore />
        </main>
      </div>
    </div>
  )
}
