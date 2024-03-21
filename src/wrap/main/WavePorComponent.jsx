import React from 'react';
import './main_css/wave_por.scss';

export default function WavePorComponent() {
  return (
    <div class="wave_box_pro">
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
      <div class="text p">뽀</div>
      <div class="text r">로</div>
      <div class="text r2">로</div>
      <div class="text m">몰</div>
    </div>
  );
}
