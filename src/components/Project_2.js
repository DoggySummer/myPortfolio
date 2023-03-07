import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsCheckLg } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Project_2 = () => {
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
              <h2>새싹로그</h2>
              <div className="project_content">
                <div className="project_leftSide">
                  <img src="pictures/saessak2.png" />
                  <div>
                    <BsCheckLg /> 주요 기능
                    <p> 토큰을 활용한 회원가입/로그인, 실시간 채팅으로 소통 </p>
                  </div>
                  <div>
                    <BsCheckLg /> 깃 주소
                    <p>
                      <a href="https://github.com/saessak-study/saessak-chat-front">
                        https://github.com/saessak-study/saessak-chat-front
                      </a>
                    </p>
                  </div>
                </div>
                <div className="project_rightSide">
                  <h3>-실시간 확인 기능이 있는 새싹챗</h3>
                  <p>
                    <span>실시간으로 유저의 온오프라인의 정보를 확인</span>할 수
                    있는 채팅 웹사이트입니다.
                    <br /> 개발에 참여한 멤버가 공부를 시작한 지 얼마 안 된
                    새내기들이라는 점에서 착안하여 "새싹챗"이라는 이름이
                    탄생했습니다.
                  </p>
                  <h3>-SCSS, SockJS, SWR의 활용</h3>
                  <p>
                    <span>SCSS</span>를 활용한 반응형 디자인 및{' '}
                    <span>SockJS</span>를 활용한 백엔드와의 소통 방식을
                    선택했습니다. 최근 트랜드와 효율성 두 가지를 모두
                    고려하였습니다. 또한 <span>SWR</span>을 활용하여 전역적인
                    상태관리(회원 정보)를 하고 있습니다.
                  </p>
                  <p>
                    <h3>-백엔드와의 소통</h3>
                    <span>백엔드와 협업</span>하는 과정에서 협업툴인{' '}
                    <span>Slack</span>을 활용하여 회의 기록을 남기고 소통하는
                    과정에 대해 배우게 되었습니다.
                  </p>
                </div>
              </div>

              {/* <Swiper
                className="swiper_container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
              >
                <SwiperSlide>
                  <div className="project_oneCard">
                    <img src="pictures/saessak2.png" />
                    <p>이렇게 저렇게 적는 로렘 입숨</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_2;
