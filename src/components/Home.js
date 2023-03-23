import React from 'react';

const Home = () => {
  return (
    <div className="main_content">
      <div className="home section">
        <div className="container">
          <div className="row">
            <div className="home_info">
              <h3 className="hello">
                안녕하세요! 제 이름은 <span className="name">정길웅</span>
                입니다!
              </h3>
              <h3 className="my_profession">
                저는 <span className="typing">프론트엔드 개발자</span>입니다
              </h3>
              <p>
                안녕하세요. 소통하는 웹 개발자 정길웅입니다.
                <br /> 사람들과 소통하며 개발하는 것이 저의 가장 큰 장점이라고
                생각합니다
              </p>
              <a href="https://github.com/DoggySummer" className="btn hire_me">
                더 보기
              </a>
            </div>
            <div className="home_img">
              <div className="img_border">
                <img src="pictures/myPic.jpg" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
