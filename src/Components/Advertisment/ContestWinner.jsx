import { Button, Carousel } from "keep-react";
import Title from "../Shared/Title";
import Container from "../Shared/Container";
import winner1 from '/src/assets/winner1.jpg'
import winner2 from '/src/assets/winner2.jpg'
import winner3 from '/src/assets/winner3.jpg'

const ContestWinner = () => {
  return (
    <div className="md:py-40">
      <Title title={"Contest Winner"}></Title>

      <p className="text-gray-500 text-lg text-center font-normal pb-3 my-10 px-10">
        Witness the latest champions who have seized victory, showcasing
        innovation and excellence. Join us in celebrating their remarkable
        achievements.
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
                  src={winner1}
                  alt="slider-1"
                  className="object-cover w-full h-full"
                />
                <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
                  <h1 className="text-white font-semibold text-lg">
                    Mushfiqur rahman
                  </h1>
                </div>
              </div>

              <div className="relativ">
                <img
                  src={winner2}
                  alt="slider-2"
                  className="object-cover w-full h-full"
                />
                <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
                  <h1 className="text-white font-semibold text-lg">
                    Ashraful Kobir
                  </h1>
                </div>
              </div>

              <div className="relativ">
                <img
                  src={winner3}
                  alt="slider-3"
                  className="object-cover w-full h-full"
                />
                <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
                  <h1 className="text-white font-semibold text-lg">
                    Mehedi Hasan
                  </h1>
                </div>
              </div>
            </Carousel>
            <Carousel
              showControls={false}
              indicatorsType="ring"
              indicatorsTypeColors="slate"
            >
              <div className="relativ">
                <img
                  src={winner3}
                  alt="slider-3"
                  className="object-cover w-full h-full"
                />
                <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
                  <h1 className="text-white font-semibold text-lg">
                  Mehedi Hasan
                  </h1>
                </div>
              </div>

              <div className="relativ">
                <img
                  src={winner1}
                  alt="slider-1"
                  className="object-cover w-full h-full"
                />
                <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
                  <h1 className="text-white font-semibold text-lg">
                    Mushfiqur rahman
                  </h1>
                </div>
              </div>

              <div className="relativ">
                <img
                  src={winner2}
                  alt="slider-2"
                  className="object-cover w-full h-full"
                />
                <div className="absolute rounded-l-2xl lg:bottom-24 bottom-5 right-0 px-8 py-2 bg-gradient-to-r from-[#602BF7] to-[#B258F5] mb-8">
                  <h1 className="text-white font-semibold text-lg">
                  Ashraful Kobir
                  </h1>
                </div>
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContestWinner;
