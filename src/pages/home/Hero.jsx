// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import Img1 from "../../assets/hero-carosel/img1.jpeg";
// import Img2 from "../../assets/hero-carosel/img2.jpeg";
// import Img3 from "../../assets/hero-carosel/img3.jpeg";
// import Img4 from "../../assets/hero-carosel/img4.jpeg";

// // import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import { Autoplay, Pagination } from "swiper/modules";

// const Hero = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
//         <div className="md:w-1/2 w-full text-center">
//           <h1 className="md:text-5xl text-3xl font-bold md:leading-tight">
//             Hotels With Rooftop Pools Near Me
//           </h1>
//           <p className="py-4">
//             Discovering hotels with rooftop pools near you! Whether you're
//             planning a luxurious staycation or a weekend, gateway, our curated
//             selection of hotels with rooftop pools will help you beat the heat
//             and elevate your travel experience.
//           </p>
//         </div>

//         <div className="md:w-1/2 w-full mx-auto ">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={10}
//             pagination={{
//               clickable: true,
//             }}
//             autoplay={{
//               delay: 1500,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 1,
//                 spaceBetween: 40,
//               },
//               1024: {
//                 slidesPerView: 1,
//                 spaceBetween: 50,
//               },
//             }}
//             modules={[Pagination, Autoplay]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <img
//                 src={Img1}
//                 alt=""
//                 className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={Img2}
//                 alt=""
//                 className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={Img3}
//                 alt=""
//                 className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={Img4}
//                 alt=""
//                 className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8"
//               />
//             </SwiperSlide>
//             {/* <SwiperSlide>Slide 2</SwiperSlide>
//             <SwiperSlide>Slide 3</SwiperSlide>
//             <SwiperSlide>Slide 4</SwiperSlide>
//             <SwiperSlide>Slide 5</SwiperSlide>
//             <SwiperSlide>Slide 6</SwiperSlide>
//             <SwiperSlide>Slide 7</SwiperSlide>
//             <SwiperSlide>Slide 8</SwiperSlide>
//             <SwiperSlide>Slide 9</SwiperSlide> */}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "../../assets/hero-carosel/img1.jpeg";
import Img2 from "../../assets/hero-carosel/img2.jpeg";
import Img3 from "../../assets/hero-carosel/img3.jpeg";
import Img4 from "../../assets/hero-carosel/img4.jpeg";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8 font-[Poppins]">
        <div className="md:w-1/2 w-full text-center">
          <h1 className="md:text-5xl text-3xl font-extrabold md:leading-tight text-gray-900 tracking-wide">
            Hotels With Rooftop Pools Near Me
          </h1>
          <p className="py-4 text-lg text-gray-700 leading-relaxed font-medium">
            Discovering hotels with rooftop pools near you! Whether you're
            planning a luxurious staycation or a weekend getaway, our curated
            selection of hotels with rooftop pools will help you beat the heat
            and elevate your travel experience.
          </p>
        </div>

        <div className="md:w-1/2 w-full mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={Img1}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8 rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img2}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8 rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img3}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8 rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img4}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80 px-1 p-8 rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
