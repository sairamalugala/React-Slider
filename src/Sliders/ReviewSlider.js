import Slider from "../Slider";
import "./ReviewSlider.css";
const ReviewSlider = () => {
  return (
    <Slider
      data={[
        {
          description:
            "I love you the more in that I believe you had liked me for my own sake and for nothing else",
          author: "John Keats"
        },
        {
          description:
            "But man is not made for defeat. A man can be destroyed but not defeated.",
          author: "Ernest Hemingway"
        },
        {
          description:
            "I have not failed. I've just found 10,000 ways that won't work.",
          author: "Thomas A. Edison"
        }
      ]}
      autoSlide="true"
    >
      {({ currentSlide, onPrevSlide, onNextSlide }) => {
        if (!currentSlide) {
          return null;
        }
        return (
          <div className="slideshow-container">
            <div className="mySlides">
              <q>{currentSlide["description"]}</q>
              <p className="author">- {currentSlide["author"]}</p>
            </div>

            <button className="prev" onClick={onPrevSlide}>
              ❮
            </button>
            <button className="next" onClick={onNextSlide}>
              ❯
            </button>
          </div>
        );
      }}
    </Slider>
  );
};

export default ReviewSlider;
