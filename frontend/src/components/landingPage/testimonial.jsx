import { Carousel } from "flowbite-react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";

export default function Testimonial() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-15">
      <Carousel
        slide={true}
        slideInterval={3000}
        pauseOnHover={true}
        leftControl={<FaCircleChevronLeft size={30} />}
        rightControl={<FaChevronCircleRight size={30} />}
      >
        {/* Each slide must be inside Carousel */}
        <div className="max-w-2xl mx-auto bg-[#F3F3F3] border border-[#F3F3F3] backdrop-blur-md px-4 py-10 md:py-20 rounded-md">
          <h2 className="font-bold text-center py-3">Client Testimonial</h2>
          <p className="text-sm md:text-base text-center mx-auto w-[90%]">
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

        <div className="max-w-2xl mx-auto bg-[#F3F3F3] border border-[#F3F3F3] backdrop-blur-md px-4 py-10 md:py-20 rounded-md">
          <h2 className="font-bold text-center py-3">Client Testimonial</h2>
          <p className="text-sm md:text-base text-center mx-auto w-[90%]">
            "Blockgigs simplified hiring tech talent for us! We love the ease
            and security it provides. Definitely recommend it!"
          </p>
          <p className="text-xs text-center py-4 font-bold">
            John S., Startup CTO
          </p>
        </div>
      </Carousel>
    </div>
  );
}
