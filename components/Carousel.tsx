
import Carousel from 'react-multi-carousel';



export const Carousel1 = (_props: any) => {
  const mainImgs = [
    {
      image_url: '/hero/heros (1).jpg',
      name: 'Boat-rides',
      description: `Feel the adrenaline rush as the wobbles beneath your feet.`,
    },
    {
      image_url: 'native/kisumu-museum.jpg',
      name: 'Culture',
      description: `Take a peek into the history and culture of the Lakeside people.`,
    },
    {
      image_url: '/native/ndere-1.jpg',
      name: 'Island trips',
      description: `Take a three hours cruise to one of Africa's tropical islands.`,
    },
    {
      image_url: '/hero/heros (6).jpg',
      name: 'Bird watchers paradise',      
      description: `Get thrilled by hundreds of indigenous African bird species`,
    },
    {
      image_url: '/hero/heros (2).jpg',
      name: 'Game Viewing',   
      description: `Hippos, Lions, Cheetahs Impalas, Ostriches, Zebras, Monkeys`,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (   

    
      
        <Carousel
          responsive={responsive}
        
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          
          dotListClass=""
          itemClass="text-center"
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={false}
          className="bg-black text-center mx-auto"
          containerClass="max-w-7xl "
          rewindWithAnimation={true}
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
                   
        >
          {mainImgs.map((item, _key) => (
            <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
             
              
              <div className="relative z-10 text-center py-48" >
                <h1 className="text-white text-center text-6xl font-display font-bold mb-12">{item.name}</h1>
              
              <p className=" leading-relaxed  font-bold text-white text-lg pt-2 lg:text-4xl">
                  {item.description}
              </p>
              </div>
              <img
                src={item.image_url}
                alt=""
                className="w-full h-full absolute inset-0 object-cover opacity-70"
               />
            </div>
              
            
          ))}
        </Carousel>
      
  );
};