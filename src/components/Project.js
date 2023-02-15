import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Project = () => {
  return (
    <div className="main_content">
      <div className="section project">
        <div className="container">
          <div className="row">
            <div className="section_title">
              <h2>Project</h2>
            </div>
          </div>
          <div className="row">
            <div className="project_card">
              <div className="project_heading">
                <h2>My Last Projects </h2>
              </div>
              <Swiper
                className="swiper_container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                navigation={true}
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
