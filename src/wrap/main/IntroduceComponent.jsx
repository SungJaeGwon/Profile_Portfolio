import React from 'react';
import './main_css/introduce.scss';
import { useEffect, useState } from 'react';

export default function IntroduceComponent() {
  useEffect(() => {
    const divElement = document.getElementById('myself1');
    const str = divElement.textContent.trim();
    let i = 0;

    divElement.textContent = '';

    const typingEffect = () => {
      i++;
      divElement.textContent = str.slice(0, i) + '|';

      if (i < str.length) {
        setTimeout(typingEffect, 50);
      } else {
        divElement.textContent = str;
      }
    };
    setTimeout(typingEffect, 100);
  }, []);
  useEffect(() => {
    const divElement = document.getElementById('myself2');
    const str = divElement.textContent.trim();
    let i = 0;

    divElement.textContent = '';

    const typingEffect = () => {
      i++;
      divElement.textContent = str.slice(0, i) + '|';

      if (i < str.length) {
        setTimeout(typingEffect, 50);
      } else {
        divElement.textContent = str;
      }
    };
    setTimeout(typingEffect, 1200);
  }, []);
  useEffect(() => {
    const divElement = document.getElementById('myself3');
    const str = divElement.textContent.trim();
    let i = 0;

    divElement.textContent = '';

    const typingEffect = () => {
      i++;
      divElement.textContent = str.slice(0, i) + '|';

      if (i < str.length) {
        setTimeout(typingEffect, 50);
      } else {
        divElement.textContent = str;
      }
    };
    setTimeout(typingEffect, 2400);
  }, []);
  useEffect(() => {
    const divElement = document.getElementById('myself4');
    const str = divElement.textContent.trim();
    let i = 0;

    divElement.textContent = '';

    const typingEffect = () => {
      i++;
      divElement.textContent = str.slice(0, i) + '|';

      if (i < str.length) {
        setTimeout(typingEffect, 50);
      } else {
        divElement.textContent = str;
      }
    };
    setTimeout(typingEffect, 3800);
  }, []);

  return (
    <section id="introduce">
      <div className="container">
        <div className="myName">
          <svg width={1000} height={150} viewBox="-50 -130 1000 100">
            <text x={0} y={-40}>
              S
            </text>
            <text x={70} y={-40}>
              U
            </text>
            <text x={150} y={-40}>
              N
            </text>
            <text x={230} y={-40}>
              G
            </text>
            <text x={310} y={-40}>
              J
            </text>
            <text x={370} y={-40}>
              A
            </text>
            <text x={440} y={-40}>
              E
            </text>
            <text x={540} y={-40}>
              G
            </text>
            <text x={620} y={-40}>
              W
            </text>
            <text x={720} y={-40}>
              O
            </text>
            <text x={800} y={-40}>
              N
            </text>
          </svg>
        </div>
        <div className="typing_box">
          <div id="myself1" className="myself t1">
            <p>
              <span>안녕하세요. 코딩에 푹 빠진 개발자 권성재입니다 :)</span>
            </p>
          </div>
          <div id="myself2" className="myself t2">
            <p>
              <span>
                남다른 책임감과 끈기로 완벽함을 추구하는 근면성실 열정파입니다.
              </span>
            </p>
          </div>
          <div id="myself3" className="myself t3">
            <p>
              <span>
                풀스텍 마스터를 꿈구며 항상 노력하고 있습니다! 제가
                궁금하시다면?
              </span>
            </p>
          </div>
          <div id="myself4" className="myself t4">
            <p>
              <span>#React #책임감 #열정 #ESTJ #하드코딩 #긍정적인 마인드</span>
            </p>
          </div>
        </div>
        <div className="button_box">
          <button>
            권성재 더 알아보기<i className="fa fa-hand-o-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
