import { Button, Carousel } from "keep-react";
import Title from "../Shared/Title";
import Container from "../Shared/Container";
 
const ContestWinner = () => {

  return (
    <div className="md:py-40">
    <Title title={'Contest Winner'}></Title>
    
    <p className="text-gray-500 text-lg text-center font-normal pb-3 my-10 px-10">
    Witness the latest champions who have seized victory, showcasing innovation and excellence. Join us in celebrating their remarkable achievements.
              </p>
    <div className="px-5 py-5  mt-5">
     <Container>
       
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <div className="relativ">
        <img
          src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
          alt="slider-1"
          className="object-cover w-full h-full"
 
           
        />
        <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
          <h1 className="text-white font-semibold text-lg">Mushfiqur rahman</h1>
        </div>
        </div>
        <div className="relativ">
        <img
          src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
          alt="slider-1"
          className="object-cover w-full h-full"
 
           
        />
        <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
          <h1 className="text-white font-semibold text-lg">Mushfiqur rahman</h1>
        </div>
        </div>
        <div className="relativ">
        <img
          src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
          alt="slider-1"
          className="object-cover w-full h-full"
 
           
        />
        <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
          <h1 className="text-white font-semibold text-lg">Mushfiqur rahman</h1>
        </div>
        </div>
        {/* <img
          src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
          alt="slider-2"
          height={384}
          width={440}
        /> */}
        {/* <img
          src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
          alt="slider-3"
          height={384}
          width={440}
        /> */}
      </Carousel>
      <Carousel
        showControls={false}
        indicatorsType="ring"
        indicatorsTypeColors="slate"
      >
        <img
          src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
          alt="slider-3"
          height={384}
          width={440}
        />
        <img
          src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
          alt="slider-1"
          height={384}
          width={440}
        />
        <img
          src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
          alt="slider-2"
          height={384}
          width={440}
        />
      </Carousel>
    </div>
     </Container>
    </div>
    
    </div>
  );
};

export default ContestWinner;