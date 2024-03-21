import React from 'react';
import './main_css/skills.scss';

export default function SkillsComponent() {
  const [state, setState] = React.useState({
    isAnimation: false,
  });

  React.useEffect(() => {
    let isAnimation = false;
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 1400) {
        isAnimation = true;
      }
      setState({
        ...state,
        isAnimation: isAnimation,
      });
    });
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div
          id="topTitle"
          className={`title${state.isAnimation ? ' ani' : ''}`}
        >
          <h2>
            <span>
              <i className="fa fa-plus random_drop_down"></i>
            </span>
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
          </h2>
        </div>
        <div className="content">
          <div className="left">
            <div className={`skills_LB ${state.isAnimation ? ' ani' : ''}`}>
              <ul className="lb_box">
                <div className="box_title">
                  <strong>Front-end</strong>
                </div>
                <li>
                  <span>
                    <img src="./images/skills/html.svg" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/css.svg" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/JavaScript.svg" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/Sass.svg" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/React-Dark.svg" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/Redux.svg" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/reduxtoolkit.png" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/JQuery.svg" alt="" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./images/skills/swiperjs.png" alt="" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className={`skills_RB ${state.isAnimation ? ' ani' : ''}`}>
              <div className="gap odd">
                <ul className="lb_box">
                  <div className="box_title">
                    <strong className="bstext">Back-end</strong>
                  </div>
                  <li className="back">
                    <span>
                      <img src="./images/skills/PHP-Light.svg" alt="" />
                    </span>
                  </li>
                  <li className="back">
                    <span>
                      <img src="./images/skills/Java-Light.svg" alt="" />
                    </span>
                  </li>
                  <li className="back">
                    <span>
                      <img src="./images/skills/NodeJS-Light.svg" alt="" />
                    </span>
                  </li>
                  <li className="back">
                    <span>
                      <img src="./images/skills/ajax.svg" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="gap">
                <ul className="lb_box">
                  <div className="box_title">
                    <strong className="bstext1">Development tool</strong>
                  </div>
                  <li className="even">
                    <span>
                      <img src="./images/skills/React-Dark.svg" alt="" />
                    </span>
                  </li>
                  <li className="even">
                    <span>
                      <img src="./images/skills/Eclipse-Light.svg" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="gap odd">
                <ul className="lb_box">
                  <div className="box_title">
                    <strong>Version Control</strong>
                  </div>
                  <li>
                    <span>
                      <img src="./images/skills/dothome.gif" alt="" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src="./images/skills/Git.svg" alt="" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src="./images/skills/Github-Light.svg" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="gap">
                <ul className="lb_box">
                  <div className="box_title">
                    <strong>Database</strong>
                  </div>
                  <li className="even">
                    <span>
                      <img src="./images/skills/MySQL-Light.svg" alt="" />
                    </span>
                  </li>
                  <li className="even">
                    <span>
                      <img src="./images/skills/mariadb.svg" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
