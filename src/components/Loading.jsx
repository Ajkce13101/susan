import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div class="pl__bars">
          <div class="pl__bar">
            <div class="pl__bar-s"></div>
            <div class="pl__bar-t"></div>
            <div class="pl__bar-l"></div>
            <div class="pl__bar-r"></div>
          </div>
          <div class="pl__bar">
            <div class="pl__bar-s"></div>
            <div class="pl__bar-t"></div>
            <div class="pl__bar-l"></div>
            <div class="pl__bar-r"></div>
          </div>
          <div class="pl__bar">
            <div class="pl__bar-s"></div>
            <div class="pl__bar-t"></div>
            <div class="pl__bar-l"></div>
            <div class="pl__bar-r"></div>
          </div>
          <div class="pl__bar">
            <div class="pl__bar-s"></div>
            <div class="pl__bar-t"></div>
            <div class="pl__bar-l"></div>
            <div class="pl__bar-r"></div>
          </div>
        </div>
        <div className="loader--text font-bold text-xl text-white"></div>
      </div>
    </div>
  );
};

export default Loading;
