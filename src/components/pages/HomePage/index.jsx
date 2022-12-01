import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './styles.sass';
import PageLayout from '../../PageLayout/index.jsx';
import Slider from '../../custom/CustomSlider/index.jsx';
import Header from '../../custom/CustomHeader/index.jsx';
import CustomDiagram from '../../custom/CustomDiagram/index.jsx';


function HomePage(props) {
    const cities = useSelector(state => state.weather.cities);
    const [state, setState] = useState({
        counter: 0,
        isAccordionActive: false,
    });


    useEffect(() => {
        setState(prev => ({ ...prev, counter: cities.length - 1 }))
    }, [cities]);


    return (
        <PageLayout>
            <div className="homepage-container">
                <Header />
                <div className='content'>
                    <Slider
                        slides={cities}
                        currentSlide={state.counter}
                        setCurrentSlide={(index) => {
                            setState(prev => ({ ...prev, counter: index }))
                        }}
                    />
                    <CustomDiagram
                        labels={cities[state.counter].daily.time}
                        dataset={cities[state.counter].daily.weathercode}
                    />
                </div>
            </div>
        </PageLayout>
    );
}

export default HomePage;