import React, { useState, useEffect } from "react";
const Slider = (props) => {
  let { data, dotTemplate, activeClassName, autoSlide, autoSlideTimer, children } = props;
  const [sliderPointer, setSliderPointer] = useState(0);
  const [sliderData, setSliderData] = useState([]);
  const timerRef = React.useRef(null);

  /* SETTING DATA FROM THE PROPS */
  useEffect(() => {
    setSliderData([...data])
  }, []);

  /* AUTO SLIDE FUNCTIONALITY */
  useEffect(() => {
    if (autoSlide) {
      if (!autoSlideTimer) {
        autoSlideTimer = 2000;
      }
      if (typeof autoSlideTimer == "string") {
        autoSlideTimer = parseInt(autoSlideTimer);
      }
      clearTimerInterval();
      timerRef.current = setTimeout(onNextSlide, autoSlideTimer);
    }
    return () => {
      clearTimerInterval();
    }
  }, [sliderPointer]);

  /* CLEAR TIMER */
  const clearTimerInterval = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }

  /* NEXT SLIDE  */
  const onNextSlide = () => {
    let $sliderData = [...sliderData];
    let currentSliderPointer = sliderPointer + 1;
    if ($sliderData.length - 1 === sliderPointer) {
      currentSliderPointer = 0;
    }
    setSliderPointer(currentSliderPointer);
  };

  /* PREV SLIDE */
  const onPrevSlide = () => {
    let $sliderData = [...sliderData];
    let currentSliderPointer = sliderPointer - 1;
    if (sliderPointer === 0) {
      currentSliderPointer = $sliderData.length - 1;
    }
    setSliderPointer(currentSliderPointer);
  };

  /* CURRENT SLIDE */
  const onCurrentSlide = function (index) {
    setSliderPointer(index);
  };

  let sliderDots = null;
  if (sliderData && dotTemplate) {
    const dot = dotTemplate();
    let classes = dot.props.className;
    if (!classes) {
      classes = "";
    }
    sliderDots = sliderData.map((sliderObj, ind) => {
      return React.cloneElement(dot, {
        ...dot.prpos,
        key: ind,
        onClick: () => {
          onCurrentSlide(ind);
        },
        className: ind === sliderPointer ? classes + " " + activeClassName : classes
      });
    });
  }
  const childProps = {
    currentSlide: sliderData[sliderPointer] || null,
    onNextSlide,
    onPrevSlide,
    sliderPointer,
    sliderDots
  };
  return children(childProps);
};

export default Slider;
