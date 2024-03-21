import React from 'react';
import './main_css/AboutMe.scss';

export default function AboutMe() {
  const DOWNLOAD_FILE_URL = 'http://localhost:3000/resume.hwp';
  const onClickDownload = (url) => {
    fetch(url)
      .then((Response) => Response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const [state, setState] = React.useState({
    isAnimation: false,
  });

  React.useEffect(() => {
    let isAnimation = false;
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 50) {
        isAnimation = true;
      }
      setState({
        ...state,
        isAnimation: isAnimation,
      });
    });
  }, []);

  return (
    <section id="aboutme">
      <div className="left">
        <div className={`text_box${state.isAnimation ? ' ani' : ''}`}>
          <h2 className="subTitle">
            <span className="title">Let me</span>
            <span className="title">Introduce</span>
            <span className="title">My </span>
            <span className="title">Information</span>
          </h2>
        </div>
      </div>
      <div id="container" className="container">
        <div
          id="topTitle"
          className={`title${state.isAnimation ? ' ani' : ''}`}
        >
          <h2>
            <span>
              <i className="fa fa-plus random_drop_down"></i>
            </span>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>E</span>
          </h2>
        </div>
        <div className="content">
          <ul className={`info_box ${state.isAnimation ? ' ani' : ''}`}>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-user"></i>
                  </span>
                  <div className="detail_sub">
                    <h3 class="haunted-text">이름</h3>
                    <strong class="haunted-text">권성재</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-birthday-cake"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>생년월일</h3>
                    <strong>1994.09.12</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>주소</h3>
                    <strong>경기도 부천시</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-envelope-square"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>이메일</h3>
                    <strong>gwonsj94@naver.com</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-phone"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>전화번호</h3>
                    <strong>010-9965-4607</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-download"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>이력서</h3>
                    <button
                      id="file-input"
                      onClick={() => {
                        onClickDownload(DOWNLOAD_FILE_URL);
                      }}
                    >
                      {' '}
                      <i class="fa fa-chevron-circle-right"></i> 다운로드 하기
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
