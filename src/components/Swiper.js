// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swiperjj = () => {
  return (
    <div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swipeswipe"
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="https://user-images.githubusercontent.com/90492088/213950861-a0c3987e-9954-4760-b5a6-b8c67ae623e3.gif"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://user-images.githubusercontent.com/90492088/213951261-418f8873-aa82-49b3-abac-de6d36780222.gif"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://user-images.githubusercontent.com/90492088/213951286-9b8d9854-a4dd-427d-ada4-3a82e633cd1a.gif"></img>
        </SwiperSlide>
      </Swiper> */}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Swiperjj;
