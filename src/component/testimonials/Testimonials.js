import React from "react";
import TesImg from "../../assets/img/testimonials-2.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="testimonial-item">
  <div className="d-flex">
    <img
      src={TesImg}
      className="testimonial-img flex-shrink-0"
      alt=""
    />
    <div>
      <h3>Saul Goodman</h3>
      <h4>Ceo &amp; Founder</h4>
      <div className="stars">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      </div>
    </div>
  </div>
  <p>
    <i className="bi bi-quote quote-icon-left" />
    <span>
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
    </span>
    <i className="bi bi-quote quote-icon-right" />
  </p>
</div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="testimonial-item">
  <div className="d-flex">
    <img
      src={TesImg}
      className="testimonial-img flex-shrink-0"
      alt=""
    />
    <div>
      <h3>Saul Goodman</h3>
      <h4>Ceo &amp; Founder</h4>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  </div>
  <p>
    <i className="bi bi-quote quote-icon-left" />
    <span>
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
    </span>
    <i className="bi bi-quote quote-icon-right" />
  </p>
</div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="testimonial-item">
  <div className="d-flex">
    <img
      src={TesImg}
      className="testimonial-img flex-shrink-0"
      alt=""
    />
    <div>
      <h3>Saul Goodman</h3>
      <h4>Ceo &amp; Founder</h4>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  </div>
  <p>
    <i className="bi bi-quote quote-icon-left" />
    <span>
      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
      et. Maecen aliquam, risus at semper.
    </span>
    <i className="bi bi-quote quote-icon-right" />
  </p>
</div>

      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;