import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "فهد الحميدي",
      image: "/images/testimonial1.jpg",
      rating: 5,
      comment: "عمل رائع والمهندسون محترفون",
      position: "مدينة في الدمام"
    },
    {
      name: "يعقوب السعدي",
      image: "/images/testimonial2.jpg",
      rating: 5,
      comment: "عمل رائع والمهندسون محترفون",
      position: "مدينة في الدمام"
    },
    {
      name: "نور أحمد",
      image: "/images/testimonial3.jpg",
      rating: 4,
      comment: "عمل رائع والمهندسون محترفون",
      position: "مدينة في الدمام"
    },
    {
      name: "فهد الحميدي",
      image: "/images/testimonial4.jpg",
      rating: 5,
      comment: "عمل رائع والمهندسون محترفون",
      position: "مدينة في الدمام"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3600,
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

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#27420F] mb-16">آراء العملاء</h2>
        <div className="relative">
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#27420F] mb-2">{testimonial.name}</h3>
                  <div className="flex justify-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-3">{testimonial.comment}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .testimonials-slider .slick-dots {
          bottom: -40px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #27420F;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #27420F;
        }
        .testimonials-slider .slick-prev,
        .testimonials-slider .slick-next {
          width: 40px;
          height: 40px;
          background-color: #27420F;
          border-radius: 50%;
          z-index: 1;
        }
        .testimonials-slider .slick-prev:hover,
        .testimonials-slider .slick-next:hover {
          background-color: #1a2c0a;
        }
        .testimonials-slider .slick-prev:before,
        .testimonials-slider .slick-next:before {
          font-size: 24px;
        }
        .testimonials-slider .slick-prev {
          left: -50px;
        }
        .testimonials-slider .slick-next {
          right: -50px;
        }
      `}</style>
    </div>
  );
}

export default TestimonialsCarousel;
