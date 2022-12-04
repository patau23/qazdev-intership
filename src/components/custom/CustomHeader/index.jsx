import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    logoutAsyncAction
} from '../../../redux/asyncActions/userAsyncActions';

import {
    getCityInformation
} from '../../../redux/asyncActions/weatherAsyncActions';

import './styles.sass';

// TODO: сделать валидацию для инпута - добавить валидацию в useValidation,
//      1)

// TODO: добавить сюда обработку ошибок: 
//      1) сделал вывод ошибки что "такого города нет"
//      2) 

function Header() {
    const {
        isLoading,
        cities,
        statusMessage
    } = useSelector(state => state.weather)
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const handleFindCity = () => {
        
        dispatch(getCityInformation(city.trim()))
    }
    const handleLogout = () => dispatch(logoutAsyncAction())

    useEffect(() => {
        setCity('')
    }, [cities]);

    return (
        <header className='header'>
            <div className='header__search-block'>
                <button
                    className='header__button button'
                    disabled={isLoading}
                    onClick={handleFindCity}
                >i</button>
                <input
                    className='header__input input'
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