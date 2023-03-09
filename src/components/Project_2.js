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
                  <img src="pictures/saessakLog.png" />
                  <div>
                    <BsCheckLg /> 주요 기능
                    <p>
                      토큰을 활용한 회원가입/로그인, 게시글/댓글 무한스크롤,
                      <br />
                      게시글 좋아요/사용자 구독 시스템
                    </p>
                  </div>
                  <div>
                    <BsCheckLg /> 깃 주소
                    <p>
                      <a href="https://github.com/saessak-study/saessak-log-front">
                        https://github.com/saessak-study/saessak-log-front
                      </a>
                    </p>
                  </div>
                </div>
                <div className="project_rightSide">
                  <h3>-사진 업로드 커뮤니티 새싹로그</h3>
                  <p>
                    <span>사진을 업로드</span>하고
                    <span> 그 게시글에 좋아요</span>를 누를 수 있는 웹 커뮤니티
                    사이트입니다.
                    <br /> 기존 새싹챗 프로젝트의 연장선으로 새싹로그라는 이름을
                    붙였습니다.
                  </p>
                  <h3>-토큰을 활용한 로그인</h3>
                  <p>
                    백엔드에 로그인 정보를 주고 결과가 일치할 때{' '}
                    <span>토큰</span>을 주어{' '}
                    <span>세션스토리지/로컬스토리지</span>에 저장할 수 있게 설계
                    했습니다. 이를 통해 로그인 정보를 유지시켜{' '}
                    <span>좋아요, 구독, 비밀번호 변경, 댓글</span>등의 기능을
                    수행할 수 있도록 했습니다.
                  </p>
                  <p>
                    <h3>-리덕스 툴킷</h3>
                    <span>전역적인 상태관리</span>와{' '}
                    <span> 백엔드와의 통신</span>을 위하여 리덕스 툴킷을
                    사용하였습니다. <span>검색어, 이미지 자료, 회원정보</span>
                    등의 관리에 해당 툴킷을 사용했습니다.
                  </p>
                  <p>
                    <h3>-타입스크립트</h3>
                    <span>타입스크립트</span>를 도입하면서 기존에 발생할 수
                    있었던 타입오류를 사전에 방지하며 프로젝트의 완성도를
                    높였습니다.
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
