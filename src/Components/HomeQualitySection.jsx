import { motion } from "framer-motion";
// import qualityImg from "../../public/vite.svg";
// import valueImg from "../../public/vite.svg";
// import speedImg from "../../public/vite.svg";
// import happyImg from "../../public/vite.svg";
// import advisorImg from "../../public/vite.svg";
// import productsImg from "../../public/vite.svg";

const features = [
  { title: "Committed to quality", img: "https://img.icons8.com/?size=100&id=AgOCBy0dWH6w&format=png&color=07a6e7" },
  { title: "Value for money", img: 'https://img.icons8.com/?size=100&id=61493&format=png&color=07a6e7' },
  { title: "Speed & Reliability", img: 'https://img.icons8.com/?size=100&id=bNJ42RqK7ifw&format=png&color=07a6e7' },
  { title: "Happy clients first", img: 'https://img.icons8.com/?size=100&id=fGjtImaba9j5&format=png&color=07a6e7' },
  { title: "Professional adviser", img: 'https://img.icons8.com/?size=100&id=GLhaUDx7Wn5l&format=png&color=07a6e7' },
  { title: "Tons of products", img: 'https://img.icons8.com/?size=100&id=49094&format=png&color=07a6e7' },
];

const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function HomeQualitySection() {
  return (
    <div className="bg-white text-black py-6 px-2 sm:px-4"> {/* Reduced padding */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3"> {/* Reduced gap */}
          {features.map((feature, index) => (
            <motion.div
  key={index}
  custom={index}
  initial="hidden"
  animate="visible"
  variants={boxVariants}
  className="group bg-[#f5f5f5] p-3 rounded-xl 
             shadow-[0_4px_20px_rgba(0,0,0,0.5)] 
             hover:shadow-[0_8px_30px_rgba(7,166,231,0.2)] 
             border border-transparent 
             hover:border-[#07a6e7] 
             transition-all duration-300 
             flex flex-col items-center text-center 
             cursor-pointer hover:-translate-y-1.5"
>
  <img
    src={feature.img}
    alt={feature.title}
    className="w-10 h-10 object-contain mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
  />
  <h3 className="text-sm font-semibold text-[#07a6e7] mb-1">
    {feature.title}
  </h3>
  <p className="text-xs text-black/70">We stand behind our promise.</p>
</motion.div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeQualitySection;
