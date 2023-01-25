// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Swiperjj = () => {
  return (
    <div className="ss">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swipeswipe"
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
      </Swiper>
    </div>
  );
};
export default Swiperjj;
