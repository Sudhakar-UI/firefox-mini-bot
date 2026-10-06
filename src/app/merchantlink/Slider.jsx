"use client";

import React, { useState } from "react";
import { Image } from "react-bootstrap";

function Slider() {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  const percentage = (value / 100) * 100;

  return (
    <div className="slider-wrapperbot">
      <div className="slider-containerbot">
        <input
          type="range"
          min="0"
          max="100"
          step="25"
          value={value}
          onChange={handleChange}
          className="custom-sliderbot"
          style={{
            background: `linear-gradient(to right, #ff7a00 ${percentage}%, #ddd ${percentage}%)`
          }}
        />

        {/* Tick dots */}
        <div className="slider-ticksbot">
          {[0, 25, 50, 75, 100].map((tick) => (
            <span
              key={tick}
              className={`tickbot ${value >= tick ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="slider-label-boxbot">
        <p>The link is valid for</p>
        <span>
          <Image
            src="/assets/images/time-icon.svg"
            width={14}
            height={14}
            alt="time"
          />
          {value} hours
        </span>
      </div>
    </div>
  );
}

export default Slider;