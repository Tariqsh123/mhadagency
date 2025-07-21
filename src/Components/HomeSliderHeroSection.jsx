import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useState } from 'react';
import '../App.css';

import uvslideimg from '../../public/uv-slide-image.png';
import ledlideimg from '../../public/led-sign-image.png';
import sublimationimg from '../../public/sublimation-slide-image.png';
import exhibitionstallfabriction from '../../public/exhibition-stall-fabriction.png';
import backlitfrontlitbanner from '../../public/backlit-front-lit-banner.png';
import indooroutdoor from '../../public/indoor-outdoor-branding.png';
import offsetprintingandstationery from '../../public/offset-printing-and-stationery.png';
import corporategift from '../../public/corporate-gift.png';
import vinylprinting from '../../public/vinyl-printing.png';

const slides = [
  {
    title: "UV & Digital Printing",
    subtitle: "Eco-Friendly • Long-Lasting Impact",
    description: "High-resolution prints on a variety of surfaces—ideal for promotions, packaging, and displays.",
    button: "Explore UV Prints",
    image: uvslideimg,
  },
  {
    title: "3D Letters & LED Signs",
    subtitle: "Glow With Innovation",
    description: "Make your brand pop with stunning 3D acrylic, metal, or neon signboards custom-designed to impress.",
    button: "Get a Custom Sign",
    image: ledlideimg,
  },
  {
    title: "Sublimation Products",
    subtitle: "Print Your Memories",
    description: "Personalized gifts like mugs, t-shirts, and cushions with premium sublimation technology.",
    button: "Shop Sublimation",
    image: sublimationimg,
  },
  {
    title: "Exhibition Stall Fabrication",
    subtitle: "Crafted for Your Brand",
    description: "Build modern, professional stalls with backdrops, counters, and signage tailored for your next expo.",
    button: "Book Stall Design",
    image: exhibitionstallfabriction,
  },
  {
    title: "Backlit & Frontlit Flex Boards",
    subtitle: "Shine Day or Night",
    description: "Durable, high-quality flex boards ideal for long-term outdoor visibility and brand impact.",
    button: "Order Flex Boards",
    image: backlitfrontlitbanner,
  },
  {
    title: "Indoor & Outdoor Branding",
    subtitle: "From Storefronts to Billboards",
    description: "Complete branding packages—from wall vinyls to outdoor hoardings, all tailored for you.",
    button: "Start Branding",
    image: indooroutdoor,
  },
  {
    title: "Offset Printing & Stationery",
    subtitle: "Professional Office Essentials",
    description: "Letterheads, business cards, brochures & envelopes—all with premium offset printing.",
    button: "Print Stationery",
    image: offsetprintingandstationery,
  },
  {
    title: "Corporate Gifts & Giveaways",
    subtitle: "Build Brand Loyalty",
    description: "Branded gift items such as pens, diaries, mugs, and USBs—perfect for corporate promotions.",
    button: "Browse Gifts",
    image: corporategift,
  },
  {
    title: "Vinyl Branding",
    subtitle: "Stylish. Strong. Sticky.",
    description: "Custom vinyl wraps and decals for windows, walls, and vehicles to boost visibility.",
    button: "Vinyl Branding",
    image: vinylprinting,
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const HomeSliderHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full bg-[#121213] py-05 md:py-0">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        grabCursor={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-4 md:px-12 max-w-7xl mx-auto min-h-fit md:min-h-[60vh] overflow-hidden gap-0 md:gap-6">

              
              {/* Text Section */}
              <motion.div
                key={slide.title + currentSlide}
                className="text-white md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              >
                <motion.h2
                  custom={0}
                  variants={textVariants}
                  className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
                >
                  {slide.title}
                </motion.h2>
                <motion.h4
                  custom={1}
                  variants={textVariants}
                  className="text-lg sm:text-xl md:text-2xl text-[#07a6e7] font-semibold"
                >
                  {slide.subtitle}
                </motion.h4>
                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-sm sm:text-base text-gray-300"
                >
                  {slide.description}
                </motion.p>
                <motion.a
                  custom={3}
                  variants={textVariants}
                  href="https://api.whatsapp.com/send/?phone=923162508712&text=I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-[#07a6e7] text-white font-semibold rounded hover:bg-[#0596cf] transition mx-auto md:mx-0"
                >
                  {slide.button}
                </motion.a>
              </motion.div>

              {/* Image Section */}
              <motion.div
  key={slide.image + currentSlide}
  custom={4}
  variants={textVariants}
  initial="hidden"
  animate="visible"
  className="hidden md:flex md:w-1/2 justify-center items-center"
>

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px] h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderHeroSection;
