import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initLocalStorageStateAsyncAction } from './redux/asyncActions/initStateAsyncActions';

import './App.sass';
import AppRoutes from './components/routes/AppRoutes/index.jsx';

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initLocalStorageStateAsyncAction())
    }, []);

    return (
        <>
            <AppRoutes />
        </>
    )
}