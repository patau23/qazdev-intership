import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from '../../pages/AuthPage/index.jsx';
import HomePage from '../../pages/HomePage/index.jsx';
import NotFoundPage from '../../pages/NotFoundPage/index.jsx';
import CityDetailPage from '../../pages/CityDetailPage/index.jsx'

import PrivateRoute from '../PrivateRoute/index.jsx';
import GuestRoute from '../GuestRoute/index.jsx';


export default function AppRoutes(props) {
    return (
        <Routes>
            <Route path='/' element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>
            } />
            <Route path='/auth' element={
                <GuestRoute>
                    <AuthPage />
                </GuestRoute>
            } />
            <Route path='/detail-city/:id' element={
                <PrivateRoute>
                    <CityDetailPage />
                </PrivateRoute>
            } />
            <Route path='/not-found-404' element={<NotFoundPage />} />
            <Route path='*' element={<Navigate to={'/not-found-404'} />} />
        </Routes>
    );
}
