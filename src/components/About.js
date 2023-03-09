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
                    저는 <span>소통</span>을 중요하게 생각하는 프론트엔드
                    개발자입니다.
                    <p>
                      저는 프론트엔드 개발에 높은 관심과 열정을 가지고 있습니다.
                      최근까지도 자바스크립트, 리액트, 타입스크립트 등과 같은
                      기술 스택을 사용하여 웹 사이트를 개발하였습니다. 제가 가장
                      강조하고 싶은 역량은 바로 소통을 바탕으로하는 협업
                      능력입니다. "새싹챗" 그리고 "새싹로그"라는 프로젝트를
                      진행하면서 팀원들과의 소통과 협업을 통해 발생한 문제들을
                      해결해왔습니다. 이러한 경험은 저를 더 나은 개발자로
                      성장하게 해주었습니다.
                      <br />
                      <br />
                      이전에 근무한 회사에서는 유저 인터페이스 및 사용자 경험을
                      개선하기 위한 프로젝트를 수행하였습니다. 웹 사이트의
                      인터페이스를 디자인하고 개발하는 과정에서 제가 중점적으로
                      고려한 것은 바로 유저의 사용성과 편의성입니다. 이를 위해
                      다양한 UX/UI 디자인 패턴을 익혀 적용하였습니다.
                      <br />
                      {/* 실력 있는 프론트엔드 개발자가 되기 위해 리액트를 공부하고
                      있으며 프로그래머의 주요 자질이라고 할 수 있는 협업 능력을
                      키우기 위해서 시간이 날 때마다 스터디를 만들거나 참석해
                      공부하고 있습니다.
                      <br />
                      제가 공부한 스터디로는 JS 딥다이브 완독, 리액트를 다루는
                      기술 완독, 리팩토링 완독, CS, 면접 스터디 등이 있으며 매
                      스터디에 참석할 때마다 노션에 기록하여 공부한 내용을 잊지
                      않기 위해 노력하고 있습니다. */}
                    </p>
                  </h3>
                </div>
              </div>
              <div className="row skillRow">
                <div className="personal_info">
                  <div className="row">
                    <div className="info_item">
                      <p>
                        깃허브 링크 :&nbsp;
                        <span>
                          <a href="https://github.com/DoggySummer">
                            https://github.com/DoggySummer
                          </a>
                        </span>
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
