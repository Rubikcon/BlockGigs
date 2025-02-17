import { Carousel } from "flowbite-react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";

export default function Testimonial() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-15">
      <Carousel
        pauseOnHover
        leftControl={<FaCircleChevronLeft />}
        rightControl={<FaChevronCircleRight />}
      >
        <div className="w-md md:w-2xl lg:w-4xl border border-[#F3F3F3]  border bg-[#F3F3F3] backdrop-blur-md border-1 px-2 md:py-20  py-10 rounded-md">
          <h2 className="font-bold text-center py-3 ">Client Testimonial</h2>
          <p className="text-sm  md:text-base text-center w-[70%] mx-auto">
            "Working with Blockgigs has been a game-changer for our startup. The
            process of finding and hiring tech talent has never been this
            seamless. The blockchain-secured contracts gave us peace of mind,
            and the talent we found exceeded our expectations. We’ve
            successfully launched two major projects with Blockgigs freelancers,
            and we couldn’t be happier."
          </p>

          <p className="text-xs text-center py-4 font-bold">
            Jane D., Tech Startup Founder
          </p>
        </div>

        <div className="w-md md:w-2xl lg:w-4xl border backdrop-blur-md border border-[#F3F3F3]  bg-[#F3F3F3] border-1 px-2 md:py-20 py-10 rounded-xl">
          <h2 className="font-bold text-center py-3 ">Client Testimonial</h2>
          <p className="text-sm md:text-base text-center w-[70%] mx-auto">
            "Working with Blockgigs has been a game-changer for our startup. The
            process of finding and hiring tech talent has never been this
            seamless. The blockchain-secured contracts gave us peace of mind,
            and the talent we found exceeded our expectations. We’ve
            successfully launched two major projects with Blockgigs freelancers,
            and we couldn’t be happier."
          </p>

          <p className="text-xs text-center py-4 font-bold">
            Jane D., Tech Startup Founder
          </p>
        </div>
      </Carousel>
    </div>
  );
}
