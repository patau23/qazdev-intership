import React, { useState, useEffect } from 'react';

import './styles.sass'

function SliderPage({
    slides,
    slide,
    slideIndex,
    currentSlide,
    onSlideClick
}) {
    const [position, setPosition] = useState("overSlide");

    useEffect(() => {
        if ((slideIndex === currentSlide - 1) ||
            (currentSlide === 0 && slideIndex === slides.length - 1)) {
            setPosition("lastSlide")
        }
        else if (slideIndex === currentSlide) {
            setPosition("activeSlide")
        }
        else if (slideIndex === currentSlide + 1 ||
            (currentSlide === slides.length - 1 && slideIndex === 0)) {
            setPosition("nextSlide")
        } else {
            setPosition("overSlide")
        }
    }, [currentSlide, slideIndex]);

    return (
        <article
            className={'slide slide_' + position}
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
            onClick={onSlideClick}
        >
            <div className="island">
                <h1 className="island__title">
                    {slide.name}
                </h1>
                <div className="island__coordinate">
                    <p>lat:{slide.latitude.toFixed(2)}</p>
                    <p>long:{slide.longitude.toFixed(2)}</p>
                </div>
                <div className="island__main-info">
                    <p>temperature: {slide.currentWeather.temperature} C</p>
                    <p>windspeed: {slide.currentWeather.windspeed}</p>
                    <p>wind direction: {slide.currentWeather.winddirection}</p>
                    <p>weather code: {slide.currentWeather.weathercode}</p>
                    <p>{slide.currentWeather.time}</p>
                </div>
            </div>
        </article>
    );
}

export default SliderPage;