import React from 'react';

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
            <div className="project_heading">
              <h2>My Last Projects : </h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
