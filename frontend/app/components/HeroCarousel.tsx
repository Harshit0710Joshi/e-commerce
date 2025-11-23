"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-[90%] max-w-7xl mx-auto mt-32 rounded-[2.5rem] overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <Slider {...settings}>
        <div>
          <Image
            src="/banner1.jpg"
            alt="Banner1"
            width={1400}
            height={350}
            className="w-full h-[300px] object-cover"
          />
        </div>

        <div>
          <Image
            src="/banner2.jpg"
            alt="Banner2"
            width={1400}
            height={350}
            className="w-full h-[300px] object-cover"
          />
        </div>

        <div>
          <Image
            src="/banner3.jpg"
            alt="Banner3"
            width={1400}
            height={350}
            className="w-full h-[300px] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

// BUTTONS -----
function NextArrow({ onClick }: any) {
  return (
    <button
      className="
        absolute right-4 top-1/2 -translate-y-1/2
        bg-white text-gray-700
        w-10 h-10 rounded-full shadow-lg
        flex items-center justify-center
        hover:bg-[#38bdf8] hover:text-white
        transition
        z-20
      "
      onClick={onClick}
    >
      <ArrowRight size={22} />
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button
      className="
        absolute left-4 top-1/2 -translate-y-1/2
        bg-white text-gray-700
        w-10 h-10 rounded-full shadow-lg
        flex items-center justify-center
        hover:bg-[#38bdf8] hover:text-white
        transition
        z-20
      "
      onClick={onClick}
    >
      <ArrowLeft size={22} />
    </button>
  );
}
