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
                저는... <span className="typing">web designer</span>
              </h3>
              <p>lorem ipsum blahblahblah</p>
              <a href="#contact" className="btn hire_me">
                Hire Me
              </a>
            </div>
            <div className="home_img">
              <img src="pictures/myPic.jpg" alt="#"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
