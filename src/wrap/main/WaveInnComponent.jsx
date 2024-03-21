import React from 'react';
import './main_css/wave_inn.scss';

export default function WaveInnComponent() {
  return (
    <div class="wave_box">
      <div class="coast">
        <div class="wave-rel-wrap">
          <div class="wave"></div>
        </div>
      </div>
      <div class="coast delay">
        <div class="wave-rel-wrap">
          <div class="wave delay"></div>
        </div>
      </div>
      <div class="text I">I</div>
      <div class="text N">N</div>
      <div class="text N2">N</div>
      <div class="text I2">I</div>
      <div class="text S">S</div>
      <div class="text F">F</div>
      <div class="text R">R</div>
      <div class="text E">E</div>
      <div class="text E2">E</div>
    </div>
  );
}
