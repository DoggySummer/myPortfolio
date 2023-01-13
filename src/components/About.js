import React from 'react';

//! 사용 가능한 기술에 넣을 내용
// * react관련 : redux toolkit, SASS, react-query, styled component
// * 그 외 : html, css, js, tailwind, typescript, jquery, firebase
//! noticon에서 이미지 가지고 올 수 있음
/** 사용가능한 기술에 추가할 내용이 있음 */
const About = () => {
  return (
    <div className="main_content">
      <div className="about section">
        <div className="container">
          <div className="row">
            <div className="section_title">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about_content">
              <div className="row">
                <div className="about_text">
                  <h3>
                    I'm a afkamdfl and <span>Web Designer</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="personal_info">
                  <div className="row">
                    <div className="info_item">
                      <p>
                        Birthday : <span> 4월1일</span>
                      </p>
                    </div>
                    <div className="info_item">
                      <p>
                        age : <span> 31</span>
                      </p>
                    </div>
                    <div className="info_item">
                      <p>
                        website : <span> aaaaa</span>
                      </p>
                    </div>
                    <div className="info_item">
                      <p>
                        Email : <span> matthew9304@naver.com</span>
                      </p>
                    </div>
                    <div className="info_item">
                      <p>
                        연락처 : <span> 010-9477-6622</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skills">skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
