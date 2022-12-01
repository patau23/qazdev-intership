import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initLocalStorageStateAsyncAction } from './redux/asyncActions/initStateAsyncActions';

import './App.sass';
import AppRoutes from './components/routes/AppRoutes/index.jsx';
import Api from './services/api';


export default function App(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initLocalStorageStateAsyncAction())
        // async function fetchData() {
        //     const res = await Api.images.getCityImages('London')
        //     console.log(res);
        // }
        // fetchData()
    }, []);

    return (
        <>
            <AppRoutes />
        </>
    )
}