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
                    저는 <span>프론트엔드 개발자</span>입니다.
                    <p>
                      실력있는 프론트엔드 개발자가 되기 위해 리액트를 공부하고
                      있으며 프로그래머로서의 주요 자질이라고 할 수 있는 협업
                      능력을 키우기 위해서 시간이 날 때 마다 스터디를 만들거나
                      참석해 공부하고 있습니다.
                      <br />
                      제가 공부한 스터디로는 JS딥다이브 완독, 리액트를 다루는
                      기술 완독, 리팩토링 완독, CS, 면접 스터디 등이 있으며 매
                      스터디에 참석할 때 마다 노션에 기록하여 공부한 내용을 잊지
                      않기 위해 노력하고 있습니다
                    </p>
                  </h3>
                </div>
              </div>
              <div className="row skillRow">
                <div className="personal_info">
                  <div className="row">
                    <div className="info_item">
                      <p>
                        깃허브 링크 <span>https://github.com/DoggySummer</span>
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
                <div className="skills">
                  <span>My Skills</span>
                  <div className="skills_item">
                    <img
                      className="skillImg"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png"
                    ></img>
                    <img
                      className="skillImg"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567749614/noticon/zgdaxpaif5ojeduonygb.png"
                    ></img>
                  </div>
                  <div className="skills_item">
                    <img
                      className="skillImg"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png"
                    ></img>
                    <img
                      className="skillImg"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png"
                    ></img>
                    <img
                      className="skillImg"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png"
                    ></img>
                    <img
                      className="skillImg"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007298/noticon/zcszelqcacn0cyqpcmjm.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
