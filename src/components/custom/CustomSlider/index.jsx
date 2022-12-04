import React, { useEffect } from "react";

import "./styles.sass";

const Slider = ({ slides, currentSlide = 0, setCurrentSlide, onClick }) => {

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
            <div className="section-center">
                {slides.map((city, slideIndex) => {
                    let position = "overSlide";
                    if ((slideIndex === currentSlide - 1) ||
                        (currentSlide === 0 && slideIndex === slides.length - 1)) {
                        position = "lastSlide";
                    }
                    if (slideIndex === currentSlide) {
                        position = "activeSlide";
                    }
                    if (slideIndex === currentSlide + 1 ||
                        (currentSlide === slides.length - 1 && slideIndex === 0)) {
                        position = "nextSlide";
                    }
                    return (
                        <React.Fragment key={city.id}>
                            <article
                                className={position}
                                key={city.id}
                                style={{ backgroundImage: `url(${city.image})` }}
                                onClick={() => {onClick()}}
                            >
                                <div className="text">
                                    <h1>{city.name}</h1>
                                    <div className="title">
                                        <p>
                                            latitude:{city.latitude};
                                        </p>
                                        <p>
                                            longitude:{city.longitude}
                                        </p>
                                    </div>
                                    <div className="simple-info">
                                        <p>temperature: {city.currentWeather.temperature} C</p>
                                        <p>windspeed: {city.currentWeather.windspeed}</p>
                                        <p>wind direction: {city.currentWeather.winddirection}</p>
                                        <p>weather code: {city.currentWeather.weathercode}</p>
                                        <p>{city.currentWeather.time}</p>
                                    </div>
                                </div>
                            </article>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="section-pagination">
                <button className="button" onClick={prevSlide}>❰</button>
                {slides.map((slide, slideIndex) =>
                    <button
                        className={"section-pagination section-pagination_slide-btn button"}
                        key={slide.id}
                        onClick={() => { setCurrentSlide(slideIndex) }}>
                        {slideIndex + 1}
                    </button>
                )}
                <button className="button" onClick={nextSlide}>❱</button>
            </div>
        </section >
    );
};

export default Slider;