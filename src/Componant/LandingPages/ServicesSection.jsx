import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service1 from '../../assests/images/Service.jpg'
import service2 from '../../assests/images/Vector.svg'

function ServicesSection() {
  const services = [
    {
      title: "الكهرباء",
      description: "مراجعة التمديدات، القواطع، وسلامة التوصيلات الكهربائية.",
      image: service1,
      icon: service2
    },
    {
      title: "الجدران",
      description: "التأكد من سلامة الجدران من التشققات، الرطوبة، أو العيوب الإنشائية.",
      image: service1,
      icon: service2
    },
    {
      title: "الأساسيات",
      description: "فحص استقرار المبنى من القاعدة والتأكد من خلوه من العيوب أو الشقوق.",
      image: service1,
      icon: service2
    }
  ];

  const settings = {
    dots: true,
    infinite: true,



    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#27420F] mb-16">خدماتنا</h2>
        <div className="relative">
          <Slider {...settings} className="service-slider">
            {services.map((service, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#27420F] p-2 rounded-tl-lg">
                      <img 
                        src={service.icon} 
                        alt="" 
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                  <div className="p-6 text-right">
                    <h3 className="text-xl font-bold text-[#27420F] mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .service-slider .slick-dots {
          bottom: -40px;
        }
        .service-slider .slick-dots li button:before {
          font-size: 12px;
          color: #27420F;
        }
        .service-slider .slick-dots li.slick-active button:before {
          color: #27420F;
        }
        .service-slider .slick-prev,
        .service-slider .slick-next {
          width: 40px;
          height: 40px;
          background-color: #27420F;
          border-radius: 50%;
          z-index: 1;
        }
        .service-slider .slick-prev:hover,
        .service-slider .slick-next:hover {
          background-color: #1a2c0a;
        }
        .service-slider .slick-prev:before,
        .service-slider .slick-next:before {
          font-size: 24px;
        }
        .service-slider .slick-prev {
          left: -50px;
        }
        .service-slider .slick-next {
          right: -50px;
        }
      `}</style>
    </div>
  );
}

export default ServicesSection;
