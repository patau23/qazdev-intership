import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    addNewCity,
    logoutAsyncAction
} from '../../../redux/asyncActions/userAsyncActions';

import {
    getCityInformation
} from '../../../redux/asyncActions/weatherAsyncActions';

import './styles.sass';


function Header() {
    const {
        isLoading,
        cities: citiesData,
        statusMessage
    } = useSelector(state => state.weather);
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const handleFindCity = () => {
        dispatch(addNewCity(city))
    }

    const handleLogout = () => {
        dispatch(logoutAsyncAction())
        // TODO: вынести название для экшена (?)
        dispatch({ type: "TERMINATE_STORE" })
    }

    useEffect(() => {
        setCity('')
    }, [citiesData]);

    return (
        <header className='header'>
            <div className='header__search-block'>
                <button
                    className='header__button button'
                    disabled={isLoading}
                    onClick={handleFindCity}
                >i</button>
                <input
                    className='input header__input'
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <p className='header__message'>{statusMessage}</p>
            </div>
            <button
                className='header__button button'
                onClick={handleLogout}
            >i</button>
        </header>
    )
}

export default Header;