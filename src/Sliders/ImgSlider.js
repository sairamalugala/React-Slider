import Slider from "../Slider";
import "./ImgSlider.css";

const ImgSlider = () => {
  return (
    <Slider
      data={[
        {
          imgUrl: "https://www.w3schools.com/howto/img_lights_wide.jpg",
          caption: "Light"
        },
        {
          imgUrl: "https://www.w3schools.com/howto/img_snow_wide.jpg",
          caption: "Snow"
        },
        {
          imgUrl: "https://www.w3schools.com/howto/img_nature_wide.jpg",
          caption: "Nature"
        },
        {
          imgUrl: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
          caption: "Mountains"
        }
      ]}
      dotTemplate={() => {
        return <span className="dot"></span>;
      }}
      autoSlide
      autoSlideTimer={4500}
      activeClassName="hightlight"
    >
      {({ currentSlide, onPrevSlide, onNextSlide, sliderPointer, sliderDots }) => {
        if (!currentSlide) {
          return null;
        }
        return (
          <>
            <div className="slideshow-container">
              <div className="mySlides">
                <div className="numbertext">{sliderPointer + 1} / 4</div>
                <img
                  src={currentSlide["imgUrl"]}
                  alt={currentSlide["caption"]}
                />
                <div className="text">{currentSlide["caption"]}</div>
              </div>
              <button className="prev" onClick={onPrevSlide}>
                &#10094;
              </button>
              <button className="next" onClick={onNextSlide}>
                &#10095;
              </button>
            </div>
            <div className="test" style={{ textAlign: "center" }}>{sliderDots}</div>
          </>
        );
      }}
    </Slider>
  );
};

export default ImgSlider;
