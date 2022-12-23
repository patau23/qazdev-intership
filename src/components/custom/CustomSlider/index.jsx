import React, { useEffect } from "react";

import "./styles.sass";
import SliderPage from "../CustomSliderPage/index.jsx";
import { useSelector } from "react-redux";

const Slider = ({ slides, currentSlide = 0, setCurrentSlide, onSlideClick }) => {

    const nextSlide = () => {
        const lastIndex = slides.length - 1;
        if (currentSlide !== lastIndex) setCurrentSlide(currentSlide + 1);
        else if (currentSlide === lastIndex) setCurrentSlide(0);
    }

    const prevSlide = () => {
        if (currentSlide !== 0) setCurrentSlide(currentSlide - 1);
        else if (currentSlide === 0) setCurrentSlide(slides.length - 1)
    }

    return (
        <section className="section">

            <div className="section__center">
                {slides.map((city, slideIndex) =>
                    <SliderPage
                        key={slideIndex}
                        slides={slides}
                        slide={city}
                        onSlideClick={onSlideClick}
                        slideIndex={slideIndex}
                        currentSlide={currentSlide}
                    />
                )}
            </div>

            <div className="section__pagination">
                <button className="button" onClick={prevSlide}>❰</button>
                {slides.map((slide, slideIndex) => {
                    let active = '';
                    if (slideIndex === currentSlide) active = 'section__button_active';
                    else active = '';
                    return (
                        <button
                            className={"button section__button " + active}
                            key={slide.id}
                            onClick={() => {
                                setCurrentSlide(slideIndex)
                            }}
                        >
                            {slideIndex + 1}
                        </button>
                    )
                })}
                <button className="button" onClick={nextSlide}>❱</button>
            </div>

        </section>
    );
};

export default Slider;