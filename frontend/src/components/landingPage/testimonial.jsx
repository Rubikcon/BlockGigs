import { Carousel } from "flowbite-react";

export default function Testimonial() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="max-w-md border bg-[#F3F3F3] backdrop-blur-md border-1 px-2 rounded-md">
          <h2 className="font-bold text-center py-3 ">Client Testimonial</h2>
          <p className="text-sm  text-center">
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

        <div className="max-w-md border backdrop-blur-md  bg-[#F3F3F3] border-1 px-2 rounded-md">
          <h2 className="font-bold text-center py-3 ">Client Testimonial</h2>
          <p className="text-sm text-center">
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
