import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const categories = [
  {
    title: "UV Printing",
    key: "uv-printing",
    image: "https://res.cloudinary.com/gjs/image/upload/t_lightbox_news,f_auto/methods/UV_Benchtop_1000x600px",
  },
  {
    title: "Digital Printing",
    key: "digital-printing",
    image: "https://www.dolphinbz.com/images/digital-print/main-print.png",
  },
  {
    title: "Vinyl Printing", // fixed key
    key: "vinyl-printing",
    image: "https://m.media-amazon.com/images/I/7123m5FkfJL._AC_.jpg",
  },
  {
    title: "Offset Printing",
    key: "offset-printing",
    image: "https://fizasign.com/1.jpg",
  },
  {
    title: "Screen Printing",
    key: "screen-printing",
    image: "https://3dcreative.lt/wp-content/uploads/2021/10/IMG_1381-scaled.jpeg",
  },
];

const categoryData = {
  "uv-printing": [
    { title: "UV Visiting Card", image: "https://5.imimg.com/data5/SELLER/Default/2024/10/456603681/AX/TZ/PD/109030167/business-cards-printing-service-500x500.jpg" },
    { title: "UV Brochure", image: "https://urbansignandprint.com/cdn/shop/products/2SidedHighGloss_1024x1024.jpg?v=1638258385" },
    { title: "UV Tag", image: "https://s1-ecp.printplace.com/133/SpotUVHangTags-pdp%20image.jpg" },
    { title: "UV Poster", image: "https://www.baliprintshop.com/image/cache/catalog/product/poster-printing-900x630.webp" },
    { title: "UV Sticker", image: "https://www.subli-star.com/wp-content/uploads/die-cut-stickers.webp" },
    { title: "UV Label", image: "https://www.stickermountain.com/wp-content/uploads/2022/11/raised-spot-uv-hero-shot-same-day-print.png" },
    { title: "UV Menu", image: "https://s3.amazonaws.com/allprocolor/Package1/global_categories/5901616423742g_cat.png" },
    { title: "UV Invitation Card", image: "https://image.made-in-china.com/2f0j00nCPiGNrqYQRL/Custom-Design-UV-Printing-Acrylic-Banquet-Birthday-Invitation-Wedding-Card.jpg" },
    { title: "UV Certificate", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/354896651/TS/UO/WJ/143762167/uv-foil-certificate-print.jpg" },
    { title: "UV ID Card", image: "https://img.freepik.com/free-vector/abstract-id-cards-template-concept_52683-45784.jpg?semt=ais_hybrid&w=740" },
  ],

  "digital-printing": [
    { title: "Digital Poster", image: "https://wincanton-print.com/wp-content/uploads/2021/06/PrintLeafletsFlyers-e1622540235895.png" },
    { title: "Digital Flyer", image: "https://lomelprinting.com/cdn/shop/products/IMG_2020_1024x1024.jpg?v=1663618015" },
    { title: "Digital Booklet", image: "https://discoverprint.ie/wp-content/uploads/2015/03/A5-digital-booklet-printing-2.png" },
    { title: "Digital Catalog", image: "https://image.made-in-china.com/202f0j00bkVoAqJcGCkI/Cheap-Digital-Printing-Service-Colorful-Brochure-Printing.webp" },
    { title: "Digital Magazine", image: "https://5.imimg.com/data5/SELLER/Default/2023/3/MK/HN/NG/60302835/digital-magazine-printing-services.jpg" },
    { title: "Digital Resume", image: "https://images.template.net/26326/Digital-Print-Operator-Resume-1-0.jpg" },
    { title: "Digital Menu", image: "https://www.menurepo.com/clientapp/assets/images/img-menurepo-digital-menu-design-multiuse-for-different-use-flyer-design-poster-design-print-design.png" },
    { title: "Digital Calendar", image: "https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/zazukeree7vxzmcfnwml/design-pro-creative-print-ready-digital-calendar-desk-wall.png" },
    { title: "Digital ID Card", image: "https://www.smartrfidcards.com/uploads/allimg/200706/2-1594004053-1406.jpg" },
    { title: "Digital Certificate", image: "https://5.imimg.com/data5/SELLER/Default/2024/1/379531413/LA/ST/RU/111933834/digital-certificate-printing.jpg" },
  ],

  "screen-printing": [
    { title: "Screen T-Shirt", image: "https://i.etsystatic.com/31184307/r/il/8c7376/3248058886/il_570xN.3248058886_r8k5.jpg" },
    { title: "Screen Poster", image: "https://www.screenprinting.com/cdn/shop/articles/the-process-of-screen-printing-multi-color-posters-deep-dive-with-colin-931497.jpg?v=1736579051&width=1600" },
    { title: "Screen Sticker", image: "https://5.imimg.com/data5/OV/VZ/WP/SELLER-70736096/label-stickers-printing-services-500x500.jpg" },
    { title: "Screen Label", image: "https://image.made-in-china.com/202f0j00nyUithNHfFpc/Custom-Care-Label-Best-Quality-Silk-Screen-Printing-Satin-Label-for-Clothing.webp" },
    { title: "Screen Envelope", image: "https://5.imimg.com/data5/SELLER/Default/2022/11/FK/QJ/LD/98975205/envelope-printing-services-500x500.jpg" },
    { title: "Screen Folder", image: "https://www.donsidepockets.co.uk/acatalog/Custom%20BindersTrimmed300.png" },
    { title: "Screen Bag", image: "https://5.imimg.com/data5/SELLER/Default/2023/5/312168512/FD/PB/AI/181627783/shopper-bianca-stampa-pantone-12-500x500.jpg" },
    { title: "Screen Cap", image: "https://i.ytimg.com/vi/P1WY__CHNvM/hqdefault.jpg" },
    { title: "Screen Card", image: "https://i.pinimg.com/736x/7d/58/ed/7d58ed3f53e257f821fcd726b2cb95f0.jpg" },
    { title: "Screen Keychain", image: "https://5.imimg.com/data5/SELLER/Default/2020/8/IK/CQ/HH/19295533/new-product.jpeg" },
  ],

  "offset-printing": [
    { title: "Offset Flyer", image: "https://degqkf7c4iqz7.cloudfront.net/theprints/images/products_gallery_images/Flyer2.jpg" },
    { title: "Offset Brochure", image: "https://5.imimg.com/data5/SELLER/Default/2022/5/GL/UY/RV/91340559/offset-brochure-printing-services.png" },
    { title: "Offset Booklet", image: "https://www.coreldraw.com/static/cdgs/images/learn/webinars/ebook-preparation-for-offset-printing-with-coreldraw/ebook-pic.jpg" },
    { title: "Offset Poster", image: "https://5.imimg.com/data5/SELLER/Default/2024/2/383094507/SS/GZ/ZC/23218445/poster-offset-printing-service.png" },
    { title: "Offset Letterhead", image: "https://www.deepakmultioffset.com/images/services/letterhead2.jpg" },
    { title: "Offset Invoice", image: "https://via.placeholder.com/300x200?text=Invoice" },
    { title: "Offset Receipt Book", image: "https://www.tri-cityprinting.com/images/invoice1.jpg" },
    { title: "Offset Packaging", image: "https://packmojo.com/cms_assets/offset_printed_mailer_box_outside_and_inside_print_mockup_c4c1daa2e1.jpg" },
    { title: "Offset Notebook", image: "https://image.made-in-china.com/202f0j00JsVbAiaqSrcZ/2024-Custom-Design-Page-Offset-Paper-Journal-Notebook-Printing.webp" },
    { title: "Offset Calendar", image: "https://cprint.am/assets/images/b4/b4b790_Calendars-Offset-Printing.jpg" },
  ],

  "vinyl-printing": [
    { title: "Vinyl Banner", image: "https://cdn.kwork.com/files/portfolio/t3/23/38775560ce8255814a12fbf69334231f984840e7-1650612123.jpg" },
    { title: "Vinyl Sticker", image: "https://thestickybrand.com/cdn/shop/files/MultiVinylStickerCollagePDPcopy.jpg?v=1701641144" },
    { title: "Vinyl Car Wrap", image: "https://m.media-amazon.com/images/I/711PmfKqf5L._AC_UF350,350_QL80_.jpg" },
    { title: "Vinyl Glass Film", image: "https://d2ngzhadqk6uhe.cloudfront.net/deanssign/images/product/Deans-Frosted-Vinyl.jpg" },
    { title: "Vinyl Labels", image: "https://www.discountstickerprinting.co.uk/Assets/User/394890-vinyl-sticker-printing.jpg" },
    { title: "Vinyl Posters", image: "https://aaprinters.co.uk/wp-content/uploads/2024/10/Custom-Vinyl-Banners-Printing.jpg" },
    { title: "Vinyl Signage", image: "https://www.thevinylcorporation.co.uk/wp-content/uploads/2019/11/sign-vinyl-the-vinyl-corporation.jpg" },
    { title: "Vinyl Backdrop", image: "https://www.dreamybackdrop.com/cdn/shop/products/CM-4947_800x.jpg?v=1545555977" },
    { title: "Vinyl Menu", image: "https://www.safaprinters.com/wp-content/uploads/2021/07/Menu-min.jpg" },
    { title: "Vinyl Rollup", image: "https://i.pinimg.com/736x/fb/4f/47/fb4f47d01940bdc81369b00163e02e73.jpg" },
  ],
};

const CategoryPopup = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const openPopup = (key) => {
    setSelectedCategory(key);
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closePopup = () => {
    setSelectedCategory(null);
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  // ✅ Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const currentItems = categoryData[selectedCategory] || [];

  return (
    <div className="bg-white px-6 py-2">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Explore Our Printing Categories
        </h2>

      <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  loop={true}
  autoplay={{ delay: 2000 }}
  slidesPerView={2} // ✅ Default for <640px (mobile)
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
>

          {categories.map((cat, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <div
                onClick={() => openPopup(cat.key)}
                className="group cursor-pointer flex flex-col items-center p-3 rounded-xl bg-white  hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <p className="mt-4 text-sm md:text-base font-medium text-gray-800 group-hover:text-[#07a6e7] text-center">
                  {cat.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl p-2"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-3xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-3xl font-bold text-center mb-2 text-[#000] bg-[#efeb49] py-3 rounded-md shadow">
              {categories.find((cat) => cat.key === selectedCategory)?.title}
            </h3>

            {currentItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-6">
                {currentItems.map((item, idx) => {
                  const message = encodeURIComponent(
                    `I'm interested in your services.\nProduct: ${item.title}\nImage: ${item.image}`
                  );
                  const whatsappLink = `https://api.whatsapp.com/send/?phone=923162508712&text=${message}`;

                  return (
                   <a
  key={idx}
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="relative w-[150px] h-[150px] sm:w-auto sm:h-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 group border-2 border-[#07a6e7]"
>
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-48 object-cover"
  />
  <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-end">
    <div className="w-full text-white text-center p-2 font-semibold text-sm bg-[rgba(0,0,0,0.5)] bg-gradient-to-t from-black/60 via-black/30 to-transparent">
      {item.title}
    </div>
  </div>
</a>

                  );
                })}
              </div>
            ) : (
              <div className="text-center text-gray-500 text-lg mt-10">
                No products available in this category.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPopup;