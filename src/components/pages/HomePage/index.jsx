import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityInformation } from '../../../redux/asyncActions/weatherAsyncActions';

import './styles.sass';
import PageLayout from '../../PageLayout/index.jsx';
import Slider from '../../custom/CustomSlider/index.jsx';
import Header from '../../custom/CustomHeader/index.jsx';
import CustomDiagram from '../../custom/CustomDiagram/index.jsx';
import Modal from '../../custom/CustomModalWindow/index.jsx';


function HomePage({ }) {
    const [state, setState] = useState({
        counter: 0,
        isModalActive: false,
    });
    const { cities: citiesName } = useSelector(state => state.user);
    const citiesData = useSelector(state => state.weather.cities);
    const dispatch = useDispatch();


    const sliderOnClick = () => setState(prev => ({ ...prev, isModalActive: true }));


    useEffect(() => {
        setState(prev => ({
            ...prev,
            counter: citiesData.length - 1
        }))
    }, [citiesData])

    useEffect(() => {
        for (let key in citiesName) {
            dispatch(getCityInformation(citiesName[key]))
        }
    }, [citiesName])

    return (
        <PageLayout>
            <div className="home-page">
                <div className='home-page__header'>
                    <Header />
                </div>
                <div className='home-page__content'>
                    <Slider
                        slides={citiesData}
                        currentSlide={state.counter}
                        setCurrentSlide={(index) => { setState(prev => ({ ...prev, counter: index })) }}
                        onSlideClick={sliderOnClick}
                    />
                    <Modal
                        title={`Weather Forecast ${citiesData[state.counter]?.name}`}
                        active={state.isModalActive}
                        setActive={value => { setState(prev => ({ ...prev, isModalActive: value })) }}
                    >
                        <CustomDiagram
                            labels={citiesData[state.counter]?.daily?.time ?
                                citiesData[state.counter]?.daily?.time : []
                            }
                            dataset={citiesData[state.counter]?.daily?.weathercode ?
                                citiesData[state.counter]?.daily?.weathercode : []
                            }
                        />
                    </Modal>
                </div>
            </div>
        </PageLayout>
    );
}

export default HomePage;