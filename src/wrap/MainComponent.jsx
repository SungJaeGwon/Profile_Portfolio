import React from 'react';
import './css/main.scss';
import IntroduceComponent from './main/IntroduceComponent';
import Middle from './main/Middle';
import AboutMe from './main/AboutMe';
import SkillsComponent from './main/SkillsComponent';
import PortfolioComponent from './main/PortfolioComponent';

export default function MainComponent() {
  return (
    <main id="main">
      <IntroduceComponent />
      <Middle />
      <AboutMe />
      <SkillsComponent />
      <PortfolioComponent />
    </main>
  );
}
