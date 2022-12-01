import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    logoutAsyncAction
} from '../../../redux/asyncActions/userAsyncActions';

import {
    getCityInformation
} from '../../../redux/asyncActions/weatherAsyncActions';

import './styles.sass';


function Header() {
    // TODO: сделать валидацию тут + добавить валидацию в useValidation, + добавить сюда обработку ошибок
    const { isLoading, cities, statusMessage } = useSelector(state => state.weather)

    const dispatch = useDispatch();

    const [city, setCity] = useState('Hong kong');


    const handleFindCity = () => {
        dispatch(getCityInformation(city)).then(() => setCity(''))
    }
    const handleLogout = () => dispatch(logoutAsyncAction())

    return (
        <div className=''>
            <div className=''>
                <input
                    className=''
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className=''
                    disabled={isLoading}
                    onClick={handleFindCity}
                >
                    Search Weather
                </button>
                <p>{statusMessage}</p>
            </div>
            <button
                className=''
                onClick={handleLogout}
            >
                logout
            </button>
        </div>
    )
}

export default Header;