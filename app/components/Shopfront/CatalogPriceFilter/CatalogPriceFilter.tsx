import { useState, useEffect, ChangeEvent } from 'react';

/* Project */
import './CatalogPriceFilter.css';

export const CatalogPriceFilter = () => {
  const initialMinPrice = 40;
  const initialMaxPrice = 6900;
  const minGap = 500;

  const [sliderMinValue] = useState(initialMinPrice);
  const [sliderMaxValue] = useState(initialMaxPrice);

  const [minVal, setMinVal] = useState(initialMinPrice);
  const [maxVal, setMaxVal] = useState(initialMaxPrice);
  const [minInput, setMinInput] = useState(initialMinPrice);
  const [maxInput, setMaxInput] = useState(initialMaxPrice);

  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setSliderTrack();
  }, [minVal, maxVal]);

  const slideMin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= sliderMinValue && maxVal - value >= minGap) {
      setMinVal(value);
      setMinInput(value);
    }
  };

  const slideMax = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value <= sliderMaxValue && value - minVal >= minGap) {
      setMaxVal(value);
      setMaxInput(value);
    }
  };

  const setSliderTrack = () => {
    const minPercent =
      ((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
    const maxPercent =
      ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

    setMinThumb(minPercent);
    setMaxThumb(100 - maxPercent);
  };

  const startDrag = () => {
    setIsDragging(true);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <>
      <button type="button" className="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h5 className="font-poppins font-semibold text-[#333] uppercase mb-8">
        Filtrar por precio
      </h5>

      <div className="relative w-full max-w-xl pb-8 mb-6 border-b">
        <div className="double-slider-box">
          <div className="range-slider">
            <input
              type="range"
              min={sliderMinValue}
              max={sliderMaxValue}
              value={minVal}
              onChange={slideMin}
              onMouseDown={startDrag}
              onMouseUp={stopDrag}
              onTouchStart={startDrag}
              onTouchEnd={stopDrag}
              className="min-val bg-primary-700 opacity-0 z-20"
            />
            <input
              type="range"
              min={sliderMinValue}
              max={sliderMaxValue}
              value={maxVal}
              onChange={slideMax}
              onMouseDown={startDrag}
              onMouseUp={stopDrag}
              onTouchStart={startDrag}
              onTouchEnd={stopDrag}
              className="max-val bg-primary-700 opacity-0 z-20"
            />
            <div
              className="relative z-10 h-0.5"
              style={{ margin: 'auto', width: '90%' }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-gray-200 rounded-md"></div>
              <div
                className="absolute top-0 bottom-0 z-20 rounded-md bg-primary-700"
                style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
              ></div>
              <div
                className="absolute top-0 left-0 z-30 w-1 h-[15px] -mt-2 -ml-1 bg-primary-700 rounded-full"
                style={{ left: `${minThumb}%` }}
              ></div>
              <div
                className="absolute top-0 right-0 z-30 w-1 h-[15px] -mt-2 -mr-1 bg-primary-700 rounded-full"
                style={{ right: `${maxThumb}%` }}
              ></div>
            </div>
            {isDragging && <div className="min-tooltip">{minVal}</div>}
            {isDragging && <div className="max-tooltip">{maxVal}</div>}
          </div>
          <div className="flex flex-col items-center justify-between gap-4 mt-8 md:flex-row">
            <div className="flex items-center">
              Precio:&nbsp;
              <div className="font-semibold">
                <span> S/. {minInput}</span>
              </div>
              &nbsp; — &nbsp;
              <div className="font-semibold">
                <span> S/. {maxInput}</span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-between gap-4 mt-2 md:flex-row"
            style={{ justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase bg-gray-100 rounded-full hover:bg-gray-200"
            >
              Filtrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
