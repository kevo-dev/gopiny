import { Section } from "./layout/Section";
import { AppConfig } from "./../utils/AppConfig";

type IContactProps = {
  title?: string;
};

const ReviewScore = (props: IContactProps) => {
  return (
    <>
      <Section>
        <div className="relative z-10 rounded-md shadow-md p-4 bg-slate-800 max-w-4xl mx-auto  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mx-auto ">
              <h1 className="font-bold text-9xl py-16">7.0</h1>{" "}
            </div>

            <div className="h-full relative max-w-xl overflow-hidden  ">
              <div className="flex justify-between">
                <span className="text-base font-medium text-blue-700 dark:text-white mb-4">
                  Services
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  80%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700  mb-2 ">
                <div className="bg-blue-600 h-2.5 rounded-full w-9/12"></div>
              </div>

              <div className="flex justify-between">
                <span className="text-base font-medium text-blue-700 dark:text-white mb-2">
                  Locations
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  80%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700  mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full w-10/12"></div>
              </div>



              <div className="flex justify-between">
                <span className="text-base font-medium text-blue-700 dark:text-white mb-2">
                  Amenities
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  70%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700  mb-2 ">
                <div className="bg-blue-600 h-2.5 rounded-full w-8/12"></div>
              </div>


              
              <div className="flex justify-between">
                <span className="text-base font-medium text-blue-700 dark:text-white mb-2">
                  Prices
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  60%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700  mb-2 ">
                <div className="bg-blue-600 h-2.5 rounded-full w-8/12"></div>
              </div>
              


              
              <div className="flex justify-between">
                <span className="text-base font-medium text-blue-700 dark:text-white mb-2">
                  Food
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700  mb-2 ">
                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
              </div>

              
            </div>
          </div>


        </div>
      </Section>
    </>
  );
};

export { ReviewScore };
