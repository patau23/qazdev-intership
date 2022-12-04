import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import './styles.sass';
import PageLayout from '../../PageLayout/index.jsx';
import Slider from '../../custom/CustomSlider/index.jsx';
import Header from '../../custom/CustomHeader/index.jsx';
import CustomDiagram from '../../custom/CustomDiagram/index.jsx';
import CustomAccordion from '../../custom/CustomAccordion/index.jsx';


function HomePage() {
    const cities = useSelector(state => state.weather.cities);
    const [state, setState] = useState({
        counter: 0,
        isModalActive: false,
    });
    const accordionRef = useRef(null)


    const sliderOnClick = () => setState(prev => ({ ...prev, isModalActive: true }))

    useEffect(() => {
        if (state.isModalActive) {
            accordionRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [state.isModalActive]);


    useEffect(() => {
        setState(prev => ({
            ...prev,
            counter: cities.length - 1
        }))
    }, [cities]);

    return (
        <PageLayout>
            <div className="homepage-container">
                <div className='homepage-container__header'>
                    <Header />
                </div>
                <div className='homepage-container__content'>
                    <Slider
                        slides={cities}
                        currentSlide={state.counter}
                        setCurrentSlide={(index) => {
                            setState(prev => ({ ...prev, counter: index }))
                        }}
                        onClick={sliderOnClick}
                    >

                    </Slider>
                    <CustomAccordion
                        title={`Weather Forecast ${cities[state.counter]?.name}`}
                        isActive={state.isModalActive}
                        setIsActive={value => setState(prev => ({ ...prev, isModalActive: value }))}
                        customRef={accordionRef}
                    >
                        <CustomDiagram
                            labels={
                                cities[state.counter]?.daily?.time ?
                                    cities[state.counter]?.daily?.time : []
                            }
                            dataset={
                                cities[state.counter]?.daily?.weathercode ?
                                    cities[state.counter]?.daily?.weathercode : []
                            }
                        />
                    </CustomAccordion>
                </div>
            </div>
        </PageLayout>
    );
}

export default HomePage;