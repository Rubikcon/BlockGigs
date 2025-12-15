import Slider from "react-slick";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-15 px-4">
      <Slider {...settings}>
        <TestimonialCard
          text={`"Working with Blockgigs has been a game-changer for our startup. The
          process of finding and hiring tech talent has never been this
          seamless. The blockchain-secured contracts gave us peace of mind,
          and the talent we found exceeded our expectations. We’ve
          successfully launched two major projects with Blockgigs freelancers,
          and we couldn’t be happier."`}
          author="Jane D., Tech Startup Founder"
        />

        <TestimonialCard
          text={`"Blockgigs simplified hiring tech talent for us! We love the ease
          and security it provides. Definitely recommend it!"`}
          author="John S., Startup CTO"
        />
      </Slider>
    </div>
  );
}

function TestimonialCard({ text, author }) {
  return (
    <div className="max-w-2xl mx-auto bg-[#F3F3F3] border border-[#F3F3F3] backdrop-blur-md px-4 py-10 md:py-20 rounded-md">
      <h2 className="font-bold text-center py-3">Client Testimonial</h2>
      <p className="text-sm md:text-base text-center mx-auto w-[90%]">{text}</p>
      <p className="text-xs text-center py-4 font-bold">{author}</p>
    </div>
  );
}

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-gray-700"
      onClick={onClick}
    >
      <FaChevronCircleRight size={30} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-gray-700"
      onClick={onClick}
    >
      <FaCircleChevronLeft size={30} />
    </div>
  );
}
