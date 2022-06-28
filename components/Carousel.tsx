
import Carousel from 'react-multi-carousel';



export const Carousel1 = (_props: any) => {
  const mainImgs = [
    {
      image_url: '/native/boatrides (3).jpg',
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
      image_url: '/native/robin-chat.jpg',
      name: 'Bird watchers paradise',      
      description: `Get thrilled by hundreds of indigenous African bird species`,
    },
    {
      image_url: 'native/impalas.jpg',
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
          itemClass=""
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={false}
          className="bg-black "
          containerClass="max-w-7xl mx-auto bg-green-800 h-50"
          rewindWithAnimation={true}
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          
        >
          {mainImgs.map((item, _key) => (
            <div className="">
              <img
                src={item.image_url}
                alt=""
                className="h-80 w-full object-fill"
               />
              <h4 className="absolute top-48 text-2xl text-white font-bold ">{item.name}</h4>
              <p className="absolute top-60 leading-relaxed  text-white text-lg">
                  {item.description}
              </p>
            </div>
              
            
          ))}
        </Carousel>
      
  );
};
