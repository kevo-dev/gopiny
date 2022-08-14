import { Section } from "./layout/Section";
import { AppConfig } from "./../utils/AppConfig";

type IContactProps = {
  title?: string;
};

const ReviewScore = (props: IContactProps) => {
  return (
    <>
      <Section>
        <div className="relative z-10 rounded-md shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-blur-xl">
            <div>
              <h1 className="text-white font-bold text-9xl ">7.0</h1>{" "}
            </div>

            <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Flowbite
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  45%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full width-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export { ReviewScore };
